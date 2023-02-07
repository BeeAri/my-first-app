import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
export default function App() {
return (
<div className="App">
<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/about" element={ <About/> } />
<Route path="/contact" element={ <Contact/> } />
</Routes>
</div>
)
}