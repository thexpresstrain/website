import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
// import { API } from 'aws-amplify';
import { contactFormValidation } from '../../utils/yup';
import Input from '../primitives/Input';
import TextArea from '../primitives/TextArea';
import Checkbox from '../primitives/Checkbox';
import { Button } from '../primitives/Buttons';

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const Wrapper = styled.div.attrs({
  className: 'bg-gray-300 shadow-md mx-auto px-8 py-16 rounded-lg',
})`
  a {
    transition: all 0.2s ease-in-out;
    box-shadow: #000000 0 -1px 0 inset;
    :hover {
      color: tomato; /* brand color */
      box-shadow: tomato 0 -1px 0 inset;
    }
  }
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 2rem;
`;

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
        phone: '',
        company: '',
        message: '',
        agree: false,
        captcha: false,
      }}
      validationSchema={contactFormValidation}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values, actions) => {
        try {
          // const response = await API.post('contactForm', '/contactform', {
          //   body: {
          //     firstname: values.firstName,
          //     lastname: values.lastName,
          //     email: values.email,
          //     phone: values.phone,
          //     company: values.company,
          //     message: values.message,
          //   },
          // });
          console.log(response);
          console.log(values);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ values, handleChange, errors, setErrors, setFieldValue }) => {
        //
        const resetError = field => {
          setErrors({ ...errors, [field]: '' });
        };

        const handleChangeMessage = e => {
          setFieldValue(e.target.name, e.target.value);
        };

        const handleCheckbox = field => {
          resetError(field);
          setFieldValue(field, !values[field]);
        };

        const Agreement = (
          <span>
            Agree to our{' '}
            <a href={`${siteUrl}/privacy`} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </span>
        );

        return (
          <Wrapper>
            <Form>
              <div id="contact-form-wrapper">
                <div id="grid-firstname">
                  <Input
                    asterisk
                    asteriskColor="tomato"
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
                    asterisk
                    asteriskColor="tomato"
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
                    onChange={handleChange}
                    onFocus={e => {
                      resetError(e.target.name);
                    }}
                  />
                </div>

                <div id="grid-phone">
                  <Input
                    labelText="Phone"
                    inputName="phone"
                    value={values.phone}
                    errorText={errors.phone}
                    onChange={handleChange}
                    onFocus={e => {
                      resetError(e.target.name);
                    }}
                  />
                </div>

                <div id="grid-compamy">
                  <Input
                    labelText="Company"
                    inputName="company"
                    value={values.company}
                    errorText={errors.company}
                    onChange={handleChange}
                    onFocus={e => {
                      resetError(e.target.name);
                    }}
                  />
                </div>

                <div id="grid-message">
                  <TextArea
                    asterisk
                    asteriskColor="tomato"
                    placeholder="Do leave us a message"
                    labelText="Message"
                    inputName="message"
                    value={values.message}
                    errorText={errors.message}
                    rows="4"
                    onChange={e => handleChangeMessage(e)}
                    onFocus={e => {
                      resetError(e.target.name);
                    }}
                  />
                </div>

                <div id="grid-checkbox">
                  <CheckboxWrapper>
                    <Checkbox
                      asterisk
                      asteriskColor="tomato"
                      inputName="agree"
                      labelNode={Agreement}
                      value={values.agree}
                      errorText={errors.agree}
                      onChange={handleChange}
                      onFocus={e => {
                        resetError(e.target.name);
                      }}
                    />
                  </CheckboxWrapper>
                </div>
                <div id="grid-button">
                  <Button type="submit" label="Send message">
                    Send Form
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