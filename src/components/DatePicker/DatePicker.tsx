import React, {useEffect, useState} from 'react';
// @ts-ignore
import styles from './DatePicker.module.scss';


export type InputProps = {
    id: number;
    error?: boolean;
    selectDate: (id: number, value: string) => void;
};

const DatePicker: React.FC<InputProps> = ({ id, error, selectDate  }) => {
    const [date, setDate] = useState('')

    const selectDateHandler = (id: number, value: string) => setDate(value)


    useEffect(() => {
        selectDate(id, date)
    }, [date])

    return (
        <input type="date" className={styles.input} onChange={(e) => selectDateHandler(id, e.target.value)} />
    );
};

export default DatePicker;
