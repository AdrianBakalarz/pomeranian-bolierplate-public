import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { CheckBoxes } from './CheckBoxes/CheckBoxes';
import { PasswordMatchCheck } from './Password/PasswordMatchCheck';
import './Form.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'react-form-project-403a8.firebaseapp.com',
  projectId: 'react-form-project-403a8',
  storageBucket: 'react-form-project-403a8.appspot.com',
  messagingSenderId: '176516735759',
  appId: '1:176516735759:web:c3402a318af4991b44547a',
  measurementId: 'G-FKL42HKQ4R',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return emailPattern.test(value);
};

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'kurs backend-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

const additionalOptionList = [
  { fieldName: 'github', label: 'intro do GitHub' },
  { fieldName: 'environmenet', label: 'ustawienia środowiskowe' },
  { fieldName: 'extraDocuments', label: 'materiały dodatkowe' },
];

const requiredFields = [
  'nameAndSurname',
  'email',
  'product',
  'paymentType',
  'consents',
];

export function FormsExercise() {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
    additionaOptions: {
      github: true,
      environment: false,
      extraDocuments: true,
    },
    nameAndSurname: '',
    nick: '',
    address: '',
    email: '',
    number: '',
    password: '',
    passwordReturn: '',
    details: '',
    approval: false,
    consents: false,
  });

  const [orderID, setOrderId] = useState();

  useEffect(() => {
    if (orderID) {
      getDoc(doc(db, 'Orders', orderID)).then((response) => {
        console.log(response.data());
      });
    }
  }, [orderID]);

  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(true);

  const [isEmailValid, setIsEmailValid] = useState();

  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes
      : true;

  const isNickValid = formData.nick.length > 0;

  const isAdressValid =
    formData.address.length > 0 ? formData.address.trim().includes : true;

  const isPhoneNumberValid = formData.number.length === 9;

  const isFieldValid =
    isEmailValid &&
    isNameAndSurnameValid &&
    isAllRequiredFieldsFilled &&
    isNickValid &&
    isAdressValid &&
    isPhoneNumberValid;

  function updateAdditionalOptions(fieldName, newValue) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      additionaOptions: {
        ...formData.additionaOptions,
        [fieldName]: newValue,
      },
    });
  }

  function updateFormData(onChangeEvent) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  async function handleSubmit() {
    const {
      nameAndSurname,
      email,
      address,
      number,
      product,
      paymentType,
      consents,
    } = formData;
    if (
      nameAndSurname &&
      email &&
      address &&
      number &&
      product &&
      paymentType &&
      consents
    ) {
      console.log(('Dane wysłane poprawnie: ', formData));
      try {
        const docRef = await addDoc(collection(db, 'Orders'), formData);
        setOrderId(docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <MainSection title="ZAMÓWIENIE PRODUKTU">
          <FieldSection title="Wybierz produkt*">
            {/* <select
            name="product"
            value={formData.product}
            onChange={(event) => {
              updateFormData(event);
            }}
          >
            {productOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}

            <Select
              value={productOptions.find(
                (item) => item.value === formData.product
              )}
              options={productOptions}
              onChange={(selectedItem) => {
                setFormData({
                  ...formData,
                  product: selectedItem.value,
                });
              }}
            />
          </FieldSection>
          <FieldSection title="Wybierz formę płatności*">
            <RadioButtons
              name="paymentType"
              options={paymentTypeOptions}
              value={formData.paymentType}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Opcje dodatkowe do zamówienia*">
            <CheckBoxes
              list={additionalOptionList.map((item) => {
                return {
                  ...item,
                  isChecked: formData.additionaOptions[item.fieldName],
                };
              })}
              onChange={updateAdditionalOptions}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
          <FieldSection title="Imię i nazwisko*">
            <input
              type="text"
              name="nameAndSurname"
              value={formData.nameAndSurname}
              onChange={updateFormData}
              className={!isNameAndSurnameValid ? 'input-field-error' : ''}
            />
            {!isNameAndSurnameValid && (
              <p className="input-field-error-message">
                Nie podałeś(-aś) nazwiska!
              </p>
            )}
          </FieldSection>

          <FieldSection title="Twój pseudonim*">
            <input
              type="text"
              name="nick"
              value={formData.nick}
              onChange={updateFormData}
              className={!isNickValid === false ? 'input-field-error' : ''}
            />
          </FieldSection>

          <FieldSection title="Adres do wysyłki*">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={updateFormData}
              className={!isAdressValid === false ? 'input-field-error' : ''}
            />
            {isAdressValid === false && (
              <p className="input-field-error-message">
                Adres jest nie poprawny!
              </p>
            )}
          </FieldSection>

          <FieldSection title="Numer kontaktowy*">
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={updateFormData}
              className={
                !isPhoneNumberValid === false ? 'input-field-error' : ''
              }
            />
          </FieldSection>

          <FieldSection title="Email*">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={updateFormData}
              className={isEmailValid === false ? 'input-field-error' : ''}
              onBlur={() => {
                setIsEmailValid(validateEmail(formData.email));
              }}
            />
            {isEmailValid === false && (
              <p className="input-field-error-message">
                Email jest nie poprawny!
              </p>
            )}
          </FieldSection>

          <FieldSection title="Uwagi dodatkowe">
            <textarea
              name="details"
              cols="40"
              rows="10"
              style={{ resize: 'none' }}
              value={formData.details}
              onChange={updateFormData}
            ></textarea>
          </FieldSection>
        </MainSection>

        <MainSection title="ZAKŁADANIE KONTA">
          <FieldSection title="Chcę załozyć konto razem z zamówieniem">
            <CheckBoxes
              list={[
                {
                  fieldName: 'approval',
                  label: 'zakładam konto',
                  isChecked: formData.approval,
                },
              ]}
              onChange={(_, newValue) => {
                setFormData({
                  ...formData,
                  approval: newValue,
                });
              }}
            />
          </FieldSection>
          {/* <FieldSection title="Moje hasło">
            <PasswordMatchCheck>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </PasswordMatchCheck>
          </FieldSection>
          <FieldSection title="Powtórz hasło">
            <PasswordMatchCheck>
              <input
                type="password"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              />
            </PasswordMatchCheck>
          </FieldSection> */}
        </MainSection>

        <MainSection title="ZGODY">
          <FieldSection title="Regulamin*">
            <CheckBoxes
              list={[
                {
                  fieldName: 'consents',
                  label: 'akceptuję regulamin',
                  isChecked: formData.consents,
                },
              ]}
              onChange={(_, newValue) => {
                setIsAllRequiredFieldsFilled(true);
                setFormData({
                  ...formData,
                  consents: newValue,
                });
              }}
            />
          </FieldSection>
        </MainSection>

        {!isAllRequiredFieldsFilled && (
          <p className="input-field-error-message">
            Wypełnij wszystkie pola wymagane!
          </p>
        )}

        <button type="submit" disabled={!isFieldValid}>
          WYŚLIJ
        </button>
        {orderID && (
          <div className="modal-container">
            <div className="modal">
              Twoje zamówienie zostało dodane, a jego ID to: {orderID}
            </div>
          </div>
        )}
      </form>
    </>
  );
}
