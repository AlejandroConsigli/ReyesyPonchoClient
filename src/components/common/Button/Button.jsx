import React, { memo } from "react";
import styles from "./button.module.scss";

const Button = ({ label, onClick, type, className, id }) => (
    <button id={id} className={`${styles.button} ${className}`} onClick={onClick} type={type}>
        {label}
    </button>
);

export default memo(Button);
