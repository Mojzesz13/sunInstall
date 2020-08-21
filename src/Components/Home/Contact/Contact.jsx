import React from 'react';
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

const TextArea = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <TextField
      {...field}
      label={label}
      variant="outlined"
      margin="normal"
      {...field}
      multiline
      rowsMax={10}
    />
  );
};

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <SeparateBar title="ZAPRASZAMY DO KONTAKTU." number="5" />
      <div className="barContainer">
        <p>Pierwszy krok należy do ciebie. Zapraszamy do kontaktu.</p>
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
            .typeError('Akceptujemy tylko litert')
            .min(6, 'Minimum 6 znaków')
            .max(40, 'Maxymalnie 30 znaków')
            .required('Pole obowiązkowe'),
          phoneNumber: Yup.number()
            .typeError('MAL BYC NUMERRTYLK CYFERKI')
            .min(6, 'Minimum 6 znaków')
            // .max(20, 'Maxymalnie 30 znaków')
            .required('Pole obowiązkowe'),
          acceptTerms: Yup.boolean()
            .required('Pole obowiązkowe ')
            .oneOf([true], 'Pole obowiązkowe'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form className="formContainer">
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
            <TextArea label="Wiadomość" name="message" type="text" />
            <div className="buttonContainer">
              <CustomCheckbox name="acceptTerms">
                Akceptuję politykę prywatności<span>RODO</span>
              </CustomCheckbox>
              <button type="submit">WYŚLIJ</button>
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
