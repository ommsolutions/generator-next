import {Request, Response} from "express";
import {RequestHandler} from "./request-handler";
import {IUser} from "../models/user";
import {UserService} from "../services";
import {ErrorUtils} from "../utils";

export class UserRouter extends RequestHandler {

    public handleGet(request: Request, response: Response): void {
        let id: string = request.params.id;
        if (id) {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.getUserById(request.params.id, response);
            } else {
                response.send(404, "resource not found");
            }
        } else {
            this.getUsers(response);
        }
    }

    public handlePost(request: Request, response: Response): void {
        UserService.createUser(request.body).then(
            (user: IUser) => response.status(200).send(user),
            (err: any) => ErrorUtils.sendError(response, {statusCode: 500, message: err})
        );
    }

    private getUsers(response: Response): void {
        UserService.getUsers().then(
            (users: IUser[]) => response.status(200).send(users),
            (err: any) => ErrorUtils.sendError(response, {statusCode: 500, message: err})
        );
    }

    private getUserById(id: string, response: Response): void {
        UserService.getUserById(id).then(
            (user: IUser) => response.status(200).send(user),
            (err: any) => ErrorUtils.sendError(response, {statusCode: 500, message: err})
        );
    }
}