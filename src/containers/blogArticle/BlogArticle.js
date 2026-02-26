import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import "./BlogArticle.scss";

export default function BlogArticle() {
    const { isDark } = useContext(StyleContext);
    const { id } = useParams();

    const blog = blogSection.blogs.find((b) => b.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className={isDark ? "dark-mode" : null}>
                <Header />
                <div className="blog-article-main error-not-found">
                    <h2>Article not found</h2>
                    <Link to="/">Go back home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    // Split content by double newlines for basic paragraph formatting, or render as pre-wrap
    return (
        <div className={isDark ? "dark-mode" : null}>
            <Header />
            <div className="blog-article-main">
                <Link to="/#blogs" className="back-link">
                    ← Back to Portfolio
                </Link>
                <div className="article-container">
                    <h1 className={isDark ? "dark-mode article-title" : "article-title"}>
                        {blog.title}
                    </h1>
                    {blog.image && (
                        <div className="article-hero-image-container">
                            <img
                                src={require(`../../assets/images/${blog.image}`)}
                                alt={blog.title}
                                className="article-hero-image"
                            />
                        </div>
                    )}
                    <div
                        className={isDark ? "dark-mode article-content" : "article-content"}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    >
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}
