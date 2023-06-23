import React from 'react';
// @ts-ignore
import styles from './Input.module.scss';

export type InputProps = {
    value: string
    onChange: (e: string) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className={styles.input} />
    );
};

export default Input;
