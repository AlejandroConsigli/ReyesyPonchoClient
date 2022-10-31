import React, { memo, Fragment } from "react";
import styles from "./checkboxRadio.module.scss";

const CheckboxRadio = ({ name, checkboxes, value, onChange, className }) => (
    <div className={`${styles.container} ${className}`}>
        {checkboxes.map((checkbox, index) => (
            <Fragment key={index}>
                <input
                    type="radio"
                    className={styles.input}
                    id={checkbox.label}
                    name={name}
                    value={checkbox.value}
                    checked={value === checkbox.value}
                    onChange={onChange}
                />
                <label
                    htmlFor={checkbox.label}
                    className={`${styles.label} ${checkbox.value === value && styles.active}`}
                >
                    {checkbox.label}
                </label>
            </Fragment>
        ))}
    </div>
);

export default memo(CheckboxRadio);
