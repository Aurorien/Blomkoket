/* eslint-disable react-refresh/only-export-components */
import { Field, ErrorMessage, Form, Formik } from "formik";
import styled from "styled-components";
import { Button } from "./Button.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface StyledComponentsProps {
  className: string;
}

function Contact(props: StyledComponentsProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className={props.className}>
      <div className="image-container">
        <img src="../src/assets/img/contact.png" alt="" />
      </div>
      <div className="contact-head-container">
        <h1 className="contact-head">Kontakta Admin</h1>
        {submitted ? (
          <p className="contact-headinfo-2">
            Tack för ditt meddelande! Vi svarar så snart vi kan!
          </p>
        ) : (
          <p className="contact-headinfo-1">
            Varsågod att skicka meddelande via nedan formulär!
          </p>
        )}
      </div>

      {/* If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved. This means you do NOT need to call formikBag.setSubmitting(false) manually. However, if your onSubmit function is synchronous, then you need to call setSubmitting(false) on your own. -Formik docs */}
      <Formik
        initialValues={{ userName: "", email: "", message: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Formik submit values", values);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
            setSubmitted(false);
            navigate("/");
          }, 3500);
        }}
        validate={(values) => {
          const errors: Partial<typeof values> = {};

          if (values.userName.trim() === "") {
            errors.userName = "Namn behöver fyllas i";
          }

          if (values.email.trim() === "") {
            errors.email = "Email behöver fyllas i";
          }

          if (values.message.trim() === "") {
            errors.message = "Meddelande behöver fyllas i";
          }

          return errors;
        }}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form>
            {submitted ? null : (
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
                  <div className="contact-error-container">
                    <ErrorMessage
                      className="contact-error"
                      component="span"
                      name="userName"
                    />
                  </div>
                  <label className="contact-label" htmlFor="email">
                    {" "}
                    Email
                  </label>
                  <Field id="email" name="email" className="contact-input" />
                  <div className="contact-error-container">
                    <ErrorMessage
                      className="contact-error"
                      component="span"
                      name="email"
                    />
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
                  <div className="contact-error-container">
                    <ErrorMessage
                      className="contact-error"
                      component="span"
                      name="message"
                    />
                  </div>
                  <div className="contact-button">
                    <Button disabled={!dirty || isSubmitting || !isValid}>
                      Skicka
                    </Button>
                  </div>
                </div>
              </div>
            )}
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
    margin-top: 9px;
    grid-column: 3;
  }

  .contact-container {
    color: #f5e4e4;
    display: grid;
    grid-template-columns: 10px auto auto 1fr;
    row-gap: 10px;
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
    display: inline-block;
    background-color: #f5e4e4;
    border-radius: 1em;
    box-shadow: 7px 5px 5px red, -7px -5px 5px red;
    color: red;
    font-size: 0.6rem;
    height: fit-content;
    margin-top: 3px;
    padding: 2px 2px 3px 2px;
  }

  .contact-error-container {
    grid-column: 4;
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

  .contact-head {
    background-color: rgb(255, 183, 2, 0.8);
    border-radius: 30px;
    box-shadow: 2px 2px 15px #ffb702, 2px 2px 15px rgb(255, 183, 2);
    color: white;
    margin: 70px 0 15px 0;
    text-shadow: 2px 2px 5px black, -2px -2px 5px black, -2px -2px 15px #fc0,
      2px 2px 15px #fc0;
    width: fit-content;
  }

  .contact-headinfo-1,
  .contact-headinfo-2 {
    border-radius: 30px;
    color: #ffffff;
    font-size: 0.97rem;
    margin-top: 0;
    margin-bottom: 25px;
    padding: 5px;
  }

  .contact-headinfo-1 {
    background-color: rgb(49, 78, 0, 0.7);
    box-shadow: 2px 2px 5px rgb(40, 40, 39, 0.6),
      2px 2px 5px rgb(82, 83, 67, 0.3);
    text-shadow: 2px 2px 5px black, -2px -2px 5px black, 2px -2px 5px #1b1b14,
      -2px -2px 15px rgb(82, 83, 67, 0.8), 2px 2px 15px rgb(82, 83, 67, 0.8);
  }

  .contact-headinfo-2 {
    margin-top: 55px;
    background-color: rgb(54, 134, 64, 0.8);
    box-shadow: 2px 2px 30px rgb(255, 204, 0, 0.8),
      2px 2px 30px rgb(255, 204, 0, 0.8);
    text-shadow: 2px 2px 5px black, -2px -2px 5px black, -2px -2px 15px #fc0,
      2px 2px 15px #fc0;
  }

  .contact-head-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  form {
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
