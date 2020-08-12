import React, { useState } from 'react';
import './Contact.scss';
import SeparateBar from '../../common/separateBar';
import Input from '../../common/input';

const Contact = () => {
  const [data, setData] = useState({
    personalDate: '',
    phoneNumber: '',
    city: '',
    message: '',
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="contactContainer" id="contact">
      <SeparateBar
        title="PIERWSZY KROK NALEŻY DO CIEBIE. ZAPRASZAMY DO KONTAKTU."
        number="5"
      />
      <div className="barContainer">
        <p>PIERWSZY KROK NALEŻY DO CIEBIE. ZAPRASZAMY DO KONTAKTU.</p>
      </div>
      <h1>Formularz kontaktowy</h1>
      <form className="formContainer">
        <Input
          name="personalDate"
          label="Imie i Nazwisko"
          value={data.personalDate}
          onChange={handleChange}
          type="text"
        />
        <Input
          name="phoneNumber"
          label="Numer telefonu"
          value={data.phoneNumber}
          onChange={handleChange}
          type="number"
        />
        <Input
          name="city"
          label="Miejscowość"
          value={data.city}
          onChange={handleChange}
          type="text"
        />
        <div className="inputHolder">
          <label>Wiadomość</label>
          <textarea className="inputContent"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
