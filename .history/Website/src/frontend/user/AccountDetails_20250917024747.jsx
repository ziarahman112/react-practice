import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./createAccount.module.css"; // optional, if you have CSS

function AccountDetails() {


  return (
    <div>
      <h1>Account Details</h1>
      <h2>View and manage your account here.</h2>
   
   <h3>First Name </h3>
    <h3>Last Name </h3>
    <h3>Email </h3>
    <h3>Address </h3>
    <h3>Post Code </h3>
    <h3>Phone Number </h3>
    <h3>Password </h3>
    </div>
  );
}

export default AccountDetails;
