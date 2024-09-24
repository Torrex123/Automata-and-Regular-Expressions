import { useState } from "react";
import styles from "./component.module.css";

const TransitionTable = ({ transitions: initialTransitions }) => {
    const [transitions] = useState(initialTransitions || [
        { from: 0, to: 1, label: "ε" },
        { from: 1, to: 2, label: "ε" },
        { from: 2, to: 3, label: "a" },
        { from: 1, to: 4, label: "ε" },
        { from: 4, to: 5, label: "b" },
        { from: 3, to: 6, label: "ε" },
        { from: 5, to: 6, label: "ε" },
        { from: 6, to: 1, label: "ε" },
        { from: 6, to: 7, label: "ε" },
        { from: 0, to: 7, label: "ε" },
        { from: 7, to: 8, label: "ε" },
        { from: 0, to: 7, label: "ε" },
        { from: 7, to: 8, label: "ε" },

    ]);

    return (
        <div className={styles.transitionsTable}>
            <h2>Transiciones del Autómata</h2>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Estado Inicial</th>
                            <th>Estado Final</th>
                            <th>Transición</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transitions.map((transition, index) => (
                            <tr key={index}>
                                <td>{transition.from}</td>
                                <td>{transition.to}</td>
                                <td>{transition.label}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransitionTable;
