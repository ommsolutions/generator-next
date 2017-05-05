import * as winston from "winston";

export const Logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)()
    ]
});
