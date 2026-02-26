import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Blogs from "../containers/blogs/Blogs";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../containers/topbutton/Top";

export default function BlogsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Blogs />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
