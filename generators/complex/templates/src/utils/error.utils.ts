import {Response} from "express";

export interface IError {
    statusCode: number;
    message: string;
}

export const METHOD_NOT_SUPPORTED: IError = {
    statusCode: 405,
    message: "The requested http method is not supported!"
};

export const UNEXPECTED_ERROR: IError = {
    statusCode: 500,
    message: "An unexpected error occurred!"
};

export class ErrorUtils {
    public static sendError(response: Response, error: IError = UNEXPECTED_ERROR): void {
        response.status(error.statusCode).send(error.message);
    }
}
