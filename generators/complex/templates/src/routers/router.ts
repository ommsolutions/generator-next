import {Express} from "express";
import {BaseRouter} from "./base.router";
import {UserRouter} from "./user.router";
import {RequestHandler} from "./request-handler";
import {Logger} from "../utils";

/**
 * Setup all endpoints of your API.
 * For more information, check out the express documentation: http://expressjs.com/en/guide/routing.html
 */
export class Router {

    /**
     *
     * @param app
     */
    public static setupRoutes(app: Express): void {
        Router.addHandler(app, "/", new BaseRouter());
        Router.addHandler(app, "/users/:id*?/", new UserRouter());
    }

    /**
     *
     * @param app
     * @param route
     * @param handler
     */
    private static addHandler<T extends RequestHandler>(app: Express, route: string, handler: T): void {
        Logger.log("info", "Adding router for path: " + route);
        app.route(route).all(handler.handleRequest.bind(handler));
    }
}