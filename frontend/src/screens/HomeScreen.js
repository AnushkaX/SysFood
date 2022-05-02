import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../homeComponents/ShopSection";
import ContactInfo from "./../homeComponents/ContactInfo";
import CalltoActionSection from "./../homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <ShopSection />
            <CalltoActionSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default HomeScreen;