import React, { memo, useState } from "react";
import styles from "./adminUser.module.scss";
import AdminLayout from "../../common/AdminLayout/AdminLayout";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { useDispatch } from "react-redux";
import { putPassword } from "../../../actions/user";
import { openAlert } from "../../../actions/alerts";

const AdminUser = () => {
    const dispatch = useDispatch();

    const [passwords, setPasswords] = useState({
        password: "",
        confirm: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (passwords.password.length < 6) {
            dispatch(openAlert("warning", "La contraseña debe ser de al menos 6 caracteres"));
        } else if (passwords.password !== passwords.confirm) {
            dispatch(openAlert("warning", "Las contraseñas no coinciden"));
        } else {
            dispatch(putPassword({ password: passwords.password }));
        }
    };

    return (
        <AdminLayout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <span>Usuario</span>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.card}>
                            <form onSubmit={onSubmit}>
                                <Input
                                    label="Contraseña"
                                    placeholder="Ingresar contraseña"
                                    type="password"
                                    name="password"
                                    value={passwords.password}
                                    onChange={onChange}
                                />
                                <Input
                                    label="Confirmar contraseña"
                                    placeholder="Confirmar contraseña"
                                    type="password"
                                    name="confirm"
                                    value={passwords.confirm}
                                    onChange={onChange}
                                />
                                <div className={styles.bottom}>
                                    <Button label="Guardar" onClick={onSubmit} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default memo(AdminUser);
