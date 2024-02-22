import React from "react";
import { useState } from "react";
import './form.css'
import validation from "../validation/validation";


function Form({ login }){
    const [input, setInput] = useState({
      email:'',
      password: ''
    })
    
    const [errors, setErrors] = useState({
      email:'',
      password: ''
    })

    const handleChange = (event) => {
       setInput({
        ...input,
        [event.target.name]: event.target.value
      })

      setErrors(validation({ ...input, [event.target.name]: event.target.value}))
    }
    
    const onSubmit = (event) => {
      event.preventDefault();
      login(input)
    }
    
    
    return(
<<<<<<< HEAD
      <div className="formdiv">
        <form  onSubmit={onSubmit}>
=======
<<<<<<< HEAD
      <div className="formDiv">
        <form className formDiv onSubmit={()=>login(input)}>
=======
<<<<<<< HEAD
      <div className="formDiv">
        <form className formDiv onSubmit={()=>login(input)}>
=======
     
      <div className="formDiv">
        <form onSubmit={()=>login(input)}>

>>>>>>> d4e9d4061e0921aa4ae4aef2755a75030041a465
>>>>>>> f5097545d476ba186e4c8efdc16081929137f66c
>>>>>>> 84afd37e786e71224d84b5198d7a5c9773f9c901
            <div className="imagenDiv">
            <img src="https://th.bing.com/th?id=OIP.gS0sLM8mRFXS_WzQmDMY5QHaLQ&w=202&h=308&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
            </div>

            <div className="inputDiv">
              <label htmlFor="email">EMAIL: </label>
              <br />
              <input 
              size={40}
              className="input"
              type="text"
              name='email'
              value={input.email}
              onChange = {handleChange}
              />
                  {errors.name !== '' && <h2 className="ventanaError">{errors.email}</h2>}
                        
              <hr style={{borderStyle: "none"}}/>
              <label htmlFor="password">PASSWORD: </label>
              <br />
              <input 
                  size={40}
                  className="input"
                  type="text" 
                  name='password'
                  value={input.password}
                  onChange = {handleChange}
                  />
              {errors.name !== '' && <h2 className="ventanaError">{errors.password}</h2>}

              <hr style={{borderStyle: "none"}}/>
              <button type="submit" disabled={!input.email || !input.password || errors.email || errors.password}>INGRESAR</button>
            </div>
        </form>
<<<<<<< HEAD
        </div>
=======
<<<<<<< HEAD
        </div>
=======
      </div>
     
>>>>>>> d4e9d4061e0921aa4ae4aef2755a75030041a465
>>>>>>> f5097545d476ba186e4c8efdc16081929137f66c
    )
}
export default Form;