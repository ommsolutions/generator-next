import * as express from "express";
import * as winston from "winston";
import {json} from "body-parser";
import * as morgan from "morgan";
import {Express, Request, Response} from "express";

const PORT: number = <%= port %>;

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

    private app: Express;

    constructor() {
        this.app = express();
        this.app.use(json());
        this.app.use(morgan("combined"));
        this.setupRoutes();
        this.app.listen(PORT, () => {
            winston.log("info", "--> Server successfully started at port %d", PORT);
        });
    }

    /**
     * Setup all endpoints of your API. You can extend this method or if there are many different routes,
     * it might be better to move this to a separate class.
     */
    private setupRoutes(): void {
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).send("Server running ...");
        });
    }

}
new Server();
