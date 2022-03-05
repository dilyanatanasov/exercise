import {Request, Response} from "express";
import {User} from "../types/User";
import {LoginData} from "../types/LoginData";
import {UserModel} from "../models/UserModel";

export const getUsers = (request: Request, response: Response) => {
    let users = new UserModel().getUsers();
    response.send(users)
}

export const createUser = async (request: Request, response: Response) => {
    const user: User = request.body;

    if (!user.username) {
        return response.send({
            status: 400,
            message: "Username has not been provided"
        })
    }

    if (!user.password) {
        return response.send({
            status: 400,
            message: "Password has not been provided"
        })
    }
    const userModel = new UserModel();
    await userModel.updateUserList(user);

    response.send({
        status: 200,
        message: "User created successfully"
    })
}

export const login = (request: Request, response: Response) => {
    const loginData: LoginData = request.query;
    if (!loginData.username || !loginData.password) {
        return response.send({
            status: 400,
            message: "Username or Password not provided"
        })
    }

    response.send({
        status: 200,
        message: "Logged in successfully"
    })
}