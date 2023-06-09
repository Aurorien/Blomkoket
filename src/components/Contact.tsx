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
      <h1>Kontakta Admin</h1>
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
                Namn
                <Field name="userName" />
              </label>
              <ErrorMessage component="span" name="userName" />
            </div>
            <div className="contact-container">
              <label>
                Email
                <Field name="email" />
              </label>
              <ErrorMessage component="span" name="email" />
            </div>
            <div className="contact-container">
              <label>
                Meddelande
                <Field as="textarea" name="message" />
              </label>
              <ErrorMessage component="span" name="message" />
            </div>
            <Button disabled={!dirty || isSubmitting || !isValid} color={"red"}>
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

  .content-container {
    position: relative;
  }

  h1 {
    padding: 30px 0 20px 0;
    text-align: center;
  }

  .contact-container {
    color: red;
  }

  label {
    background-color: blue;
  }
`;

// export default styled(Contact)`
//   overflow: hidden;

//   h1 {
//     padding: 30px 0 20px 0;
//   }

//   .contact-container {
//     color: red
//   }


//   .image-container {
//     position: relative;
//     z-index: -1;
//   }

//   label {
//     background-color: blue;
//   }
// `;
