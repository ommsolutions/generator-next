import * as express from "express";
import * as morgan from "morgan";
import {json} from "body-parser";
import {Logger, DatabaseUtils} from "./utils";
import {Router} from "./routers";

const PORT: number = <%= port %>;

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

    // startup process, setup all application parts (e.g. database, routes, ...)
    public static start(port: number) {
        let app = express();
        app.use(json());
        app.use(morgan("combined"));

        Router.setupRoutes(app);
        DatabaseUtils.connect()
            .then(() => Logger.log("info", "Successfully connected to database!"))
            .catch((err: any) => Logger.log("error", "Error when connecting to database occurred: \n", err));

        // Start server on specified port
        app.listen(port, () => Logger.log("info", "--> Server successfully started at port %d", PORT));
    }
}

// Start the server
Server.start(PORT);
