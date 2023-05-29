import styles from "./ShippingForm.module.css";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "../../firebase";

const ShippingForm = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged listener when component unmounts
    };
  }, []);
 
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();
  const regionInputRef = useRef();
  const phoneInputRef = useRef();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    surname: true,
    address: true,
    city: true,
    postalCode: true,
    region: true,
    phone: true,
  });

  const confirmHandler = (e) => {
    e.preventDefault();

    const isEmpty = (value) => value.trim() === "";
    const isDefault = (value) => value === "default";

    const nameRegex = /^[a-zA-Z ]+$/;
    const addressRegex = /^[a-zA-Z ]+$/;
    const zipRegex = /^\d{3,5}$|^\d{5}-\d{4}$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{3,6}$/;

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredRegion = regionInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName) && nameRegex.test(enteredName);
    const surnameIsValid = !isEmpty(enteredSurname) && nameRegex.test(enteredSurname);
    const addressIsValid = !isEmpty(enteredAddress) && addressRegex.test(enteredAddress);
    const cityIsValid = !isEmpty(enteredCity) && nameRegex.test(enteredCity);
    const postalCodeIsValid = !isEmpty(enteredPostalCode) && zipRegex.test(enteredPostalCode);
    const regionIsValid = !isDefault(enteredRegion);
    const phoneIsValid = !isEmpty(enteredPhone) && phoneRegex.test(enteredPhone);

    setFormInputsValidity({
      name: nameIsValid,
      surname: surnameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
      region: regionIsValid,
      phone: phoneIsValid,
    });

    const formIsValid =
      nameIsValid &&
      surnameIsValid &&
      addressIsValid &&
      cityIsValid &&
      postalCodeIsValid &&
      regionIsValid &&
      phoneIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      surname: enteredSurname,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
      region: enteredRegion,
      phoneNumber: enteredPhone,
    });
  };


  
  return (
    <>
      <form className={styles.form} id="shipping_form" onSubmit={confirmHandler}>
        <div className={styles.form__control}>
          <label htmlFor="name" className={styles["form__control-label"]}>
            First name
          </label>
          <input type="text" id="name" value={currentUser?.email} className={styles["form__control-input"]} ref={nameInputRef} />
          {!formInputsValidity.name && <p className={styles["form__control-invalid"]}>Please enter a valid name.</p>}
        </div>
        <div className={styles.form__control}>
          <label htmlFor="surname" className={styles["form__control-label"]}>
            Last name
          </label>
          <input type="text" id="surname" className={styles["form__control-input"]} ref={surnameInputRef} />
          {!formInputsValidity.surname && <p className={styles["form__control-invalid"]}>Please enter a valid last name.</p>}
        </div>
        <div className={styles.form__control}>
          <label htmlFor="address" className={styles["form__control-label"]}>
            Street address
          </label>
          <input type="text" id="address" className={styles["form__control-input"]} ref={addressInputRef} />
          {!formInputsValidity.address && <p className={styles["form__control-invalid"]}>Please enter a valid street address.</p>}
        </div>
        <div className={styles.form__control}>
          <label htmlFor="surname" className={styles["form__control-label"]}>
            City
          </label>
          <input type="text" id="city" className={styles["form__control-input"]} ref={cityInputRef} />
          {!formInputsValidity.city && <p className={styles["form__control-invalid"]}>Please enter a valid city.</p>}
        </div>
        <div className={styles.form__control}>
          <label htmlFor="zipcode" className={styles["form__control-label"]}>
            ZIP Code
          </label>
          <input type="text" id="city" className={styles["form__control-input"]} ref={postalCodeInputRef} />
          {!formInputsValidity.postalCode && <p className={styles["form__control-invalid"]}>Please enter a valid postal code.</p>}
        </div>
        <div className={styles.form__control}>
          <label htmlFor="region" className={styles["form__control-label"]}>
            Province
          </label>
          <select name="region" id="region" className={styles["form__control-input--select"]} ref={regionInputRef}>
            <option value="default">select</option>
            <option value="Islamabad">KPK</option>
            <option value="Islamabad">Punjab</option>
            <option value="Islamabad">Balochistan</option>
            <option value="Islamabad">Sindh</option>
          </select>
          {!formInputsValidity.region && <p className={styles["form__control-invalid"]}>Please enter a valid region.</p>}
        </div>
        <div className={styles.form__control}>
          <label htmlFor="phonenumber" className={styles["form__control-label"]}>
            Phone number
          </label>
          <input type="phone" id="phone" className={styles["form__control-input"]} ref={phoneInputRef} />
          {!formInputsValidity.phone && <p className={styles["form__control-invalid"]}>Please enter a valid phone number.</p>}
        </div>
      </form>
      
    </>
  );
};

export default ShippingForm;
