export interface User {
    id: string;
    username: string;
    password: string;
}

const users: User[] = [];

export async function findUserByUsername (username: string): Promise<User | undefined> {
    return users.find(user => user.username === username );
}

export async function createUser(id: string, username: string, password: string): Promise<User> {
   const user: User = {id, username, password};
   users.push(user);
   return user;
}