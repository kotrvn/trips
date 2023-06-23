import React from 'react';
// @ts-ignore
import styles from './Button.module.scss';


export type ButtonProps = {
    children: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>{children}</button>
    );
};

export default Button;
