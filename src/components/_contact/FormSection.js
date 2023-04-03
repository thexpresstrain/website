import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Block, Heading } from '../utility';
import Form from './ContactForm';

const Wrapper = styled.div.attrs({})``;

const FormStyles = styled.div.attrs({ className: 'text-sm' })`
  #contact-form-wrapper {
    #grid-firstname {
      grid-area: firstname;
    }
    #grid-lastname {
      grid-area: lastname;
    }
    #grid-email {
      grid-area: email;
    }
    #grid-phone {
      grid-area: phone;
    }
    #grid-compamy {
      grid-area: company;
    }
    #grid-message {
      grid-area: message;
    }
    #grid-checkbox {
      grid-area: checkbox;
    }
    #grid-button {
      grid-area: button;
    }
    display: grid;
    grid-template-areas:
      'firstname'
      'lastname'
      'email'
      'phone'
      'company'
      'message'
      'checkbox'
      'button';
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'firstname lastname'
        'email email'
        'phone company'
        'message message'
        'checkbox checkbox'
        'button button';
    }
    grid-column-gap: 1rem;
  }
  max-width: 600px;
  margin: 0 auto;
`;

const FormSection = () => {
  //
  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <Heading xs="center" sm="center" md="center" lg="center" xl="center">
              <h1>Contact Us</h1>
              <p>Leave us a feedback or submit your enquiries here</p>
            </Heading>
            <FormStyles>
              <Form />
            </FormStyles>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default FormSection;
