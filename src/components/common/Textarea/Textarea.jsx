import React, { memo } from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ type, label, name, placeholder, value, onChange, className, maxLength }) => (
    <div className={`${styles.container} ${className}`}>
        <span className={styles.label}>{label}</span>
        <textarea
            type={type}
            className={styles.textarea}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
        />
    </div>
);

export default memo(Textarea);
