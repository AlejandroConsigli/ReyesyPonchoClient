import React, { memo } from "react";
import styles from "./footer.module.scss";

const Footer = ({ thisRef }) => {
    return (
        <div className={styles.container} ref={thisRef}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.title}>¡Te esperamos!</h1>
                    <span className={styles.hashtag}>#reyesyponcho</span>
                    <div className={styles.contact}>
                        <span className={styles.contactTitle}>Contacto</span>
                        <span className={styles.contactNumber}>
                            Reyes&nbsp;
                            <a href="https://wa.me/543516638055" target="_blank" rel="noreferrer">
                                3516638055
                            </a>
                        </span>
                        <span className={styles.contactNumber}>
                            Poncho&nbsp;
                            <a href="https://wa.me/543517668099" target="_blank" rel="noreferrer">
                                3517668099
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Footer);
