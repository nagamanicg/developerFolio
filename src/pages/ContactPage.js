import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../containers/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../containers/topbutton/Top";

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
