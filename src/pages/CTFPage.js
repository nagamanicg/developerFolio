import React, { useEffect } from "react";
import Header from "../components/header/Header";
import CTF from "../containers/ctf/CTF";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../containers/topbutton/Top";

export default function CTFPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <CTF />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
