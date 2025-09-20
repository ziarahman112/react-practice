import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./createAccount.module.css"; // optional, if you have CSS

function AccountDetails() {

    const api = axios.create({
 
    baseURL: "http://localhost:8080/users"
    });

    const [fname, setFname] = useState ("");
    const [lname, setLname] = useState ("");
    const [email, setEmail] = useState ("");
    const [address, setAddress] = useState ("");
    const [postCode, setPostCode] = useState ("");
    const [phoneNum, setPhoneNum] = useState ("");
    const [password, setPassword] = useState ("");
    const [account, setAccount] = useState ([]);



    const getUser = () => {
  api.get(`/${userId}`)
  .then(res => {
    const user = res.data;
    setFname(user.firstName);
    setLname(user.lastName);
    setEmail(user.email);
    setAddress(user.address);
    setPostCode(user.postCode);
    setPhoneNum(user.phoneNumber);
    setPassword(user.password);
    console.log(user);
  });
  console.log(getUser);
    }
                return (
                    <div>
                        <h1>Account Details</h1>
                        <h2>View and manage your account here.</h2>
               
               <p>First Name</p>
     
                   
                    </div>
                );
            }

    
            

            export default AccountDetails;
        
