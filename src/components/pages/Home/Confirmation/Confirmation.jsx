import React, { memo, useState } from "react";
import styles from "./confirmation.module.scss";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import Textarea from "../../../common/Textarea/Textarea";
import CheckboxRadio from "../../../common/CheckboxRadio/CheckboxRadio";
import confirmationImage from "../../../../shared/assets/images/confirmation.jpg";
import { useDispatch, useSelector } from "react-redux";
import { openAlert } from "../../../../actions/alerts";
import { postConfirmations } from "../../../../actions/confirmations";

const Confirmation = ({ thisRef }) => {
    const dispatch = useDispatch();
    const { confirmations } = useSelector((state) => state);

    const [confirmation, setConfirmation] = useState({
        fullName: "",
        answer: "",
        message: "",
    });

    const onChange = (e) => {
        const { name, value, type } = e.target;
        if (type === "radio") {
            const newValue = value === "true";
            setConfirmation({ ...confirmation, [name]: newValue });
        } else {
            setConfirmation({ ...confirmation, [name]: value });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!confirmation.fullName) {
            dispatch(openAlert("warning", "Ingresá tu nombre completo"));
        } else if (confirmation.answer === "") {
            dispatch(
                openAlert("warning", "Confirmá tu asistencia presionando en CONFIRMO o NO PUEDO")
            );
        } else {
            dispatch(postConfirmations(confirmation));
        }
    };

    const checkboxes = [
        {
            label: "Confirmo",
            value: true,
        },
        {
            label: "No puedo",
            value: false,
        },
    ];

    return (
        <div className={styles.container} ref={thisRef}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Confirmá tu asistencia</h1>
                    <h2 className={styles.subtitle}>Recordá hacerlo antes del 5 de Noviembre</h2>
                    <div className={styles.data}>
                        <div className={styles.imageDiv}>
                            <img
                                src={confirmationImage}
                                className={styles.image}
                                alt="Reyes y Poncho"
                            />
                        </div>
                        <div className={styles.formDiv}>
                            <form onSubmit={onSubmit} className={styles.form}>
                                <Input
                                    label="Nombre completo"
                                    placeholder="Ingresá tu nombre completo"
                                    type="text"
                                    name="fullName"
                                    value={confirmation.fullName}
                                    onChange={onChange}
                                    className={styles.input}
                                    maxLength="40"
                                />
                                <Textarea
                                    label="Mensaje"
                                    placeholder="¿Querés dejanos un mensaje?"
                                    type="text"
                                    name="message"
                                    value={confirmation.message}
                                    onChange={onChange}
                                    className={styles.textarea}
                                    maxLength="400"
                                />
                                <CheckboxRadio
                                    name="answer"
                                    checkboxes={checkboxes}
                                    value={confirmation.answer}
                                    className={styles.checkboxRadio}
                                    onChange={onChange}
                                />
                                <div className={styles.bottom}>
                                    {confirmations.confirmation &&
                                    confirmations.confirmation._id ? (
                                        <span className={styles.sent}>Confirmación enviada</span>
                                    ) : (
                                        <Button
                                            label="/ Enviar /"
                                            onClick={onSubmit}
                                            className={styles.button}
                                        />
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Confirmation);
