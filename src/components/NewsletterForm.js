import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { newsletterValidation } from '../utils/yup';
import Input from './primitives/Input';
import { Button, Anchor } from './primitives/Buttons';

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const Wrapper = styled.div.attrs({})``;

const ContactForm = () => {
  //
  const [isSuccessOpen, toggleSuccessDialog] = useState(false);
  const [isFailOpen, toggleFailDialog] = useState(false);

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(QUERY);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={newsletterValidation}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values, actions) => {
        try {
          // do something
          //
        } catch (error) {
          // report error
        }
      }}
    >
      {({ values, handleChange, errors, setErrors, setFieldValue }) => {
        //
        const resetError = field => {
          setErrors({ ...errors, [field]: '' });
        };

        return (
          <Wrapper>
            <Form>
              <div id="form-wrapper">
                <div id="grid-firstname">
                  <Input
                    labelText="First name"
                    inputName="firstName"
                    value={values.firstName}
                    errorText={errors.firstName}
                    onChange={handleChange}
                    onFocus={e => {
                      resetError(e.target.name);
                    }}
                  />
                </div>

                <div id="grid-lastname">
                  <Input
                    labelText="Last Name"
                    inputName="lastName"
                    value={values.lastName}
                    errorText={errors.lastName}
                    onChange={handleChange}
                    onFocus={e => {
                      resetError(e.target.name);
                    }}
                  />
                </div>

                <div id="grid-email">
                  <Input
                    asterisk
                    asteriskColor="tomato"
                    labelText="Email"
                    inputName="email"
                    value={values.email}
                    errorText={errors.email}
                    errorBorderColor="tomato"
                    onChange={handleChange}
                    onFocus={e => {
                      resetError(e.target.name);
                    }}
                  />
                </div>

                <div id="grid-link">
                  <Anchor href={`${siteUrl}/privacy`} target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Anchor>
                </div>

                <div id="grid-button">
                  <Button type="submit" label="Send message">
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </Wrapper>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
