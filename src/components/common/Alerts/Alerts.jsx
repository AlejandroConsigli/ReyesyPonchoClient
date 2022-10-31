import React, { memo } from "react";
import styles from "./alerts.module.scss";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { useSelector } from "react-redux";

const Alerts = () => {
    const { alerts: { open, severity, text } } = useSelector((state) => state);

    return (
        <div className={styles.alerts}>
            <Collapse in={open}>
                <Alert severity={severity}>{text}</Alert>
            </Collapse>
        </div>
    );
};

export default memo(Alerts);
