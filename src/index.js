import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Buy} from "./components/pages/Buy";
import {About} from "./components/pages/About";
import {Maintenance} from "./components/pages/Maintenance";
import {Rent} from "./components/pages/Rent";
import {Home} from "./components/pages/Home";
import {Contact} from "./components/pages/Contact";
import {Emplayees} from "./components/pages/Emplayees";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="Home" element={<Home />} />
                <Route path="Buy" element={<Buy />} />
                <Route path="About" element={<About />} />
                <Route path="Maintenance" element={<Maintenance />} />
                <Route path="Rent" element={<Rent />} />
                <Route path="Emplayees" element={<Emplayees/>}/>
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
