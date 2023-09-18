import './App.css';

import Header from "./pages/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


export default function Appl(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="home" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );

};


