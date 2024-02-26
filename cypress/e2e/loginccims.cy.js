///<reference types = 'cypress'/>
import { ccimsloginpage } from "./loginpom/login";

describe('ccims', () => {
    it('case', () => {
        cy.visit('https://ccimsinternal.infodev.com.np/');
        const forlogin = new ccimsloginpage('mohan','Test@123');
        forlogin.login();
    });
});
