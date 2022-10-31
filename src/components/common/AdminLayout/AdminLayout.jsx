import React, { memo } from "react";
import styles from "./adminLayout.module.scss";
import AdminTopBar from "../AdminTopBar/AdminTopBar";
import { useSelector } from "react-redux";
import Spinner from "../../common/Spinner/Spinner";

const AdminLayout = ({ children, noTopBar }) => {
    const { auth, user, confirmations } = useSelector((state) => state);

    return (
        <>
            <div className={styles.adminLayout}>
                {!noTopBar && <AdminTopBar />}
                {children}
            </div>
            {(auth.loading || user.loading || confirmations.loading) && <Spinner />}
        </>
    );
};

export default memo(AdminLayout);
