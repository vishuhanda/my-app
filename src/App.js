import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes/Notes";
import {Outlet} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Appl(){
    return (
        <div className="App">
                 <Navbar expand="lg" className="bg-body-tertiary">
                     <Container>
                         <Navbar.Brand href="#home">Vishu Handa</Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                             <Nav className="me-auto">
                                 <Nav.Link href="/notes" >Notes</Nav.Link>
                                 <Nav.Link href="/contact">Contact</Nav.Link>
                                 <Nav.Link href="/blogs">Blogs</Nav.Link>
                             </Nav>
                         </Navbar.Collapse>
                     </Container>
                 </Navbar>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Notes/>} />
                        <Route path="/notes" element={<Notes/>} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        <Outlet />
        </div>
    );

};


