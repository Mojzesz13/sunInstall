import React from 'react';
import './Contact.scss';
import SeparateBar from '../../common/separateBar/separateBar5';
import ContactForm from '../../common/contacForm';
import GoogleMapTest from '../../common/googleMap';

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <SeparateBar title="ZAPRASZAMY DO KONTAKTU." number="5" />
      <div className="barContainer">
        <p>Pierwszy krok należy do ciebie. Zapraszamy do kontaktu.</p>
      </div>
      <h1>Kontakt</h1>
      <div className="tableContainer">
        <GoogleMapTest />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
