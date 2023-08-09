import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { CheckBoxes } from './CheckBoxes/CheckBoxes';
import './Form.css';
import { useState } from 'react';
import Select from 'react-select';

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
  'paymentTape',
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
    email: '',
    details: '',
    consents: false,
  });

  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(true);

  const [isEmailValid, setIsEmailValid] = useState();

  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes
      : true;

  const isFieldValid =
    isEmailValid && isNameAndSurnameValid && isAllRequiredFieldsFilled;

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

  function handleSubmit() {
    const { nameAndSurname, email, product, paymentTape, consents } = formData;
    if (nameAndSurname && email && product && paymentTape && consents) {
      console.log(('Dane wysłane poprawnie: ', formData));
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  return (
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
        <FieldSection title="Imię i nazwisko">
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
        <FieldSection title="Email">
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

      <MainSection title="ZGODY">
        <FieldSection title="Regulamin">
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
    </form>
  );
}
