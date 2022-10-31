import React, { memo } from "react";
import styles from "./places.module.scss";
import churchImage from "../../../../shared/assets/icons/church.png";
import partyImage from "../../../../shared/assets/icons/party.png";
import mapImage from "../../../../shared/assets/images/map.jpg";

const Places = ({ thisRef }) => {
    return (
        <div className={styles.container} ref={thisRef}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.title}>¡Nos casamos!</h1>
                    <h2 className={styles.subtitle}>Te invitamos a acompañarnos</h2>
                    <div className={styles.data}>
                        <div className={styles.churchParty}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={churchImage}
                                    className={styles.image}
                                    alt="Reyes y Poncho"
                                />
                            </div>
                            <hr className={styles.divider} />
                            <span className={styles.name}>Capilla Santa Cecilia</span>
                            <a
                                href="https://goo.gl/maps/8RAKK7qttQsNfBbc9"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className={styles.label}>Argañaraz y Murguia 3600</span>
                                <span className={styles.label}>Córdoba, Argentina</span>
                            </a>
                            <span className={styles.label}>16:30 hs</span>
                        </div>
                        <div className={styles.churchParty}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={partyImage}
                                    className={styles.image}
                                    alt="Reyes y Poncho"
                                />
                            </div>
                            <hr className={styles.divider} />
                            <span className={styles.name}>Casas Viejas</span>
                            <a
                                href="https://www.google.com/maps/place/Casas+Viejas+Campo+De+Eventos/@-31.4398763,-64.3338377,17z/data=!3m1!4b1!4m5!3m4!1s0x94329ffeb47e6ff5:0xfb7a19b2a500b487!8m2!3d-31.4398089!4d-64.3316412"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className={styles.label}>Colectora Córdoba Carlos Paz</span>
                                <span className={styles.label}>Córdoba, Argentina</span>
                            </a>
                            <span className={styles.label}>18:00 hs</span>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <a href={mapImage} target="_blank" rel="noreferrer">
                            <img src={mapImage} className={styles.image} alt="Reyes y Poncho" />
                        </a>
                    </div>
                    <hr className={styles.suggestionSdivider} />
                    <div className={styles.suggestions}>
                        <span className={styles.label}>
                            Te contamos que el salón es muy grande y con ventanales hacia el parque
                            pero para poder festejarlo tranquilos y poder disfrutar, necesitamos que
                            nos cuidemos entre todos:
                        </span>
                        <span className={styles.label}>
                            Usar barbijo en todo momento y respetar las disposiciones de los demás.
                        </span>
                        <span className={styles.label}>¡Muchas gracias!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Places);
