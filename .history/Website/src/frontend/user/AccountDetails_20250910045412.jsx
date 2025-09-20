import { useState } from "react";

function AccountDetails () {
const [fname, setFName] = useState("");
const [lname, setLName] = useState ("");
const [email, setEmail] = useState ("");
const [address, setAddress] = useState ("");
const [postCode, setPostCode] = useState ("");
const [phoneNum, setPhoneNum] = useState ("");
const [password, setPassword] = useState ("");
    return <div>
    <h1>Account Details</h1>
    <h2>View and manage your account here.</h2>
   <label htmlFor="email"></label>
    <form className={styles.form}>
     <label htmlFor="fname">First Name:</label><br/>
     <input 
     required
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
   
       <label htmlFor="postCode">Post Code:</label><br />
     <input 
       type="text" 
       id="postCode" 
       name="postCode" 
       placeholder="Enter Post Code" 
       value={postCode} 
       onChange={(e) => setPostCode(e.target.value)}
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
    </div>
}
export default AccountDetails;