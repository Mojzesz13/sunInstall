import React, { useState } from 'react';
import './Contact.scss';
import SeparateBar from '../../common/separateBar/separateBar5';
import { Formik, useField, Form } from 'formik';
import { TextField, Tooltip, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core/styles';

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

const CustomTooltip = withStyles((theme) => ({
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

const Contact = () => {
  const [messageInstruction, setMessageInstruction] = useState(true);

  const handleShowMessage = (e) => {
    e.preventDefault();
    setMessageInstruction(!messageInstruction);
  };

  return (
    <div className="contactContainer" id="contact">
      <SeparateBar title="ZAPRASZAMY DO KONTAKTU." number="5" />
      <div className="barContainer">
        <p>Pierwszy krok należy do ciebie. Zapraszamy do kontaktu.</p>
      </div>
      <h1>Kontakt</h1>
      <div
      // className={
      //   messageInstruction
      //     ? 'messageInstruction active'
      //     : 'messageInstruction'
      // }
      >
        {/* <p>
          Prosimy, abyś w wiadomości podał nam więcej informacji o inwestycji,
          np. jej planowana wielkość (jeśli wiesz), planowany czas realizacji
          itp.
        </p> */}

        {/* <Tooltip title={tooltipText} placement="right" style={{ fontSize: 40 }}>
          
        </Tooltip> */}
      </div>
      <div className="tableContainer">
        <div className="formContainer contact">test</div>
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
                label="Numer teletonu"
                name="phoneNumber"
                type="text"
              />
              <CustomTextInput
                label="Adres inwestycji"
                name="city"
                type="text"
              />
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
                {/* <button onClick={handleShowMessage}>test</button> */}
                <button type="submit">WYŚLIJ</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
