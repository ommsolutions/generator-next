import {Request, Response} from "express";
import {ErrorUtils, METHOD_NOT_SUPPORTED} from "../utils";

export class RequestHandler {

    public handleRequest(request: Request, response: Response): void {
        console.log("incoming!", request.method);
        switch (request.method) {
            case "GET":
                this.handleGet(request, response);
                break;
            case "POST":
                this.handlePost(request, response);
                break;
            case "DELETE":
                this.handleDelete(request, response);
                break;
            case "PUT":
                this.handlePut(request, response);
                break;
            case "PATCH":
                this.handlePatch(request, response);
                break;
            default:
                ErrorUtils.sendError(response, METHOD_NOT_SUPPORTED);
        }
    }

    public handleGet(request: Request, response: Response): void {
        ErrorUtils.sendError(response, METHOD_NOT_SUPPORTED);
    };

    public handlePost(request: Request, response: Response): void {
        ErrorUtils.sendError(response, METHOD_NOT_SUPPORTED);
    };

    public handleDelete(request: Request, response: Response): void {
        ErrorUtils.sendError(response, METHOD_NOT_SUPPORTED);
    };

    public handlePut(request: Request, response: Response): void {
        ErrorUtils.sendError(response, METHOD_NOT_SUPPORTED);
    };

    public handlePatch(request: Request, response: Response): void {
        ErrorUtils.sendError(response, METHOD_NOT_SUPPORTED);
    };
}
