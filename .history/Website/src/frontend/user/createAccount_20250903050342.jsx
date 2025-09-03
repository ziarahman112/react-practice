import { useState } from 'react';
import styles from './createAccount.module.css';

function CreateAccount() {
const api = "http://localhost:8080/users";
    const handleClick = async () =>{
        const accountDetails = {fname, lname, email, address, phoneNum, password};
  

        try{
           const {data} = await axios.post(`${api}`, accountDetails);
           account([...account, data]);
           alert("Account created successfully!");
              console.log(accountDetails);
        }
         catch (error){
                console.error("Error during account creation:", error);
            }
    }

const [fname, setFName] = useState ();
const [lname, setLName] = useState ();
const [email, setEmail] = useState ();
const [address, setAddress] = useState ();
const [phoneNum, setPhoneNum] = useState ();
const [password, setPassword] = useState ();
const [account, setAccount] = useState ();

    return (
<div>
    <h1>Create Account</h1>
   <form className={styles.form}>
  <label htmlFor="fname">First Name:</label><br/>
  <input 
    type="text" 
    id="fname" 
    name="fname" 
    placeholder="Enter First Name"
    value={fname} 
    onChange={(e) => setFName(e.target.value)}
  /><br/><br />

  <label htmlFor="lname">Last Name:</label><br/>
  <input 
    type="text" 
    id="lname" 
    name="lname" 
    placeholder="Enter Last Name"  
    value={lname} 
    onChange={(e) => setLName(e.target.value)}
  /><br/><br />

  <label htmlFor="email">Email:</label><br/>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="Enter Email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
  /><br/><br />

  <label htmlFor="address">Address:</label><br />
  <input 
    type="text" 
    id="address" 
    name="address" 
    placeholder="Enter Address" 
    value={address} 
    onChange={(e) => setAddress(e.target.value)}
  /><br/><br />

  <label htmlFor="phoneNum">Phone Number:</label><br />
  <input 
    type="tel" 
    id="phoneNum" 
    name="phoneNum" 
    placeholder="Enter Phone Number" 
    value={phoneNum} 
    onChange={(e) => setPhoneNum(e.target.value)}
  /><br/><br />

  <label htmlFor="password">Password:</label><br/>
  <input 
    type="password" 
    id="password" 
    name="password" 
    placeholder="Enter Password" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)}
  /><br/><br/>

  <button type= "button" id="submit" onClick={handleClick}>Submit</button>
</form>

    <div>
       {/*<p> Already have an account {$`login here`}</p>*/} 
        </div>
</div>
    )
}
export default CreateAccount;