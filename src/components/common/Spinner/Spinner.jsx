import React, { memo } from "react";
import logo from "../../../shared/assets/icons/logo.png";
import styles from "./spinner.module.scss";

const Spinner = () => (
    <div className={styles.spinner}>
        <img src={logo} alt="Reyes y Poncho" />
    </div>
);

export default memo(Spinner);
