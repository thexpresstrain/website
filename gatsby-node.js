/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */

require('dotenv').config();

const path = require(`path`);
const postsPerPage = 6;
const { paginate } = require(`gatsby-awesome-pagination`);

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */

exports.createPages = async ({ graphql, actions }) => {
  //
  const { createPage } = actions;

  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            url
          }
        }
      }
      allSanityTeam {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Extract query results
  // Results for Ghost
  const tags = result.data.allGhostTag.edges;
  const authors = result.data.allGhostAuthor.edges;
  const posts = result.data.allGhostPost.edges;
  // const pages = result.data.allGhostPage.edges;

  // Results for Sanity
  const members = result.data.allSanityTeam.edges;

  // Load templates
  const tagsTemplate = path.resolve(`./src/templates/tag.js`);
  const authorTemplate = path.resolve(`./src/templates/author.js`);
  const postTemplate = path.resolve(`./src/templates/post.js`);
  const blogTemplate = path.resolve(`./src/templates/blog.js`);
  // const pageTemplate = path.resolve(`./src/templates/page.js`);
  const memberTemplate = path.resolve(`./src/templates/member.js`);
  const writerTemplate = path.resolve(`./src/templates/writer.js`);

  // Create tag pages
  tags.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0;
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);
    node.url = `/tag/${node.slug}/`;

    Array.from({
      length: numberOfPages,
    }).forEach((_, i) => {
      const currentPage = i + 1;
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
      const previousPagePath = prevPageNumber
        ? prevPageNumber === 1
          ? node.url
          : `${node.url}page/${prevPageNumber}/`
        : null;
      const nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null;
      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: tagsTemplate,
        context: {
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber,
          nextPageNumber,
          previousPagePath,
          nextPagePath,
        },
      });
    });
  });

  // Create author pages
  authors.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0;
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);
    node.url = `/post-by/${node.slug}/`;

    Array.from({
      length: numberOfPages,
    }).forEach((_, i) => {
      const currentPage = i + 1;
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
      const previousPagePath = prevPageNumber
        ? prevPageNumber === 1
          ? node.url
          : `${node.url}page/${prevPageNumber}/`
        : null;
      const nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null;
      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: authorTemplate,
        context: {
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber,
          nextPageNumber,
          previousPagePath,
          nextPagePath,
        },
      });
    });
  });

  // Uncomment the code block below if pages are needed
  // Create pages
  // pages.forEach(({ node }) => {
  //   node.url = `/${node.slug}/`;

  //   createPage({
  //     path: node.url,
  //     component: pageTemplate,
  //     context: {
  //       slug: node.slug,
  //     },
  //   });
  // });

  // Create post pages
  posts.forEach(({ node }) => {
    node.url = `/blog/${node.slug}/`;
    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    });
  });

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: blogTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/blog`;
      }
      return `/blog/page`;
    },
  });

  // Create Team Member pages
  members.forEach(({ node }) => {
    node.url = `/team/${node.slug.current}/`;
    createPage({
      path: node.url,
      component: memberTemplate,
      context: {
        slug: node.slug.current,
      },
    });
  });

  // Create Writer pages
  authors.forEach(({ node }) => {
    node.url = `/writer/${node.slug}/`;
    createPage({
      path: node.url,
      component: writerTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
//
/* ************************** */
/*                            */
/*   Node Creation Section    */
/*                            */
/* ************************** */

exports.onCreateNode = async ({ node, actions, store, createNodeId, cache }) => {
  // Check that we are modifying right node types.
  const nodeTypes = [`GhostPost`, `GhostAuthor`];

  if (!nodeTypes.includes(node.internal.type)) {
    return;
  }

  if (node.internal.type === 'GhostPost') {
    //! Needs error handling of null profile image
    const { createNode } = actions;
    let profileImageUrl = node.authors[0].profile_image;

    if (profileImageUrl !== null && profileImageUrl.includes('gravatar')) {
      profileImageUrl = `https:${profileImageUrl}`;
    }

    if (profileImageUrl === null) {
      profileImageUrl = process.env.DEFAULT_PROFILE_IMAGE;
    }

    // Replace url with production ready link
    let featureImageUrl = process.env.DEFAULT_FEATURE_IMAGE;

    if (node.feature_image !== null) {
      featureImageUrl = node.feature_image;
    }

    // Download image and create a File node with gatsby-transformer-sharp.
    const featureImage = await createRemoteFileNode({
      url: featureImageUrl,
      store,
      cache,
      createNode,
      parentNodeId: node.id,
      createNodeId,
    });

    const profileImage = await createRemoteFileNode({
      url: profileImageUrl,
      store,
      cache,
      createNode,
      parentNodeId: node.id,
      createNodeId,
    });

    // Link File node to GhostPost node at field image.
    if (featureImage) {
      node.localFeatureImage___NODE = featureImage.id;
    }
    if (profileImage) {
      node.localProfileImage___NODE = profileImage.id;
    }
  }

  if (node.internal.type === 'GhostAuthor') {
    const { createNode } = actions;

    //! Needs error handling of null image
    let profileImageUrl = node.profile_image;

    if (profileImageUrl !== null && profileImageUrl.includes('gravatar')) {
      profileImageUrl = `https:${profileImageUrl}`;
    }

    if (profileImageUrl === null) {
      profileImageUrl = process.env.DEFAULT_PROFILE_IMAGE;
    }

    // Download image and create a File node with gatsby-transformer-sharp.
    const profileImage = await createRemoteFileNode({
      url: profileImageUrl,
      store,
      cache,
      createNode,
      parentNodeId: node.id,
      createNodeId,
    });

    // Link File node to GhostPost node at field image.
    if (profileImage) {
      node.localProfileImage___NODE = profileImage.id;
    }
  }
};
