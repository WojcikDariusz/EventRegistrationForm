/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React, { useState } from "react";

//Import css
import "./styles/styles.css";
import "react-datepicker/dist/react-datepicker.css";

//Import Middleware 
import API_Service from "../../services/api.service"
import Validate from "../../services/formValidation.service"

//Import Components
import FormField from "../../components/formField"
import FormSubmitButton from "../../components/formSubmitButton"
import DatePicker from "react-datepicker";

const EventRegistration = (props) => {

    const [message,setMessage] = useState("");
    const [isSaved,setSaved] = useState(false);
    const [validationErrors, setValidationErrors] = useState({})
    const [startDate, setStartDate] = useState(null);
    const [eventDetails, setEventDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        eventdate : "",
    })

    const handleFormSubmit = () => {

        //Block resending form with !isSaved flag
        if (!isSaved && handleFormValidation()) {
            API_Service.registerEvent(eventDetails.firstname, eventDetails.lastname, eventDetails.email, eventDetails.eventdate).then((res) =>{
                setMessage(res.data.message)
                setSaved(true);
           }, error => {
                if (error.response.data.message) {
                    setMessage(error.response.data.message)
                    setSaved(false);
                } else {
                    setMessage("Error registering event")
                }     
           })
        }
        return;  
    };

    const handleFormUpdate = (event,date) => {
        setMessage("")
        //Separate check for react-datepicker
        if (event === "eventdate") {
            let eventdate = date.toISOString().replace(/.\d+Z$/g, "Z");
            setEventDetails(prevState => ({
                ...prevState,
                [event]: eventdate
            }))
        } 
        //Check text and email inputs
        else {
            const { name, value } = event.target;
            setEventDetails(prevState => ({
                ...prevState,
                [name]: value
            }))
            setValidationErrors(prevState => ({
                ...prevState,
                [name]: undefined
            })); 
        }     
    };

  const handleFormValidation = () => {

    const formValidationErrors = {};    
    let isFormValid = true;    

    //Fist name required
    if (!Validate.required(eventDetails.firstname)) {
        isFormValid = false
        formValidationErrors['firstname'] = "First name is required";
    }
    //Last name required
    if (!Validate.required(eventDetails.lastname) ) {
        isFormValid = false
        formValidationErrors['lastname'] = "Last name is required";
    }

    //Email required
    if (!Validate.required(eventDetails.email)) {
        isFormValid = false
        formValidationErrors["email"] = "Email is required";
    }

    //Email validation against regex expression
    else if (!Validate.email(eventDetails.email)) {    
        isFormValid = false
        formValidationErrors["email"] = " Invalid email adress";
    }

    //Event date required
    if (!Validate.required(eventDetails.eventdate)) {
        isFormValid = false
        formValidationErrors["eventdate"] = "Event date is required";
    }

    setValidationErrors(formValidationErrors)
    return isFormValid;
  }

    //Return form
    return (<div className="container">
       <div className="header">
           <p>Register an event</p>
       </div>
       <div className="formWrapper">
            <form onChange={handleFormUpdate} >
                   <div className="shortInputsContainer">
                   <FormField className="shortInput" type="text" name="firstname" displayName="* FIRST NAME" error={validationErrors.firstname}/>
                   <FormField className="shortInput" type="text" name="lastname" displayName="* LAST NAME" error={validationErrors.lastname} />
                   </div>
                   <FormField className="longInput" type="email" name="email" displayName="* E-MAIL" error={validationErrors.email} />
                   <DatePicker className="datePicker" showTimeSelect dateFormat="Pp" placeholderText="* SELECT DATE AND TIME" selected={startDate} onChange={(date) => (function() { setStartDate(date); handleFormUpdate("eventdate",date)})()} />            
                   <p className={'errorMsg'}>{validationErrors.eventdate}</p>
                   <FormSubmitButton text="Register" submit={handleFormSubmit} isSaved={isSaved}/>
             </form>
        </div>
        <div className="message">
           <p>{message}</p>
       </div>
        </div>)
}

export default EventRegistration;