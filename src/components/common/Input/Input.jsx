import React, { memo } from "react";
import styles from "./input.module.scss";

const Input = ({ type, label, name, placeholder, value, onChange, className, maxLength }) => (
    <div className={`${styles.container} ${className}`}>
        <span className={styles.label}>{label}</span>
        <input
            type={type}
            className={styles.input}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            size={1}
            maxLength={maxLength}
        />
    </div>
);

export default memo(Input);
