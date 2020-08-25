import React from 'react';
import './contactForm.scss';
import { Formik, useField, Form } from 'formik';
import { TextField, Tooltip, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
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

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: 15,
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const tooltipText =
  'Prosimy, abyś w wiadomości podał nam więcej informacji o inwestycji, np. jej planowana wielkość (jeśli wiesz), planowany czas realizacji itp.';

const ContactForm = () => {
  return (
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
          .typeError('Akceptujemy tylko cyfry')
          .min(6, 'Minimum 6 znaków')
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
            label="Numer teletonu"
            name="phoneNumber"
            type="text"
          />
          <CustomTextInput label="Adres inwestycji" name="city" type="text" />
          <div className="textAreaContainer">
            <TextArea label="Wiadomość" name="message" type="text" />
            <CustomTooltip
              className="test"
              title={tooltipText}
              placement="bottom"
            >
              <IconButton aria-label="delete">
                <InfoIcon style={{ fontSize: 30 }} />
              </IconButton>
            </CustomTooltip>
          </div>
          <div className="buttonContainer">
            <CustomCheckbox name="acceptTerms">
              Akceptuję politykę prywatności<span>RODO</span>
            </CustomCheckbox>
            <button type="submit">WYŚLIJ</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
