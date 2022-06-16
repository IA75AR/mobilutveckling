import * as SQLite from "expo-sqlite";


const database = SQLite.openDatabase("player.db");

export const initDB = () => {

    return new Promise((resolve, reject) => {

        database.transaction((transaction) => {
            transaction.executeSql(`CREATE TABLE IF NOT EXISTS players (
                id INTEGER PRIMARY KEY NOT NULL,
                username TEXT NOT NULL
            )`, [],
                    (tx, res) => resolve(res),
                    (tx, err) => reject(err)
            )
        })
    })
}

export const findAll = () => {

    return new Promise ((resolve, reject) => {

        database.transaction((transaction) => {
            transaction.executeSql(`SELECT * FROM players`, [],
                    (tx, res) => resolve(res),
                    (tx, err) => reject(err)
            )
        })
    })
}

export const insert = (player) => {

    return new Promise ((resolve, reject) => {

        database.transaction((transaction) => {
            transaction.executeSql(
                `INSERT INTO players (username)
                VALUES (?)`, [player.username],
                    (tx, res) => resolve(res),
                    (tx, err) => reject(err)
            )
        })
    })
}

export const deleteById = (id) => {

    return new Promise ((resolve, reject) => {

        database.transaction((transaction) => {
            transaction.executeSql(
                `DELETE FROM players WHERE id = ?`, [id],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })
}
