import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Achievement from "../containers/achievement/Achievement";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../containers/topbutton/Top";

export default function AchievementsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Achievement />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
