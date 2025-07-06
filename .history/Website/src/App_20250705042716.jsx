import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Sinks from './sinks';


function App() {
return (
<Router>
<Header></Header>
<Card></Card>
<Routes>
        <Route path="/" element={<Card />} />
        <Route path="/sinks" element={<Sinks />} />
      </Routes>
<Footer></Footer>
</Router>
)
}

export default App
