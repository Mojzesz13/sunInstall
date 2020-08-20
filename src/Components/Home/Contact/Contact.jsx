import React, { useState } from 'react';
import './Contact.scss';
import SeparateBar from '../../common/separateBar/separateBar5';
import { Formik, useField, Form } from 'formik';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <TextField
        {...field}
        label={label}
        helperText={errorText}
        error={!!errorText}
        variant="outlined"
        margin="normal"
      />
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <SeparateBar title="ZAPRASZAMY DO KONTAKTU." number="5" />
      <div className="barContainer">
        <p>PIERWSZY KROK NALEŻY DO CIEBIE. ZAPRASZAMY DO KONTAKTU.</p>
      </div>
      <h1>Formularz kontaktowy</h1>
      <Formik
        initialValues={{
          personalDate: '',
          phoneNumber: '',
          city: '',
          message: '',
          acceptTerms: false,
        }}
        validationSchema={Yup.object({
          personalDate: Yup.string()
            .typeError('bez CYFERek')
            .min(6, 'podaj imie')
            .max(20, 'miał byc poprawny kolego')
            .required('wymagane i to bardzo '),
          phoneNumber: Yup.number()
            .typeError('MAL BYC NUMERRTYLK CYFERKI')
            .min(6, 'podaj poprawy nr')
            .max(20, 'miał byc poprawny kolego')
            .required('wymagane'),
          acceptTerms: Yup.boolean()
            .required('musisz sie zgadzac ')
            .oneOf([true], 'no co jest z a zgoda'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <CustomTextInput
              label="Imię i nazwisko"
              name="personalDate"
              type="text"
            />
            <CustomTextInput
              label="Numer eletonu"
              name="phoneNumber"
              type="text"
            />
            <CustomTextInput label="Miejscowość" name="city" type="text" />

            <div className="buttonContainer">
              <button type="submit">WYŚLIJ</button>
              <CustomCheckbox name="acceptTerms">
                Akceptuję politykę prywatności<span>RODO</span>
              </CustomCheckbox>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;

// const Contact = () => {
//   return (
//     <div className="contactContainer" id="contact">
//       <SeparateBar title="ZAPRASZAMY DO KONTAKTU." number="5" />
//       <div className="barContainer">
//         <p>PIERWSZY KROK NALEŻY DO CIEBIE. ZAPRASZAMY DO KONTAKTU.</p>
//       </div>
//       <h1>Formularz kontaktowy</h1>
//       <Formik
//         initialValues={{
//           personalDate: '',
//           phoneNumber: '',
//           city: '',
//           message: '',
//           acceptTerms: false,
//         }}
//         validationSchema={Yup.object({
//           personalDate: Yup.string()
//             .min(5, 'minimum 5 znaków')
//             .max(30, 'maxymalnie 20 znaków')
//             .required('kolego pole jest wymagane'),
//           phoneNumber: Yup.number()
//             .typeError('MAL BYC NUMERRTYLK CYFERKI')
//             .min(6, 'podaj poprawy nr')
//             .max(20, 'miał byc poprawny kolego')
//             .required('wymagane'),
//           acceptTerms: Yup.boolean()
//             .required('musisz sie zgadzac ')
//             .oneOf([true], 'no co jest z a zgoda'),
//         })}
//         onSubmit={(data, { setSubmitting }) => {
//           setSubmitting(true);
//           console.log('submit', data);
//           setSubmitting(false);
//         }}
//       >
//         {({ values, errors, isSubmitting }) => (
//           <Form className="formContainer">
//             <Field
//               name="personalDate"
//               label="Imię i nazwisko"
//               type="input"
//               variant="outlined"
//               margin="normal"
//               as={TextField}
//             />
//             <Field
//               name="phoneNumber"
//               label="Numer telefonu"
//               type="input"
//               variant="outlined"
//               margin="normal"
//               as={TextField}
//             />
//             <Field
//               name="city"
//               label="Miejscowość"
//               type="input"
//               variant="outlined"
//               margin="normal"
//               as={TextField}
//             />
//             <Field
//               name="message"
//               label="Wiadomość"
//               type="input"
//               variant="outlined"
//               margin="normal"
//               as={TextField}
//             />

//             <div className="buttonContainer">
//               <button type="submit">WYŚLIJ</button>
//               <Field name="acceptTerms" type="checkbox" />
//               <p>
//                 Akceptuję politykę prywatności<span>RODO</span>
//               </p>
//             </div>
//             <pre>{JSON.stringify(values, null, 2)}</pre>
//             <pre>{JSON.stringify(errors, null, 2)}</pre>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Contact;
