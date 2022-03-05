import { promises } from "fs";
import {User} from "../types/User";

export class UserModel {
    public getNewId(users: User[]): number {
        return users[users.length - 1].id + 1
    }

    public async getUsers(): Promise<User[]> {
        const data = await promises.readFile(__dirname + "/db.json", "utf-8");
        return JSON.parse(data) as User[];
    }

    public async updateUserList(user: User): Promise<boolean> {
        const users = await this.getUsers();
        users.push({
            id: this.getNewId(users),
            username: user.username,
            password: user.password
        })
        await promises.writeFile(__dirname + "/db.json", JSON.stringify(users));
        return true;
    }
}