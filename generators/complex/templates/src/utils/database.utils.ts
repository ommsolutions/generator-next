import * as mongoose from "mongoose";
import {MongooseThenable, connect} from "mongoose";

/**
 * Opens, closes connection to database ...
 * http://mongoosejs.com/docs/
 */
export class DatabaseUtils {

    public static connect(): MongooseThenable {
        (<any>mongoose).Promise = Promise;
        return connect("mongodb://127.0.0.1:27017/test");
    }

    public static disconnect(): MongooseThenable {
        return mongoose.disconnect();
    }
}
