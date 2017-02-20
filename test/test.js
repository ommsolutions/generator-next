"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const fs = require("fs-extra");
const APPNAME = "temp";
const TEMP_DIR = path.join(__dirname, APPNAME);

/**
 * Test suite for the whole project
 */
describe("-- generator-next --", function () {

    /**
     * Test suite for the default generator with some mocked prompt responses.
     */
    describe("-> generator-next:default", function () {

        let defaultPrompts = {
            "user": "John Doe",
            "email": "john.doe@testmail.com"
        };

        /**
         * Execute the generator in the default temporary directory with the provided prompt responses.
         * @param mockedPrompts The responses to each of the generator's prompt.
         * @returns {Promise} Resolves when generator has finished with the directory the generator was
         * run in.
         */
        function generateNExT(mockedPrompts) {
            return helpers.run(require.resolve("../generators/app"), false)
                .inDir(TEMP_DIR)
                .withArguments([APPNAME])
                .withPrompts(mockedPrompts)
                .withOptions({"skipInstall": true});
        }

        /**
         * Clear the contents of the test/temp directory
         */
        function cleanUp() {
            try {
                fs.emptyDirSync(TEMP_DIR);
            } catch (e) {
                console.log("error", e);
                process.exit(1);
            }
        }

        /**
         * Sets mocha timeout for each test to 15 seconds.
         */
        beforeEach(function () {
            this.timeout(15000);
        });

        afterEach(function () {
            cleanUp();
        });

        /**
         * Checks if all files were generated.
         */
        describe("Checking file generation", function () {

            /**
             * Execute generator and assert that the provided file was generated
             * @param relFilePath the file's relative path which should be checked for.
             * @returns {Promise} Resolves if file was found, otherwise rejects with stack trace.
             */
            function wrapAssertFile(relFilePath) {
                return generateNExT(defaultPrompts).then((dir) => assert.file(path.join(dir, relFilePath)));
            }

            it("should have generated package.json", () => wrapAssertFile("package.json"));
            it("should have generated src/server.ts", () => wrapAssertFile(path.join("src", "server.ts")));
            it("should have generated src/test.ts", () => wrapAssertFile(path.join("src", "test.ts")));
            it("should have generated test/index.ts", () => wrapAssertFile(path.join("test", "index.ts")));
            it("should have generated gulpfile.js", () => wrapAssertFile("gulpfile.js"));
            it("should have generated tsconfig.json", () => wrapAssertFile("tsconfig.json"));
            it("should have generated tslint.json", () => wrapAssertFile("tslint.json"));
            it("should have generated .gitignore", () => wrapAssertFile(".gitignore"));
            it("should have generated README.md", () => wrapAssertFile("README.md"));
        });

        /**
         * Checks if the files' contents are correct.
         */
        describe("Checking file content", function () {

            /**
             * Assert some regex content for the file at the provided relative path
             * @param relFilePath The file's relative path to match with the regex.
             * @param regexToExpect The regex to match with
             * @returns {Promise} Resolves if the regex matches, rejects with the stack otherwise.
             */
            function wrapAssertFileContent(relFilePath, regexToExpect) {
                return generateNExT(defaultPrompts).then((dir) =>
                    assert.fileContent(path.join(dir, relFilePath), regexToExpect));
            }

            it("should have set author name", () =>
                wrapAssertFileContent("package.json", new RegExp(defaultPrompts.name)));
        });
    });
});
