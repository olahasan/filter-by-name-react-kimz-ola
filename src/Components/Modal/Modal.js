import React, { useState } from 'react';
import styles from './Modal.module.css';





function Modal({modalShow , toggleModalShow , data , setData }) {

    
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        console.log(One);

        if(One.name === "" || One.age === "" || One.adresse === "" || One.gender === ""){
           return ""
        }else{
        

        const copyOfState = data;
        console.log(copyOfState);
        const copyOfStateToPush = copyOfState.push(One);
        console.log(copyOfState);
        // setData(copyOfStateToPush);
        setData([...data]);
        
        
        console.log(copyOfState);
        console.log(copyOfStateToPush);
            

        setOne({
            id: Math.floor(Math.random() * 10000000),
            name: '',
            age: '',
            adresse: '',
            gender: ''
        })

        }
    }
    
    const[Input, setInput] = useState({
        Name: "",
        Age: "",
        Adresse: "",
        gender: ""
        
    })
    const[InputError, setInputError] = useState({
        NameError: null,
        AgeError: null,
        AdresseError: null,
        genderError: null
    })
    
    const[One,setOne] = useState({
        id: Math.floor(Math.random() * 10000000),
        name: '',
        age: '',
        adresse: '',
        gender: ''
    })

    const handleFormChange = (e) => {
      console.log(e.target.name,e.target.value);

      switch(e.target.name){
    case 'name':
        setInput({...Input, Name: e.target.value})
        setInputError({...InputError, NameError : e.target.value.length ===0 ? "this input is mandatory": e.target.value.length < 3 ? "minimum length is 3 letters": null})
    break;
    case 'age':
        setInput({...Input, Age: e.target.value})
        setInputError({...InputError, AgeError: e.target.value.length ===0 ? "this input is mandatory" : e.target.value < 18 ? "value must be greater than or equal 18" : null})
    break;
    case 'adresse':
        setInput({...Input, Adresse: e.target.value})
        setInputError({...InputError, AdresseError: e.target.value.length ===0 ? "this input is mandatory" : null})
    break;
    case 'gender':
        setInput({...Input, gender: e.target.value})
        // setInputError({...InputError, genderError: e.target.value.length ===0? "this input is mandatory" : null})
        setInputError({...InputError, genderError: e.target.value.length ===0? "this input is mandatory" : e.target.value !== "male" && e.target.value !== "female"? "value must be male or female" : null})
        // setInputError({...InputError, genderError: e.target.value.length ===0? "this input is mandatory" : e.target.value.startsWith("f").toString().toLowerCase() ? " " : "value must be male or female"})
        // setInputError({...InputError, genderError: e.target.value.length ===0? "this input is mandatory" : e.target.value !== "male" ? "value must be male or female" : e.target.value !== "female" ?"value must be male or female" : null})
        // setInputError({...InputError, genderError: e.target.value !== "male" || e.target.value !== "female"? "value must be male or female" : e.target.value.length === 0? "this input is mandatory" : null})
    break;
    
    default:
        setInput({...Input, Name: e.target.value})
        setInputError({...InputError, NameError: null})
    break;
                

      }
 
      setOne({...One, [e.target.name]: e.target.value.toLowerCase()})
    }


const handleReset = ()=>{
    setOne({
        name: '',
        age: '',
        adresse: '',
        gender: ''
    })
}


  return (
    <div className={`${modalShow? styles.show : styles.hide} `}>
        <div className={styles.back}></div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.del} onClick={toggleModalShow}>X</div>
            <div>
                <label htmlFor='name' className={styles.label}>Name: </label>
                <input type="text" name="name" id='name'className={`${styles.input} ${InputError.NameError ? styles.out : styles.nor}`} onChange={handleFormChange} value={One.name}/>
                <small >{InputError.NameError}</small>
            </div>
            <div>
                <label htmlFor='age' className={styles.label}>Age: </label>
                <input type="number" min="18" max="120" name="age" id='age' className={`${styles.input} ${InputError.AgeError ? styles.out : styles.nor}`} onChange={handleFormChange} value={One.age}/>
                <small >{InputError.AgeError}</small>
            </div>
            <div>
                <label htmlFor='adresse' className={styles.label}>Adresse: </label>
                <input type="text" name="adresse" id='adresse' className={`${styles.input} ${InputError.AdresseError ? styles.out : styles.nor}`} onChange={handleFormChange} value={One.adresse}/>
                <small >{InputError.AdresseError}</small>
            </div>
            <div>
                <label htmlFor='gender' className={styles.label}>Gender: </label>
                <input type="text" name="gender" id='gender' className={`${styles.input} ${InputError.genderError ? styles.out : styles.nor}`} onChange={handleFormChange} value={One.gender}/>
                <small className={styles.last}>{InputError.genderError}</small>
            </div>
            <div className={styles.btns}>
                <button type="submit" className={styles.save}>Save</button>
                <button type="reset" className={styles.reset} onClick={handleReset}>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default Modal



