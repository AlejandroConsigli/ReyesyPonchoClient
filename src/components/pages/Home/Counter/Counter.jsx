import React, { memo, useState, useEffect } from "react";
import styles from "./counter.module.scss";

const Counter = ({ thisRef }) => {
    const [counter, setCounter] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const formatNumber = (number) => {
        let formattedNumber = number.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        return formattedNumber;
    };

    const getTime = () => {
        const now = new Date();
        const weddingDate = new Date("November 20, 2021 16:30:00");
        const time = Date.parse(weddingDate) - Date.parse(now);

        if (time < 0) {
            setCounter({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            setCounter({ days, hours, minutes, seconds });
        }
    };

    useEffect(() => {
        setInterval(() => getTime(), 1000);

        return () => {
            getTime();
        };
    }, []);

    const counterDisplay = [
        {
            label: "Días",
            data: counter.days,
        },
        {
            label: "Horas",
            data: counter.hours,
        },
        {
            label: "Minutos",
            data: counter.minutes,
        },
        {
            label: "Segundos",
            data: counter.seconds,
        },
    ];

    return (
        <div className={styles.container} ref={thisRef}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Faltan sólo</h1>
                    <div className={styles.timer}>
                        {counterDisplay.map((item, index) => (
                            <div className={styles.timerDivider} key={index}>
                                <span className={styles.timerData}>{formatNumber(item.data)}</span>
                                <span className={styles.timerLabel}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Counter);
