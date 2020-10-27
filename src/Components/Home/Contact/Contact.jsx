import React, { useState } from 'react';
import './Contact.scss';
import SeparateBar from '../../common/separateBar/separateBar5';
import ContactForm from '../../common/contacForm';
import Map from '../../common/googleMap';
import RodoPolicy from '../../common/rodoPolicy';

const Contact = () => {
  const [openPolicy, setOpenPolicy] = useState(false);

  const handleOpenPolicy = () => {
    setOpenPolicy((prevState) => !prevState);
  };

  return (
    <div className="contactContainer" id="contact">
      <SeparateBar title="ZAPRASZAMY DO KONTAKTU." number="5" />
      <div className="barContainer">
        <p>Pierwszy krok należy do Ciebie. Zapraszamy do kontaktu.</p>
      </div>
      <h1>Kontakt</h1>
      <div className="tableContainer">
        <Map />
        <ContactForm handleOpenPolicy={handleOpenPolicy} />
      </div>
      <RodoPolicy visibleCondition={openPolicy} />
    </div>
  );
};

export default Contact;
