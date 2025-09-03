import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Shower from './Shower/Shower';
import Bath from './Bath/Bath';
import Toilet from './Toilet/Toilet';
import Radiator from './Radiator/Radiator';
import Boiler from './Boiler/Boiler';
import Tap from './Taps/Tap';
import ShowerBath from './Bath/showerBath';
import Vanity from './sink/Vanity';
import CloseCoupled from './Toilet/CloseCoupled';
import BackToWall from './Toilet/BackToWall';
import Home from './Home/Home';
import Sinks from './sink/sinks';
import Bidet from './Toilet/Bidet';
import ComfortHeight from './Toilet/ComfortHeightToilet';
import Flush from './Toilet/Flush';
import createAccount from '.user/createAccount';


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
        <Route path="/comfort-height" element={<ComfortHeight />} />
        <Route path="/toilet-flush" element={<Flush />} />
        <Route path="/create-account" element={<createAccount />} />

      </Routes>
      <Footer/>

</Router>
)
}

export default App
