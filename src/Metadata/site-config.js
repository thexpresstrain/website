module.exports = {
  pages: [{ label: 'Home', link: '/' }],
  siteName: `The Xpress Train`, // This appears after page title behind a pipe
  siteDescription: `Value Proposition`, // This is used if SEO component has no "description" prop - Use business value proposition
  siteUrl: `https://www.thexpresstrain.com`,
  author: `tom@magentastudio.com.sg`,
  contact: {
    name: `Edwin Loh`,
    email: `enquiry@thexpresstrain.com`,
    address: {
      streetAddress: `Anchor 6, Mall of Medini, No. 4`,
      addressLocality: `Iskandar Puteri`,
      addressRegion: `Johor`,
      postalCode: `79200`,
      addressCountry: `MY`,
      addressCountryLong: `Malaysia`,
    },
    telephone: `+60 7-510-2939`,
    googleMap: `https://www.google.com/maps/place/The+Xpress+Train/@1.4290283,103.6309121,17z/data=!3m1!4b1!4m5!3m4!1s0x31da0b16b7ad2faf:0xe6adca6e4cd2795c!8m2!3d1.4290229!4d103.6331061`,
    latitude: 0,
    longitude: 0,
  },
  business: {
    serviceType: `Service Type`, // User defined business type
    uen: `xxxxxxxxx`,
    dayOfWeek: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`],
    dayOfWeekRange: `Mon-Fri`,
    opens: `09:00`,
    closes: `18:00`,
    priceRange: `$$$`,
    ageRestriction: 100,
  },
  eCommerce: {
    service: '', // Shopify | Stripe
  },
  marketing: ['Facebook', 'Instagram'], // Facebook | Instagram | LinkedIn | Google AdWords | Bing
  socialMedia: {
    facebook: `https://www.facebook.com/thexpresstrain`,
    instagram: `https://www.instagram.com/thexpress_train/`,
    youtube: `https://www.youtube.com/channel/UCwdQDWOupjiJNu5faLn9M9A/featured?view_as=subscriber`,
    twitter: `https://twitter.com/TrainXpress`,
  },
  remoteAssetLogo: `https://example.com`,
};
