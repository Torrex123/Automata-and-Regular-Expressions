import { useState } from "react";
import styles from "./component.module.css";

const AdditionalInfo = () => {
    const alphabet = ['a', 'b', 'ε', '0', '1']; // Example alphabet

    return (
        <div className={styles.AdditionalInfo}>
            <h2 className={styles.title} >Información Adicional</h2>
            <h3 >
                Alfabeto: <span>{`{ ${alphabet.join(', ')} }`}</span>
            </h3>
        </div>
    );
};

export default AdditionalInfo;
