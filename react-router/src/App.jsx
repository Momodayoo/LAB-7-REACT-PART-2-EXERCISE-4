import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Login } from './components/login';
import BitcoinRates from './components/BitCoinRates';
import {Home} from './components/Home';



function App() {


  return (
    <>
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/bitcoin">Bitcoin Rates</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <>
           
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/bitcoin" element={<BitcoinRates />} />
              </Routes>
            
          </>
        </>

      </div>
      </BrowserRouter>
    </>
  )
}

export default App
