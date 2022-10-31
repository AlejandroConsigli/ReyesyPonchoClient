import React, { memo, useCallback } from "react";
import styles from "./confirmationCard.module.scss";
import moment from "moment";

const ConfirmationCard = ({ confirmation, openRemoveModal }) => {
    const formatedDate = useCallback(() => {
        const confirmationDate = new Date(confirmation.date);
        const today = new Date();
        let finalDate;
        
        if (confirmationDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
            finalDate = `${moment(confirmation.date).format("HH:mm")} Hoy`;
        } else {
            finalDate = moment(confirmation.date).format("HH:mm MM/DD");
        }
        return finalDate;
    }, [confirmation]);

    return (
        <div className={styles.confirmationCard}>
            <div className={styles.rows}>
                <span className={styles.date}>{formatedDate()}</span>
                <span className={styles.fullName}>{confirmation.fullName}</span>
                <span className={styles.answer}>{confirmation.answer ? "Sí" : "No"}</span>
                <span className={styles.message}>{confirmation.message}</span>
            </div>
            <div className={styles.actions}>
                <div className={styles.action} onClick={() => openRemoveModal(confirmation._id)}>
                    X
                </div>
            </div>
        </div>
    );
};

export default memo(ConfirmationCard);
