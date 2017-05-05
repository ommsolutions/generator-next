import {UserService} from "../src/services";
import {DatabaseUtils} from "../src/utils";
import {expect} from "chai";

describe("User service test", () => {

    before("connect to database", (done) => {
        DatabaseUtils.connect()
            .then(done)
            .catch(err => done(err));
    });

    it("Should create user and find it by id", () => {
        UserService.createUser({firstName: "hans", lastName: "wurst", age: 12})
            .then((user: IUser) => {
                console.log("---> User received", user);
                expect(user.firstName).to.eq("hans");
            })
            .catch((err: any) => console.log(err));
    });

    after("close connection to database", (done) => {
        DatabaseUtils
    })
});
