import { useState } from "react";
import styles from "./component.module.css";

const Simulation = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={styles.AdditionalInfo}>
            <h2 className={styles.title}>Simulación</h2>
            <label className={styles.label} htmlFor="inputString">
                Ingrese cadena para evaluar
            </label>
            <input
                type="text"
                id="inputString"
                value={inputValue}
                onChange={handleChange}
                className={styles.input}
                placeholder="Cadena aquí..."
            />
             <input
                className={styles.buttonsubmit}
                value="Simular"
                type="submit"
            />
        </div>
    );
};

export default Simulation;
