import {IUser, User} from "../models/user";

/**
 * Provides all business logic regarding users.
 */
export class UserService {

    /**
     * Get all users
     */
    public static getUsers(): Promise<IUser[]> {
        return User.find().exec();
    }

    /**
     * Get user by provided id.
     * @param id The requested user's id.
     */
    public static getUserById(id: string): Promise<IUser> {
        return User.findById(id).exec();
    }

    /**
     * Persist the provided user in the database.
     * @param user The user object to persist
     */
    public static createUser(user: IUser): Promise<IUser> {
        return User.create(user);
    }
}
