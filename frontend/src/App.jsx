import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Cursor from "./components/Cursor";
import ShootingStars from "./components/ShootingStars";

import StartProject from "./pages/StartProject";

import "./App.css";


function Home() {
    return (
        <>
            <ShootingStars />

            <Navbar />
            <Hero />
            <Services />
            <Work />
            <About />
            <Founder />
            <Contact />
            <Footer />
        </>
    );
}


function App() {
    return (
        <BrowserRouter>

            {/* GLOBAL CURSOR
                Available on every page / route
            */}
            <Cursor />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/start-project"
                    element={<StartProject />}
                />

            </Routes>

        </BrowserRouter>
    );
}


export default App;