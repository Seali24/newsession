///<reference types = 'cypress'/>
import { ccimsloginpage } from "./loginpom/login";

describe('ccims', () => {
    it('case', () => {
        cy.visit('https://ccimsinternal.infodev.com.np/');
        const forlogin = new ccimsloginpage('mohan','Test@123');
        forlogin.login();
    });
});

// ///<reference types = 'cypress'/>

// import { loginpage } from "./loginpom/login";


// describe('ccims', () => {
    
//     it('case', () => {
//         cy.visit('https://ccimsinternal.infodev.com.np/');
//         const username = new loginpage('mohan', 'Test@123')
//         username.UsernameOperator();
//     });
// });