

function CreateAccount() {
    return (
<div>
    <h1>Create Account</h1>
    <form>
        <label for="fname">First Name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label for="lname">Last Name:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email"/><br/>
        <label for="password">Password:</label><br/>
        <input type="password" id="password" name="password"/><br/><br/>
        <input type="submit" value="Submit"/>
    </form>
</div>
    )
}
export default CreateAccount;