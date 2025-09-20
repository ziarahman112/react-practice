import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./AccountDetails.module.css"; // optional, if you have CSS

function AccountDetails() {
  const api = "http://localhost:8080/users";

  // States for user fields
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");

  // Get logged-in user ID from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id;

  // Fetch user details on component mount
  useEffect(() => {
    if (!userId) return;

    axios
      .get(`${api}/${userId}`)
      .then((res) => {
        const user = res.data;
        setFName(user.fname || "");
        setLName(user.lname || "");
        setEmail(user.email || "");
        setAddress(user.address || "");
        setPostCode(user.postCode || "");
        setPhoneNum(user.phoneNum || "");
        setPassword(user.password || "");
      })
      .catch((err) => console.error("Failed to fetch user details:", err));
  }, [userId]);

  // Handle form submit
  const handleSubmit = () => {
    if (!userId) return;

    const updatedUser = {
      fname,
      lname,
      email,
      address,
      postCode,
      phoneNum,
      password,
    };

    axios
      .put(`${api}/${userId}`, updatedUser)
      .then((res) => {
        alert("Account updated successfully!");
        localStorage.setItem("user", JSON.stringify(res.data)); // update localStorage
      })
      .catch((err) => {
        console.error("Failed to update user:", err);
        alert("Update failed. Please try again.");
      });
  };

  return (
    <div>
      <h1>Account Details</h1>
      <h2>View and manage your account here.</h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label>First Name:</label>
        <input value={fname} onChange={(e) => setFName(e.target.value)} />

        <label>Last Name:</label>
        <input value={lname} onChange={(e) => setLName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Address:</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} />

        <label>Post Code:</label>
        <input value={postCode} onChange={(e) => setPostCode(e.target.value)} />

        <label>Phone Number:</label>
        <input value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
}

export default AccountDetails;
