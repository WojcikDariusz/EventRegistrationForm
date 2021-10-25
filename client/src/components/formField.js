/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React from "react"
import "./styles/formField.css"

const FormField = (props) => {
  
  let className = `${props.className}`
  if (props.error) {
    className += ' input-error';
  }

  return (
    <div className={props.className}>
      <input data-testid="input" className={className} type={props.type} name={props.name} placeholder={props.displayName}/>
      <p className={'errorMsg'}>{props.error}</p>
    </div>
  );
}

export default FormField;
