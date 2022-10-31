import React, { memo, useState } from "react";
import styles from "./adminTopBar.module.scss";
import { SwipeableDrawer } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Button from "../../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../actions/auth";
import menuIcon from "../../../shared/assets/icons/menu.png";

const AdminTopBar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    const [menu, setMenu] = useState(false);
    const toggleMenu = (open) => (e) => {
        if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
            return;
        }

        setMenu(open);
    };

    const { pathname } = useLocation();

    const onSignout = () => {
        dispatch(signout());
    };

    return (
        <div className={styles.adminTopBar}>
            <Button
                label={<img src={menuIcon} alt="Reyes y Poncho" className={styles.menu} />}
                onClick={toggleMenu(true)}
            />
            <span>{!user.loading && user.user && user.user.username}</span>

            <Button label="Salir" onClick={onSignout} />
            <SwipeableDrawer
                classes={{ paper: styles.drawer }}
                open={menu}
                onClose={toggleMenu(false)}
                onOpen={toggleMenu(true)}
            >
                <div
                    className={styles.drawerLinks}
                    role="presentation"
                    onClick={toggleMenu(false)}
                    onKeyDown={toggleMenu(false)}
                >
                    <span
                        className={`${styles.drawerLink} 
                        ${pathname === "/admin/confirmations" && styles.activeLink}`}
                    >
                        <Link to="/admin/confirmations">Confirmaciones</Link>
                    </span>
                    <span
                        className={`${styles.drawerLink} 
                        ${pathname === "/admin/user" && styles.activeLink}`}
                    >
                        <Link to="/admin/user">Usuario</Link>
                    </span>
                </div>
            </SwipeableDrawer>
        </div>
    );
};

export default memo(AdminTopBar);
