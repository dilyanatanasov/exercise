import express = require("express");
import {Application, Request, Response} from "express";
import {User} from "./types/User";
import {LoginData} from "./types/LoginData";

const app: Application = express();

app.get("/users", (request: Request, response: Response) => {
    let users: User[] = [
        {
            id: 1,
            first_name: "Dilyan",
            password: "1234"
        },
        {
            id: 2,
            first_name: "Obreten",
            password: "1234"
        },
    ]
    response.send(users)
})

app.get("/login", (request: Request, response: Response) => {
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
})

app.listen(8080, () => {
    console.log("Connected")
})