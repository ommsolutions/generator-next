"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const ROOT_DIRECTORY = "project-root";
const APP_NAME = "appname";
const USER = "user";
const EMAIL = "email";
const PORT = "port";

class NExTGenerator extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.argument("appname", {type: String, required: true});
    }

    initializing() {
        this.log(yosay(
            "Welcome to the " + chalk.red("NExT") + " generator!"
        ));
    }

    prompting() {

        let prompts = [
            {
                type: "input",
                name: ROOT_DIRECTORY,
                message: "Enter root directory.",
                default: this.options.appname
            },
            {
                type: "input",
                name: USER,
                message: "Enter your name",
                default: this.user.git.name()
            }, {
                type: "input",
                name: EMAIL,
                message: "Enter your E-Mail",
                default: this.user.git.email()
            }, {
                type: "input",
                name: PORT,
                message: "Enter the port on which the server should run.",
                default: 1337
            }];

        return this.prompt(prompts)
            .then(function(props) {
                this.props = props;
            }.bind(this));
    }

    configuring() {
        this.log("Configuring ...");
        this.destinationRoot(this.props[ROOT_DIRECTORY]);
        this.config.set(this.props);
        this.config.set(APP_NAME, this.options.appname);
    }

    writing() {
        this.log("Writing files ...");
        this.fs.copyTpl(
            this.templatePath("package.json"),
            this.destinationPath("package.json"),
            {
                name: this.config.get(APP_NAME),
                username: this.config.get(USER),
                email: this.config.get(EMAIL)
            }
        );

        this.fs.copyTpl(
            this.templatePath("gitignore"),
            this.destinationPath(".gitignore")
        );

        this.fs.copyTpl(
            this.templatePath("gulpfile.js"),
            this.destinationPath("gulpfile.js")
        );

        this.fs.copyTpl(
            this.templatePath("README.md"),
            this.destinationPath("README.md"),
            {
                name: this.config.get(APP_NAME)
            }
        );

        this.fs.copyTpl(
            this.templatePath("tsconfig.json"),
            this.destinationPath("tsconfig.json")
        );

        this.fs.copyTpl(
            this.templatePath("tslint.json"),
            this.destinationPath("tslint.json")
        );

        this.fs.copyTpl(
            this.templatePath("src/server.ts"),
            this.destinationPath("src/server.ts"),
            {
                port: this.config.get(PORT)
            }
        );

        this.fs.copyTpl(
            this.templatePath("src/test.ts"),
            this.destinationPath("src/test.ts")
        );

        this.fs.copyTpl(
            this.templatePath("test/index.ts"),
            this.destinationPath("test/index.ts")
        );

    }

    install() {
        this.log("Installing dependencies, this could take a while ...");
        this.npmInstall();
    }

    end() {
        this.log("NExT scaffolding was generated");
        this.log("Below you'll find some things that are up to you:");
        this.log(" - Insert detailed information in package.json, e.g. description of project.");
        this.log(" - Replace the demo test functions with actual ones.");
        this.log("\nThanks for using the NExt Generator!");
        this.log("Feel free to star, fork and create issues on GitHub https://github.com/ommsolutions/generator-next ...");
    }
}
module.exports = NExTGenerator;
