/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React, {useState, useEffect} from "react"
import "./styles/formSubmitButton.css"

const FormSubmitButton = (props) => {

    const handleButtonClick = (event) => {
        props.submit(event)
    }

    let className = `submitButton`

    if (props.isSaved) {
      className += ' formButtonSubmitted';
    }

  if (!props.isSaved) { 
    return (
    <div className={className} onClick={handleButtonClick}>
        <p>{props.text}</p>
    </div>
  );
    } else {
      return (<div className={className} onClick={handleButtonClick}>
      <p>{"saved"}</p>
    </div>)
  }
}

export default FormSubmitButton;
