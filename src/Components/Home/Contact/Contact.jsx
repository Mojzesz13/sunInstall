import React, { useState } from 'react';
import './Contact.scss';
import SeparateBar from '../../common/separateBar/separateBar5';
import ContactForm from '../../common/contacForm';
import GoogleMapTest from '../../common/googleMap';

let rodoText =
  'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w powyższym formularzu przez „MPR Group, Plac Solny 14/3, 50-062 Wrocław (nr KRS: 0000567222) z siedzibą we Wrocławiu. Dane osobowe będą przetwarzane w celu przesłania odpowiedzi na wystosowane zapytanie, w formie kontaktu telefonicznego lub mailowego. Podanie danych kontaktowych jest dobrowolne, ale niezbędne w celu udzielenia odpowiedzi na zadane pytanie Dane będą przetwarzane na podstawie art. 6 ust. 1 pkt a) RODO tj. zgoda właściciela danych, do czasu jej cofnięcia lub wyrażenia sprzeciwu wobec przetwarzania danych. Przysługuje Pani/Panu prawo do cofnięcia wyrażonej zgody w dowolnym momencie. Cofnięcie wyrażonej zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem. Przysługuje Pani /Panu prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec ich przetwarzania oraz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych. Dane będą przechowywane przez okres niezbędny na potrzeby realizacji komunikacji w zakresie zapytania. W celu realizacji swoich praw, wymienionych powyżej, zapraszamy do kontaktu: 1. Listownie: „MPR Group spółka z ograniczoną odpowiedzialnością” ; ul. Grabiszyńska 9 lok. VII, 53-501 Wrocław 2. E-mailowo, na adres: rodo@nuclean.pl.. Podstawa prawna: RODO – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).; UPT – Prawo Telekomunikacyjne Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne, art. 172.';

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
        <GoogleMapTest />
        <ContactForm handleOpenPolicy={handleOpenPolicy} />
      </div>
      <div
        className={openPolicy ? 'rodoComponent' : 'rodoComponent activeRodo'}
      >
        {rodoText}
      </div>
    </div>
  );
};

export default Contact;
