import React from 'react';
import styled from 'styled-components';
import NewsletterForm from '../NewsletterForm';
import { Section, Container, Block, Heading } from '../utility';

const Wrapper = styled.div.attrs({})``;

const GridLayout = styled.div.attrs({ className: 'px-2' })`
  display: grid;
  @media (min-width: 1280px) {
    grid-template-columns: 360px 1fr;
  }
`;

const FormStyles = styled.div.attrs({ className: 'text-sm' })`
  #form-wrapper {
    #grid-firstName {
      grid-area: firstname;
    }
    #grid-lastName {
      grid-area: lastname;
    }
    #grid-email {
      grid-area: email;
    }
    #grid-button {
      grid-area: button;
      display: flex;
      justify-content: flex-end;
      padding-top: 2rem;
    }
    #grid-link {
      grid-area: link;
    }
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      'firstname'
      'lastname'
      'email'
      'link'
      'button';

    @media (min-width: 380px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'firstname firstname'
        'lastname lastname'
        'email email'
        'link button';
    }
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      grid-template-areas:
        'firstname lastname'
        'email email'
        'link button';
    }
  }
  max-width: 600px;
  margin: 2rem auto 0;
  width: 100%;
`;

const Newsletter = () => {
  //
  return (
    <Wrapper>
      <Section color="#f7fafc">
        <Container>
          <Block>
            <GridLayout>
              <div>
                <Heading xs="center" sm="center" md="center">
                  <span>Stay In Touch</span>
                  <h2>TXT Community Newsletter</h2>
                  <p>Send me updates on offers and events.</p>
                </Heading>
              </div>
              <FormStyles>
                <NewsletterForm />
              </FormStyles>
            </GridLayout>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Newsletter;
