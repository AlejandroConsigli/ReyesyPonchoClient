import React, { memo, useState, useEffect, useCallback } from "react";
import styles from "./adminConfirmations.module.scss";
import AdminLayout from "../../common/AdminLayout/AdminLayout";
import Button from "../../common/Button/Button";
import ConfirmationCard from "./ConfirmationCard/ConfirmationCard";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmations, deleteConfirmation } from "../../../actions/confirmations";
import { Box } from "@mui/material";
import { Modal } from "@mui/material";

const AdminConfirmations = () => {
    const dispatch = useDispatch();
    const {
        confirmations: { confirmations: reduxConfirmations },
    } = useSelector((state) => state);

    const [confirmations, setConfirmations] = useState([]);
    const [modal, setModal] = useState(false);
    const [idToRemove, setIdToRemove] = useState(false);
    const [answerFilter, setAnswerFilter] = useState("all-answers");

    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);

    const openRemoveModal = (confirmationId) => {
        setIdToRemove(confirmationId);
        handleOpenModal();
    };

    const removeConfirmation = useCallback(() => {
        dispatch(deleteConfirmation(idToRemove));
        handleCloseModal();
    }, [dispatch, idToRemove]);

    const clickAnswer = () => {
        switch (answerFilter) {
            case "all-answers":
                setAnswerFilter("yes-answers");
                break;
            case "yes-answers":
                setAnswerFilter("no-answers");
                break;
            case "no-answers":
                setAnswerFilter("all-answers");
                break;
            default:
                setAnswerFilter("all-answers");
                break;
        }
    };

    const filteredConfirmations = useCallback(() => {
        let finalConfirmations;
        switch (answerFilter) {
            case "all-answers":
                finalConfirmations = confirmations;
                break;
            case "yes-answers":
                finalConfirmations = confirmations.filter((item) => item.answer);
                break;
            case "no-answers":
                finalConfirmations = confirmations.filter((item) => !item.answer);
                break;
            default:
                finalConfirmations = confirmations;
                break;
        }
        return finalConfirmations;
    }, [confirmations, answerFilter]);

    useEffect(() => {
        reduxConfirmations && setConfirmations(reduxConfirmations);
    }, [reduxConfirmations]);

    useEffect(() => {
        dispatch(getConfirmations());
    }, [dispatch]);

    return (
        <AdminLayout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <span>{`Confirmaciones (${filteredConfirmations().length})`}</span>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.card}>
                            <div className={styles.rows}>
                                <span className={styles.date}>Fecha</span>
                                <span className={styles.fullName}>Nombre</span>
                                <Button
                                    className={`${styles.answer} ${styles[answerFilter]}`}
                                    label="Resp"
                                    onClick={clickAnswer}
                                />
                                <span className={styles.message}>Mensaje</span>
                            </div>
                            {filteredConfirmations().length === 0 && (
                                <div className={styles.noConfirmations}>
                                <span className={styles.noConfirmationsMessage}>Todavía no hay confirmaciones</span>

                                </div>
                            )}
                            {filteredConfirmations()
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .map((confirmation, index) => (
                                    <ConfirmationCard
                                        key={index}
                                        confirmation={confirmation}
                                        openRemoveModal={openRemoveModal}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={modal} onClose={handleCloseModal}>
                <Box className={styles.modal}>
                    <span className={styles.text}>
                        ¿Estás seguro que querés borrar esta confirmación?
                    </span>
                    <span className={styles.text}>Esta acción no se puede deshacer.</span>
                    <div className={styles.bottom}>
                        <Button label="Cancelar" onClick={handleCloseModal} />
                        <Button
                            className={styles.delete}
                            label="Eliminar"
                            onClick={removeConfirmation}
                        />
                    </div>
                </Box>
            </Modal>
        </AdminLayout>
    );
};

export default memo(AdminConfirmations);
