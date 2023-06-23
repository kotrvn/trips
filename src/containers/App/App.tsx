import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Field from '../Field/Field';
import UserList from '../UserList/UserList';
import Result, {IResultItem} from '../Result/Result';
import {addDate, addUser, IUser, removeUser} from '../../store/usersSlice';

// @ts-ignore
import styles from './App.module.scss';


const App = () => {
    const [name, setName] = useState<string>('')
    const [calculatedUsers, setCalculatedUsers] = useState<IResultItem[]>([])

    // @ts-ignore
    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch();

    const addNewUser = () => {
        if (name !== '') {
            dispatch(addUser(name))
            setName('')
        }
    };

    const removeUserFromList = (id: number) =>  dispatch(removeUser({id}))

    const selectDate = (id: number, date: string) => dispatch(addDate({id, date}))

    const calculateResult = () => {
        const groups: IResultItem[] = [];

        for (let element of users) {
            let existingGroups = groups.filter(group => group.date == element.date);

            if (users.length > 1 && users[1].date !== '') {
                if (existingGroups.length > 0) {
                    if (existingGroups[0].date !== '') {
                        existingGroups[0].users.push(element.name);
                    } else {
                        existingGroups.pop()
                    }

                }
                else {
                    if (!!element.date) {
                        let newGroup = {
                            date: element.date,
                            users: [element.name],
                        };
                        groups.push(newGroup);
                    }
                    console.log(!element.date)
                }
            }
        }

        const sortGroup = groups.sort((a, b) => {
            return a.users.length < b.users.length ? 1 : -1
        })

        setCalculatedUsers(sortGroup)

    };

    useEffect(() => {
        calculateResult()
    }, [users])

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h1 className={styles.title}>Калькулятор участников похода</h1>
                <Field handler={addNewUser} onChange={setName} name={name} />
                <UserList onRemove={removeUserFromList} list={users} selectDate={selectDate} />
                <Result list={calculatedUsers} />
            </div>
        </div>
    );
}

export default App;
