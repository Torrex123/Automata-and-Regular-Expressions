import { useState, useEffect } from "react";
import styles from "./component.module.css";

const Recognition = () => {
    const [signal, setSignal] = useState(0); // Inicialmente la señal es 0

    useEffect(() => {
        // Simulación de la recepción de la señal
        const interval = setInterval(() => {
            const newSignal = Math.random() > 0.5 ? 1 : 0; // Genera aleatoriamente 0 o 1
            setSignal(newSignal);
        }, 2000); // Cada 2 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    return (
        <div className={styles.AdditionalInfo}>
            <h2 className={styles.title}>Reconocimiento</h2>
            <div className={styles.options}>
                <div className={`${styles.rectangle} ${signal === 1 ? styles.rectangleAccepted : styles.rectangleGray}`}>
                    <span className={styles.label}>Aceptado</span>
                </div>
                <div className={`${styles.rectangle} ${signal === 0 ? styles.rectangleRejected : styles.rectangleGray}`}>
                    <span className={styles.label}>Rechazado</span>
                </div>
            </div>
        </div>
    );
};

export default Recognition;
