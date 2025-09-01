import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Shower from './frontend/Shower/Shower';
import Bath from './frontend/Bath/Bath';
import Toilet from './frontend/Toilet/Toilet';
import Radiator from './frontend/Radiator/Radiator';
import Boiler from './Boiler/Boiler';
import Tap from './frontend/Taps/Tap';
//import showerBath from '.frontend/Bath/showerBath';


import Home from './frontend/Home/Home';
import Sinks from './frontend/sink/sinks';


function App() {
return (
<Router>
<Header/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinks" element={<Sinks />} />
        <Route path="/Shower" element={<Shower />} />
        <Route path="/Bath" element={<Bath />} />
        <Route path="/toilet" element={<Toilet />} />
        <Route path="/radiator" element={<Radiator />} />
        <Route path="/boiler" element={<Boiler />} />
        <Route path="/taps" element={<Tap />} />
        <Route path="/showerBath" element={<showerBath />} />
       

      </Routes>
      <Footer/>

</Router>
)
}

export default App
