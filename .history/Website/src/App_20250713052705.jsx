import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Shower from './frontend/Shower/Shower';
import Bath from './frontend/Bath/Bath';
import Toilet from './frontend/Toilet/Toilet';
import Radiator from './frontend/Radiator/Radiator';
import Boiler from './frontend/Boiler/Boiler';
import Tap from './frontend/Taps/Tap';
import ShowerBath from './frontend/Bath/showerBath';
import Vanity from './frontend/sink/Vanity';
import CloseCoupled from './frontend/Toilet/CloseCoupled';
import BackToWall from './frontend/Toilet/BackToWall';
import Home from './frontend/Home/Home';
import Sinks from './frontend/sink/sinks';
import Bidet from './frontend/Toilet/Bidet';



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
        <Route path="/close-coupled" element={<CloseCoupled />} />
        <Route path="/radiator" element={<Radiator />} />
        <Route path="/boiler" element={<Boiler />} />
        <Route path="/taps" element={<Tap />} />
        <Route path="/ShowerBath" element={<ShowerBath />} />
        <Route path="/vanity" element={<Vanity />} />
        <Route path="/back-to-wall" element={<BackToWall />} />
        <Route path="/bidet" element={<Bidet />} />
        <Route path="/close-coupled" element={<CloseCoupled />} />

       

      </Routes>
      <Footer/>

</Router>
)
}

export default App
