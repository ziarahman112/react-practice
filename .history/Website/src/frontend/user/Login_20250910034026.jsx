import {  useState } from "react";
import { useNavigate } from "react-router-dom";
function Login () {

    const navigate = useNavigate();
    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email,
        password,
     
      });
console.log(email, password);
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("Login successful:", response.data);

      // Redirect to homepage
      navigate("/");
    } catch (error) {
  console.error("Login error:", error); // <-- logs the full error object
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error("Response data:", error.response.data);
    console.error("Response status:", error.response.status);
    console.error("Response headers:", error.response.headers);
    if (error.response.status === 401) {
      alert("Invalid email or password");
    } else {
      alert("Something went wrong. Please try again. (Server error)");
    }
  } else if (error.request) {
    // Request was made but no response
    console.error("No response received:", error.request);
    alert("No response from server. Is backend running?");
  } else {
    // Something else went wrong
    console.error("Error setting up request:", error.message);
    alert("Error in sending request. Check console.");
  }
}

  };
    return <div>
    <h1>Login Page</h1>
   
    <form onSubmit={handleSubmit} >
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