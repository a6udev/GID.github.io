import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './../components/Header';
import Modal from './../components/Modal';
import Home from './Home';
import Footer from './../components/Footer';
import Tours from './Tours';
import Organizations from './Organizations';
import ChooseCountary from '../components/auth/registration/ChooseCountary';

const Main = () => {
    const location = useLocation();
    const state = location.state || {};

    return (
        <div>
            <Header />
            <Routes location={state.backgroundLocation || location}>
                <Route path="/" element={<Home />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/organizations" element={<Organizations />} />
            </Routes>
            {state.backgroundLocation && (
                <Routes>
                    <Route path="/modal/*" element={<Modal />} />
                    <Route path="/choosecountary/" element={<ChooseCountary />} />
                </Routes>
            )}
            <Footer />
        </div>
    );
}

export default Main;
