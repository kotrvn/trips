import React from 'react';
import UserItem from '../../components/UserItem/UserItem';
import DatePicker from '../../components/DatePicker/DatePicker';
import { IUser } from '../../store/usersSlice';

// @ts-ignore
import styles from './UserList.module.scss';

export type UserListProps = {
    list: IUser[];
    onRemove: (id: number) => void;
    selectDate: (id: number, value: string) => void;
};

const UserList: React.FC<UserListProps> = ({ list, onRemove, selectDate}) => {
    return (
        <div className={styles.list}>
            <h2 className={styles.title}>Cписок участников:</h2>
            {!list.length && (<p>Участников пока нет.</p>)}
            {list.map((item: IUser) => {
                return (
                    <div key={item.id} className={styles.item}>
                        <UserItem name={item.name} onRemove={() => onRemove(item.id)}/> - <DatePicker id={item.id} selectDate={selectDate} />
                    </div>
                );
            })}

        </div>
    );
};

export default UserList;
