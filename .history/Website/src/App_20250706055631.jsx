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
        <Route path="/Bath" element={<Bath />} />
        <Route path="/toilet" element={<Toilet />} />
        <Route path="/radiator" element={<Radiator />} />
        <Route path="/boiler" element={<Boiler />} />
        <Route path="/taps" element={<Tap />} />
        
      </Routes>
      <Footer/>

</Router>
)
}

export default App
