import { useState ,useEffect } from 'react';
import classes from './Checkout.css';
import "../../../styles/Button.css";

const Checkout = (props) => {

  const [isFromValid , setIsFormValid] = useState(false);
  const [isNameInputValid , setIsNameInputValid] = useState(false);
  const [isStreetInputValid , setIsStreetInputValid] = useState(false);
  const [isPostalInputValid , setIsPostalInputValid] = useState(false);
  const [isCityInputValid , setIsCityInputValid] = useState(false);

  useEffect(() => {
    setIsFormValid(isNameInputValid && isStreetInputValid && isPostalInputValid && isCityInputValid)
  }, [isNameInputValid , isStreetInputValid , isPostalInputValid , isCityInputValid]);


  const onNameClickHandler = (event) => {
    if(event.target.value.trim()){
      setIsNameInputValid(true);
    }
    else {
      setIsNameInputValid(false);
    }
  }
  const onStreetClickHandler = (event) => {
    if(event.target.value.trim()){
      setIsStreetInputValid(true);
    }
    else {
      setIsStreetInputValid(false);
    }
  }
  const onPostalClickHandler = (event) => {
    if(event.target.value.trim()){
      setIsPostalInputValid(true);
    }
    else {
      setIsPostalInputValid(false);
    }
  }
  const onCityClickHandler = (event) => {
    if(event.target.value.trim()){
      setIsCityInputValid(true);
    }
    else {
      setIsCityInputValid(false);
    }
  }

  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor='name'>Your Name</label>
        <input onChange={onNameClickHandler} type='text' id='name' />
      </div>
      <div className="control">
        <label htmlFor='street'>Street</label>
        <input onChange={onStreetClickHandler} type='text' id='street' />
      </div>
      <div className="control">
        <label htmlFor='postal'>Postal Code</label>
        <input onChange={onPostalClickHandler} type='text' id='postal' />
      </div>
      <div className="control">
        <label htmlFor='city'>City</label>
        <input onChange={onCityClickHandler} type='text' id='city' />
      </div>
      <div className="actions">
        <button type='button' onClick={props.onCancel} className="btn-primary cancel-btn">Cancel</button>
        <button disabled={!isFromValid} className="btn-primary order-btn" type='submit'>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;