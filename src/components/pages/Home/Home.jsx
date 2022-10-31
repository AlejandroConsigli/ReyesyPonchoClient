import React, { memo, useRef } from "react";
import TopBar from "./TopBar/TopBar";
import Header from "./Header/Header";
import Places from "./Places/Places";
import Counter from "./Counter/Counter";
import Gifts from "./Gifts/Gifts";
import Confirmation from "./Confirmation/Confirmation";
import Footer from "./Footer/Footer";
import styles from "./home.module.scss";
import { useSelector } from "react-redux";
import Spinner from "../../common/Spinner/Spinner";

const Home = () => {
    const { confirmations } = useSelector((state) => state);
    const allRefs = {
        places: useRef("places"),
        counter: useRef("counter"),
        gifts: useRef("gifts"),
        confirmation: useRef("confirmation"),
        footer: useRef("footer"),
    };

    return (
        <div className={styles.container}>
            <TopBar allRefs={allRefs} />
            <Header />
            <Places thisRef={allRefs.places} />
            <Counter thisRef={allRefs.counter} />
            <Gifts thisRef={allRefs.gifts} />
            <Confirmation thisRef={allRefs.confirmation} />
            <Footer thisRef={allRefs.footer} />
            {confirmations.loading && <Spinner />}
        </div>
    );
};

export default memo(Home);
