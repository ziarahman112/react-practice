
function Login () {
    return <div>
    <h1>Login Page</h1>
    <div>
        <p>Username: </p>
    </div>
    <form >
    <label htmlFor="email">Email:</label><br/>
    <input 
      required
        type="email" 
        id="email" 
        name="email" 
        placeholder="Enter Email"
    /><br/><br />

    <label htmlFor="password">Password:</label><br/>
    <input 
      required
        type="password" 
        id="password" 
        name="password" 
        placeholder="Enter Password"
    /><br/><br />

    <button type="submit">Login</button>
    <p>Dont have an account <a href="/create-account"> Register here</a></p>

    </form>
    </div>

}
export default Login;