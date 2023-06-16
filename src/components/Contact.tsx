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
            <div className="contact-container-container">
              <div className="contact-container">
                <label className="contact-label" htmlFor="userName">
                  {" "}
                  Namn
                </label>
                <Field
                  id="userName"
                  name="userName"
                  className="contact-input"
                />
                <div className="contact-error">
                  <ErrorMessage component="span" name="userName" />
                </div>
                <label className="contact-label" htmlFor="email">
                  {" "}
                  Email
                </label>
                <Field id="email" name="email" className="contact-input" />
                <div className="contact-error">
                  <ErrorMessage component="span" name="email" />
                </div>

                <label className="contact-label" htmlFor="message">
                  {" "}
                  Meddelande
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="contact-input"
                />
                <div className="contact-error">
                  <ErrorMessage component="span" name="message" />
                </div>
                <div className="contact-button">
                  <Button disabled={!dirty || isSubmitting || !isValid}>
                    Skicka
                  </Button>
                </div>
              </div>
            </div>
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

  .contact-button {
    grid-column: 3;
  }

  .contact-container {
    color: #f5e4e4;
    display: grid;
    grid-template-columns: 10px auto auto 1fr;
    row-gap: 3px;
    width: fit-content;
  }

  .contact-container-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100vw;
  }

  .contact-message-container {
    width: 200px;
    text-align: end;
  }

  .contact-error {
    background-color: #f5e4e4;
    border-radius: 1em;
    box-shadow: 7px 5px 5px red, -7px -5px 5px red;
    color: red;
    font-size: 0.6rem;
    grid-column: 4;
    height: fit-content;
    margin-top: 3px;
    padding: 0 2px 0 0;
    width: 90px;
  }

  .contact-input {
    align-items: flex-start;
    display: flex;
    grid-column: 3;
    margin-top: 0px;
    width: 150px;
  }

  .contact-label {
    background-color: rgb(255, 183, 2, 0.55);
    border-radius: 20px 0px 0px 20px;
    color: white;
    display: flex;
    justify-self: end;
    align-self: self-start;
    grid-column: 2;
    padding: 5px 5px 4px 10px;
    text-align: right;
    text-shadow: 2px 2px 5px black, -2px -2px 5px black, -2px -2px 15px #fc0,
      2px 2px 15px #fc0;
  }

  .contact-h1-container {
    display: flex;
    justify-content: center;
  }

  form {
    width: fit-content;
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
`;
