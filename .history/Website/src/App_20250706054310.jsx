import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Shower from './Shower/Shower';
import Home from './Home/Home';
import Sinks from './sink/sinks';


function App() {
return (
<Router>
<Header/>
<Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/sinks" element={<Sinks />} />
        <Route path="/Shower" element={<Shower />} />
      </Routes>
      <Footer/>

</Router>
)
}

export default App
