/* eslint-disable react-refresh/only-export-components */
import { Field, ErrorMessage, Form, Formik } from "formik";
import styled from "styled-components";
import { Button } from "./Button";

interface StyledComponentsProps {
  className: string;
}

function Contact(props: StyledComponentsProps) {
  return (
    <div className={props.className}>
      <div className="image-container">
        <img src="../src/assets/img/contact.png" alt="" />
      </div>
      <span className="contact-h1-container">
        <h1>Kontakta Admin</h1>
      </span>
      <Formik
        initialValues={{ userName: "", email: "", message: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Formik submit values", values);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
        validate={(values) => {
          const errors: Partial<typeof values> = {};

          if (values.userName.trim() === "") {
            errors.userName = "Namn kan inte lämnas tom";
          }

          if (values.email.trim() === "") {
            errors.email = "Email kan inte lämnas tom";
          }

          if (values.message.trim() === "") {
            errors.message = "Meddelande kan inte lämnas tom";
          }

          return errors;
        }}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form>
            <div className="contact-container">
              <label>
                <span className="contact-label"> Namn</span>

                <Field name="userName" className="contact-input" />
              </label>
              <ErrorMessage
                component="span"
                name="userName"
                className="contact-error"
              />
            </div>
            <div className="contact-container">
              <label>
                <span className="contact-label"> Email</span>

                <Field name="email" className="contact-input" />
              </label>
              <ErrorMessage
                component="span"
                name="email"
                className="contact-error"
              />
            </div>
            <div className="contact-container">
              <label className="contact-label-message">
                <span className="contact-label">Meddelande</span>

                <Field as="textarea" name="message" className="contact-input" />
              </label>
              <ErrorMessage
                component="span"
                name="message"
                className="contact-error"
              />
            </div>
            <Button disabled={!dirty || isSubmitting || !isValid}>
              Skicka
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default styled(Contact)`
  height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100vw;

  .contact-container {
    color: #f5e4e4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "none label error";
  }

  .contact-error {
    background-color: #f5e4e4;
    border-radius: 1em;
    box-shadow: 7px 5px 5px red, -7px -5px 5px red;
    color: red;
    font-size: 0.8rem;
    grid-area: error;
    height: fit-content;
    margin-right: 5px;
    margin-top: 10.5px;
    padding: 3px 3px 2px 5px;
    width: 100px;
  }

  .contact-input {
    align-items: flex-start;
    display: flex;
    margin-bottom: 10px;
    width: 150px;
  }

  .contact-label {
    color: white;
    text-align: end;
    text-shadow: 2px 2px 5px black, -2px -2px 5px black, -2px -2px 15px #fc0,
      2px 2px 15px #fc0;
    width: 5rem;
  }

  .contact-label-message {
    margin-right: 20%;
  }

  .contact-h1-container {
    display: flex;
    justify-content: center;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h1 {
    background-color: rgb(255, 183, 2, 0.8);
    border-radius: 30px;
    box-shadow: 2px 2px 15px #ffb702, 2px 2px 15px rgb(255, 183, 2);
    color: white;
    margin: 30px 0 20px 0;
    text-shadow: 2px 2px 5px black, -2px -2px 5px black, -2px -2px 15px #fc0,
      2px 2px 15px #fc0;
    width: fit-content;
  }

  .image-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100vh;
    }
  }

  label {
    background-color: rgb(255, 183, 2, 0.55);
    border-radius: 20px;
    display: grid;
    grid-area: label;
    grid-gap: 10px;
    grid-template-columns: 1fr 2fr;
    padding: 10px 10px 0 10px;
  }
`;
