import Dexie from 'dexie';

import { UserType } from '../types';

const USERS_TABLE_NAME = 'users';

const db = new Dexie('WizardFormAppDB');

db.version(1).stores({
  users: '++id',
});

db.open();

export default db;

export const getUsers = async () => await db.table(USERS_TABLE_NAME).toArray();

export const addUsersBulk = (users: UserType[]) => {
  return db
    .table(USERS_TABLE_NAME)
    .bulkAdd(users)
    .then(() => getUsers());
};

export const deleteAllUsers = async () => db.table(USERS_TABLE_NAME).clear();
