"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const fs = require("fs-extra");
const APP_NAME = "my-app";
const TEMP_DIR = path.join(__dirname, "temp");

/**
 * Test suite for the whole project
 */
describe("-- generator-next --", function() {

    /**
     * Test suite for the default generator with some mocked prompt responses.
     */
    describe("-> generator-next:default", function() {

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
                .withArguments([APP_NAME])
                .withPrompts(mockedPrompts)
                .withOptions({"skipInstall": true});
        }

        /**
         * Clear the contents of the test/temp/my-app directory
         */
        function cleanUp(callback) {
            fs.emptyDir(path.join(TEMP_DIR, APP_NAME), callback);
        }

        afterEach(function(done) {
            cleanUp(done);
        });

        /**
         * Checks if all files were generated.
         */
        describe("Checking file generation", function() {

            this.timeout(5000);

            /**
             * Execute generator and assert that the provided file was generated
             * @param relFilePath the file's relative path which should be checked for.
             * @returns {Promise} Resolves if file was found, otherwise rejects with stack trace.
             */
            function wrapAssertFile(relFilePath) {
                return generateNExT(defaultPrompts).then((dir) => assert.file(path.join(dir, APP_NAME, relFilePath)));
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
        describe("Checking file content", function() {

            this.timeout(5000);

            /**
             * Assert some regex content for the file at the provided relative path
             * @param relFilePath The file's relative path to match with the regex.
             * @param regexToExpect The regex to match with
             * @returns {Promise} Resolves if the regex matches, rejects with the stack otherwise.
             */
            function wrapAssertFileContent(relFilePath, regexToExpect) {
                return generateNExT(defaultPrompts).then((dir) =>
                    assert.fileContent(path.join(dir, APP_NAME, relFilePath), regexToExpect));
            }

            it("should have set author name", () =>
                wrapAssertFileContent("package.json", new RegExp(defaultPrompts.name)));
        });
    });
});
