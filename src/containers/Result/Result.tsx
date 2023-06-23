import React from 'react';
// @ts-ignore
import styles from './Result.module.scss';

export interface IResultItem {
    date: string;
    users: string[];
}
export type ResultProps = {
    list: IResultItem[];
};

const Result: React.FC<ResultProps> = ({ list = []}) => {
    const getNames = (names: string[]): string => {
        return names.join(', ')
    }

    return (
        <div className={styles.result}>
            <h2 className={styles.title}>Совпадения:</h2>
            {!list.length && (<div>Совпадений не найдено.</div>)}
            {list.map((item, index, array) => {
                if (item.users.length > 1) {
                    return (<div key={item.date}>{item.date} - {getNames(item.users)}</div>)
                 }
            })
            }
        </div>
    );
};

export default Result;
