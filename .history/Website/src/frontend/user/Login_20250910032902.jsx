import {  useState } from "react";
import { useNavigate } from "react-router-dom";
function Login () {

    const navigate = useNavigate();
    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("Login successful:", response.data);

      // Redirect to homepage
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid email or password");
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };
    return <div>
    <h1>Login Page</h1>
   
    <form >
    <label htmlFor="email">Email:</label><br/>
    <input 
      required
        type="email" 
        id="email" 
        name="email" 
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    /><br/><br />

    <label htmlFor="password">Password:</label><br/>
    <input 
      required
        type="password" 
        id="password" 
        name="password" 
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    /><br/><br />

    <button type="submit">Login</button>
    <p>Dont have an account <a href="/create-account"> Register here</a></p>

    </form>
    </div>

}
export default Login;