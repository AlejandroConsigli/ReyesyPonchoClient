import React, { memo } from "react";
import styles from "./gifts.module.scss";
import { useDispatch } from "react-redux";
import { openAlert } from "../../../../actions/alerts";

const Gifts = ({ thisRef }) => {
    const dispatch = useDispatch();

    const copyText = (e) => {
        dispatch(openAlert("success", "Copiado al portapapeles"));
        navigator.clipboard.writeText(e.target.textContent);
    };

    return (
        <div className={styles.container} ref={thisRef}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.title}>¿Querés hacernos un regalo?</h1>
                    <span className={styles.answer}>
                        El mejor regalo que podés hacernos es que nos acompañes en este día
                    </span>
                    <div className={styles.text}>
                        <div className={styles.group}>
                            <span className={styles.line}>
                                Podés ayudarnos mucho con tu regalo:
                            </span>
                            <div className={styles.important}>
                                <span className={styles.line}>
                                    CBU:&nbsp;
                                    <span className={styles.action} onClick={copyText}>
                                        0070138530004086854178
                                    </span>
                                </span>
                                <span className={styles.line}>
                                    ALIAS:&nbsp;
                                    <span className={styles.action} onClick={copyText}>
                                        poncho.consigli
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.group}>
                            <span className={styles.line}>
                                O buscá algo que te guste de la lista que pusimos en "Cosas para
                                Llevar":
                            </span>
                            <div className={styles.important}>
                                <span className={styles.line}>
                                    <span className={styles.action}>
                                        <a
                                            href="https://goo.gl/maps/hurQ8XNWrdHPeJAbA"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Achaval Rodríguez 296
                                        </a>
                                    </span>
                                </span>
                                <span className={styles.line}>
                                    <span className={styles.action}>
                                        <a
                                            href="https://goo.gl/maps/amadqzJcFtTpKcHT8"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Belgrano 719
                                        </a>
                                    </span>
                                </span>
                                <span className={styles.line}>
                                    <span className={styles.action}>
                                        <a
                                            href="https://wa.me/543517916421"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            3517916421
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Gifts);
