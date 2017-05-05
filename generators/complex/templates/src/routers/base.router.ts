import {Request, Response} from "express";
import {RequestHandler} from "./request-handler";

export class BaseRouter extends RequestHandler {

    public handleGet(request: Request, response: Response): void {
        response.status(200).send("Server running ...");
    }
}