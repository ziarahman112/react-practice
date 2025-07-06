import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Card from './Home';
import Sinks from './sinks';


function App() {
return (
<Router>

<Routes>
        <Route path="/Card" element={<Card />} />
        <Route path="/sinks" element={<Sinks />} />
      </Routes>

</Router>
)
}

export default App
