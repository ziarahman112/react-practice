import { useState } from 'react';
import styles from './createAccount.module.css';

function CreateAccount() {

    function handleClick(){
        
    }

const [fname, setFName] = useState ();
const [lname, setLName] = useState ();
const [email, setEmail] = useState ();
const [address, setAddress] = useState ();
const [phoneNum, setPhoneNum] = useState ();
const [password, setPassword] = useState ();


    return (
<div>
    <h1>Create Account</h1>
    <form className={styles.form}>
        <label for="fname">First Name:</label><br/>
       
       <div className={styles.name}>
        <input type="text" id="fname" name="fname" placeholder="Enter First Name"
      value={fname} onChange={(e) => setFName(e.target.value)}
        /><br/><br />
        <label for="lname">Last Name:</label><br/>
        <input type="text" id="lname" name="lname" placeholder="Enter Last Name"  value={fname} onChange={(e) => setLName(e.target.value)}/><br/><br />
        </div>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email" placeholder="Enter Email"/><br/><br />
      <label for="address">Address:</label><br />
        <input type="text" id="address" name="address" placeholder="Enter Address"/><br/><br />
        <label for="phoneNum">Phone Number:</label><br />
        <input type="tel" id="phoneNum" name="phoneNum" placeholder="Enter Phone Number"/><br/><br />
        <label for="password">Password:</label><br/>
        <input type="password" id="password" name="password" placeholder="Enter Password"/><br/><br/>
        <button id ="submit" onClick={handleClick}> Submit</button>
    </form>
    <div>
       {/*<p> Already have an account {$`login here`}</p>*/} 
        </div>
</div>
    )
}
export default CreateAccount;