# cypress-allure-plugin-issue-1
Tests within the same script are marked as skipped after a domain change.

If cy.visit() is executed on multiple "new" domain within the same test script, the Cypress Runner is restarted.
All test cases that were executed before each restart are marked skipped in the generated json files and report.
In this example, all but the last test case are marked as skipped dispite being run successfully.

Steps to reproduce:

In the root folder of the project execute the following commands:
- ```npm install```
- ```./node_modules/.bin/cypress open```
- ```npm run allure:generate```
- ```npm run allure:open```