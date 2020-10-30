// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = (initialValue1, initialValue2) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(initialValue2);
    const [values, setValues] = useState(initialValue1);
    
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
  
    return([values, handleChanges, showSuccessMessage, handleSubmit]);
  }

  export default useForm;