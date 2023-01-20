import React, { useState } from 'react';
import PasswordChecklist from "react-password-checklist"

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordConfirm] = useState("");
    const [errorForm, setErrorForm] = useState("");

    const handleFirsName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setErrorForm("First Name must be 2 characters or longer!");
        }else{
            setErrorForm(""); 
        }
    };
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setErrorForm("Last Name must be 2 characters or longer!");
        }else{
            setErrorForm(""); 
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setErrorForm("Email must be 5 characters or longer!");
        }else{
            setErrorForm(""); 
        }
    };

    return (
        <form onSubmit={e => e.preventDefault()}>
            <div>
                {
                    errorForm ? <h5 style={{color:'red'}}>{ errorForm }</h5> :''
                }
            </div>
            <div className='divForm'>
                <label className='labelForm'>First Name </label>
                <input className='inputForm' type="text" onChange={handleFirsName} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Last Name </label>
                <input className='inputForm' type="text" onChange={handleLastName} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Email</label>
                <input className='inputForm' type="email" onChange={handleEmail} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Password </label>
                <input className='inputForm' type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Password Confirm</label>
                <input className='inputForm' type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
            </div>

            <div className='passcheck'>
                <PasswordChecklist
                    rules={["minLength","match"]}
                    minLength={8}
                    value={password}
                    valueAgain={passwordconfirm}
                    messages={{
                        minLength: "Password must be 8 characters or longer!",
                        match: "The passwords match",
                    }}
                />
            </div>
            
            <input type="submit" value="Create User" />

            <div className='result'>
                <h1 className='titleData'>Your Form Data</h1>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password Confirm: {passwordconfirm}</p>
                
            </div>
        </form>
    );
};

export default UserForm;