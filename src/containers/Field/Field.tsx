import React, {createRef, useRef, useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
// @ts-ignore
import styles from './Field.module.scss';

export type FieldProps = {
    name: string;
    onChange: (e: string) => void;
    handler: () => void;
};

const Field: React.FC<FieldProps> = ({ onChange, handler, name}) => {
    return (
        <div className={styles.field}>
            <Input onChange={onChange} value={name} />
            <Button onClick={() => handler()}>Добавить</Button>
        </div>
    );
};

export default Field;
