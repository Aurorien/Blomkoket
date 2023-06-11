/* eslint-disable react-refresh/only-export-components */
import { Field, ErrorMessage, Form, Formik } from "formik";
import styled from "styled-components";
import { Button } from "./Button";

interface styledComponentsProps {
  className: string
}

function Contact(props: styledComponentsProps) {
  return (
    <div className={props.className}>
      <div className="image-container">
        <img src="../src/assets/img/contact.png" alt="" />
      </div>
      <span className="contact-h1-container"><h1>Kontakta Admin</h1></span>
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
              <ErrorMessage component="span" name="userName" className="contact-error" />
            </div>
            <div className="contact-container">
              <label>
                <span className="contact-label"> Email</span>

                <Field name="email" className="contact-input" />
              </label>
              <ErrorMessage component="span" name="email" className="contact-error"/>
            </div>
            <div className="contact-container">
              <label>
                <span className="contact-label">Meddelande</span>

                <Field as="textarea" name="message" className="contact-input"/>
              </label>
              <ErrorMessage component="span" name="message" className="contact-error"/>
            </div>
            <Button disabled={!dirty || isSubmitting || !isValid} >
              Skicka
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default styled(Contact)`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;

  .contact-container {
    color: #f5e4e4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "none label error";
    grid-gap: 10px;
  }

  .contact-error {
    grid-area: error;
    display: flex;
    align-items: baseline;
    color: red;
    width: fit-content;
    height: fit-content;
    margin-top: 10.5px;
    padding: 1px 5px 1.5px 5px;
    border-radius: 20em;
    background-color: #f5e4e4;
    box-shadow: 7px 5px 5px red, -7px -5px 5px red;
  }

  .contact-input {
    display: flex;
    width: 150px;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .contact-label {
    text-align: end;
    color: white;
    text-shadow:  2px 2px 5px black, -2px -2px 5px black, -2px -2px 15px #FC0, 2px 2px 15px #FC0;
  }

  .contact-h1-container {
    display: flex;
    justify-content: center;
  }


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 30px 0 20px 0;
    background-color: rgb(255, 183, 2, .8);
    box-shadow: 2px 2px 15px #ffb702, 2px 2px 15px rgb(255, 183, 2);
    width: fit-content;

    border-radius: 30px;
    color: white;
    text-shadow:  2px 2px 5px black, -2px -2px 5px black, -2px -2px 15px #FC0, 2px 2px 15px #FC0;
  }

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100vh;
    }
  }

  label {
    grid-area: label;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    background-color: rgb(255, 183, 2, .55);
    padding: 10px 10px 0 10px;
    border-radius: 20px;
  }
`;
