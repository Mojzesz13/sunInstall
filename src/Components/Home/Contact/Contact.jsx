// import React, { useState } from 'react';
// import './Contact.scss';
// import SeparateBar from '../../common/separateBar';
// import Input from '../../common/input';
// import { Formik, Field, Form, useField } from 'formik';
// import { Checkbox, TextField } from '@material-ui/core';
// import { green } from '@material-ui/core/colors';
// import { makeStyles } from '@material-ui/core/styles';

// const Contact = () => {
//   const [data, setData] = useState({
//     personalDate: '',
//     phoneNumber: '',
//     city: '',
//     message: '',
//     checkbox: '',
//   });
//   const [errors, setErrors] = useState('');

//   // const MyTextField: React.FC<FieldAttributes<{}>> = (props) => {
//   //   const [field, meta] = useField < {} > props;
//   //   const errorText = meta.error && meta.touched ? meta.error : '';
//   //   return <TextField {...field} helperText={errorText} />;
//   // };

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
//         onSubmit={(data) => {
//           console.log('submit', data);
//         }}
//       >
//         {({ values }) => (
//           <Form className="formContainer">
//             <Field
//               className="test"
//               labelPlacement="start"
//               name="personalDate"
//               label="Imię i nazwisko"
//               type="input"
//               as={TextField}
//               variant="outlined"
//             />
//             <Field
//               name="phoneNumber"
//               label="Numer telefonu"
//               type="input"
//               as={TextField}
//             />
//             <Field
//               name="city"
//               label="Miejscowość"
//               type="input"
//               as={TextField}
//             />
//             <Field
//               name="message"
//               label="Wiadomość"
//               type="input"
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
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import './Contact.scss';
import SeparateBar from '../../common/separateBar/separateBar5';
import Input from '../../common/input';
import Joi from 'joi-browser';

const initialState = {
  personalDate: '',
  phoneNumber: '',
  city: '',
  message: '',
  checkbox: '',
};

const Contact = () => {
  const [data, setData] = useState({
    personalDate: '',
    phoneNumber: '',
    city: '',
    message: '',
    checkbox: '',
  });
  const [errors, setErrors] = useState('');

  // let schema = {
  //   personalDate: Joi.string().required().label('Imię i nazwisko'),
  //   phoneNumber: Joi.number().required().label('Numer Telefonu'),
  //   city: Joi.string().required().label(' Miasto'),
  //   checkbox: Joi.required().label('Pole'),
  // };

  let validate = () => {
    // const options = { abortEarly: false };
    // const { error } = Joi.validate(data, schema, options);
    // if (!error) return null;

    const errors = {};

    if (data.personalDate.trim() === '') {
      errors.personalDate = 'Imie i nazwiskosa wymagane';
    }
    if (data.phoneNumber.trim() === '') {
      errors.phoneNumber = 'pole telefon jest wymagane ';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  //   const errors = {};
  //   for (let item of error.detalis) errors[item.path[0]] = item.message;
  //   return errors;
  // };

  // let validateProprty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const schemaA = { [name]: schema[name] };
  //   const { error } = Joi.validate(obj, schemaA);
  //   return error ? error.detalis[0].message : null;
  // };
  const handleChange = (e) => {
    //   const errorss = { ...errors };
    //   const errorMessage = this.validateProperty(event);
    //   if (errorMessage) errorss[event.name] = errorMessage;
    //   else delete errorss[event.name];
    //   const data = { data };
    //   data[event.name] = event.value;
    //   this.setState({ data, errors });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
  };

  return (
    <div className="contactContainer" id="contact">
      <SeparateBar title="ZAPRASZAMY DO KONTAKTU." number="5" />
      <div className="barContainer">
        <p>PIERWSZY KROK NALEŻY DO CIEBIE. ZAPRASZAMY DO KONTAKTU.</p>
      </div>
      <h1>Formularz kontaktowy</h1>
      <form className="formContainer" onSubmit={handleSubmit}>
        <Input
          name="personalDate"
          label="Imie i Nazwisko"
          value={data.personalDate}
          onChange={handleChange}
          type="text"
          error={errors.personalDate}
        />
        <Input
          name="phoneNumber"
          label="Numer telefonu"
          value={data.phoneNumber}
          onChange={handleChange}
          type="text"
          error={errors.phoneNumber}
        />
        <Input
          name="city"
          label="Miejscowość"
          value={data.city}
          onChange={handleChange}
          type="text"
        />
        <div className="inputContainer">
          <label>Wiadomość</label>
          <textarea></textarea>
        </div>
        <div className="buttonContainer">
          <button>WYŚLIJ</button>
          <input name="checkbox" value={data.checkbox} type="checkbox" />
          <p>
            Akceptuję politykę prywatności<span>RODO</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
