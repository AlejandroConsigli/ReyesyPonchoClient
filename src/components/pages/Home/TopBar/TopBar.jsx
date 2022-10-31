import React, { memo, useState } from "react";
import styles from "./topBar.module.scss";
import { SwipeableDrawer } from "@mui/material";
import Button from "../../../common/Button/Button";
import menuIcon from "../../../../shared/assets/icons/menu.png";

const TopBar = ({ allRefs }) => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = (open) => (e) => {
        if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
            return;
        }
        setMenu(open);
    };

    const scrollTo = (e) => {
        const position = allRefs[e.target.id].current.getBoundingClientRect().top;
        const offset = window.pageYOffset - 100;
        const top = position + offset;

        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <div className={styles.topBar}>
            <div className={styles.topBarDesktop}>
                <Button id="places" label="Info" className={styles.topBarLink} onClick={scrollTo} />
                <Button
                    id="counter"
                    label="Cuenta regresiva"
                    className={styles.topBarLink}
                    onClick={scrollTo}
                />
                <Button
                    id="gifts"
                    label="Regalos"
                    className={styles.topBarLink}
                    onClick={scrollTo}
                />
                <Button
                    id="confirmation"
                    label="Confirmar"
                    className={styles.topBarLink}
                    onClick={scrollTo}
                />
                <Button
                    id="footer"
                    label="Contacto"
                    className={styles.topBarLink}
                    onClick={scrollTo}
                />
            </div>
            <div className={styles.topBarMobile}>
                <Button
                    label={<img src={menuIcon} alt="Reyes y Poncho" className={styles.menu} />}
                    className={styles.topBarOpener}
                    onClick={toggleMenu(true)}
                />
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
                        <Button
                            id="places"
                            label="Info"
                            className={styles.drawerLink}
                            onClick={scrollTo}
                        />
                        <Button
                            id="counter"
                            label="Cuenta regresiva"
                            className={styles.drawerLink}
                            onClick={scrollTo}
                        />
                        <Button
                            id="gifts"
                            label="Regalos"
                            className={styles.drawerLink}
                            onClick={scrollTo}
                        />
                        <Button
                            id="confirmation"
                            label="Confirmar"
                            className={styles.drawerLink}
                            onClick={scrollTo}
                        />
                        <Button
                            id="footer"
                            label="Contacto"
                            className={styles.drawerLink}
                            onClick={scrollTo}
                        />
                    </div>
                </SwipeableDrawer>
            </div>
        </div>
    );
};

export default memo(TopBar);
