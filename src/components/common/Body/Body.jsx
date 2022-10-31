import React, { memo } from "react";
import styles from "./body.module.scss";

const Body = ({ children }) => <div className={styles.body}>{children}</div>;

export default memo(Body);
