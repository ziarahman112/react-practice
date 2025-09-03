import styles from './createAccount.module.css';

function CreateAccount() {
    return (
<div>
    <h1>Create Account</h1>
    <form className={styles.form}>
        <label for="fname">First Name:</label><br/>
       
       <div>
        <input type="text" id="fname" name="fname" placeholder="Enter First Name"/><br/><br />
        <label for="lname">Last Name:</label><br/>
        <input type="text" id="lname" name="lname" placeholder="Enter Last Name"/><br/><br />
        </div>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email" placeholder="Enter Email"/><br/><br />
      <label for="address">Address:</label><br />
        <input type="text" id="address" name="address" placeholder="Enter Address"/><br/><br />
        <label for="phoneNum">Phone Number:</label><br />
        <input type="tel" id="phoneNum" name="phoneNum" placeholder="Enter Phone Number"/><br/><br />
        <label for="password">Password:</label><br/>
        <input type="password" id="password" name="password" placeholder="Enter Password"/><br/><br/>
        <button id ="submit"> Submit</button>
    </form>
    <div>
       {/*<p> Already have an account {$`login here`}</p>*/} 
        </div>
</div>
    )
}
export default CreateAccount;