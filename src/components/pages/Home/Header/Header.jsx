import React, { memo } from "react";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Reyes y Poncho</h1>
                    <hr className={styles.divider} />
                    <span className={styles.date}>20.11.21</span>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);
