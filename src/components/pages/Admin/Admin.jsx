import React, { memo, useState } from "react";
import styles from "./admin.module.scss";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import AdminLayout from "../../common/AdminLayout/AdminLayout";
import { useDispatch } from "react-redux";
import { signin } from "../../../actions/auth";
import { openAlert } from "../../../actions/alerts";

const Admin = () => {
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const onSignin = (e) => {
        e.preventDefault();
        if (!credentials.username || !credentials.password) {
            dispatch(openAlert("warning", "Ingresá tus credenciales"));
        } else {
            dispatch(signin(credentials));
        }
    };

    return (
        <AdminLayout noTopBar>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Bienvenidos</span>
                        </div>
                        <form onSubmit={onSignin}>
                            <Input
                                label="Usuario"
                                placeholder="Ingresar usuario"
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={onChange}
                            />
                            <Input
                                label="Contraseña"
                                placeholder="Ingresar contraseña"
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={onChange}
                            />
                            <div className={styles.bottom}>
                                <Button label="Ingresar" onClick={onSignin} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default memo(Admin);
