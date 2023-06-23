import React from 'react';
// @ts-ignore
import styles from './UserItem.module.scss';

export type UserItemProps = {
    name: string;
    onRemove?: () => void;
};

const UserItem: React.FC<UserItemProps> = ({ name, onRemove}) => {
    return (
        <div className={styles.item}>
            <div className={styles.name}>{name}</div>
            <button className={styles.remove} onClick={onRemove} />
        </div>
    );
};

export default UserItem;
