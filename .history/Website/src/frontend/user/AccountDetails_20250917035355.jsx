import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./createAccount.module.css"; // optional, if you have CSS

function AccountDetails() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser ? storedUser.id : null;

  const api = axios.create({
    baseURL: "http://localhost:8080/users",
  });

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");

  // useEffect = runs automatically after render
  useEffect(() => {
    if (userId) {
      api
        .get(`/${userId}`)
        .then((res) => {
          const user = res.data;
          setFname(user.firstName);
          setLname(user.lastName);
          setEmail(user.email);
          setAddress(user.address);
          setPostCode(user.postCode);
          setPhoneNum(user.phoneNumber);
          setPassword(user.password);
          console.log("Fetched user:", user);
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [userId]); // runs whenever userId changes

  return (
    <div>
      <h1>Account Details</h1>
      <h2>View and manage your account here.</h2>

    <div className={styles.form}>
      <h3>First Name</h3>
      <p>{fname}</p>

      <h3>Last Name</h3>
      <p>{lname}</p>

      <h3>Email</h3>
      <p>{email}</p>

      <h3>Address</h3>
      <p>{address}</p>

      <h3>Post Code</h3>
      <p>{postCode}</p>

      <h3>Phone Number</h3>
      <p>{phoneNum}</p>
      </div>
    </div>
  );
}

export default AccountDetails;
