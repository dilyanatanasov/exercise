import express = require("express")
import {Application, Request, Response} from "express";
import {User} from "./types/User";
import {LoginRequest} from "./types/LoginRequest";

const app: Application = express();

app.get("/user", (req: Request, res: Response) => {
    let user: User = {
        id: 1,
        password: "1234",
        username: "dido"
    }
    res.send(user)
})

app.get("/login", (req: Request, res: Response) => {
    const loginRequest: LoginRequest = req.query;
    if (!loginRequest.username || !loginRequest.password) {
        res.send({
            status: 400,
            message: "Username or Password have not been provided"
        })
    }

    res.send({
        status: 200,
        message: "Logged in successfully"
    })
})

app.listen(8080, () => {
    console.log("Connected")
})
