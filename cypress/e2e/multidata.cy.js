///<reference types = 'cypress'/>

// Case:1(import data)
import multipledata from "../fixtures/multipledata.json"
describe('fixture using import', () => {
    multipledata.forEach((user) =>{
    it('user.case', () => {
        cy.visit('https://ccimsinternal.infodev.com.np/#/auth/login');
        cy.get('.form-control').eq(0).type(user.username);
        cy.get('.form-control').eq(1).type(user.password);
        cy.get('.btn').click();
        cy.get(user.locator).should('contain', user.outcome);

        
    });
})
});

// Case 2: import data using cy fixture
it('Login', () => {
        cy.visit('https://ccimsinternal.infodev.com.np/#/auth/login')    
        cy.fixture('multipledata').then(case2 => {
        case2.forEach((case2) =>{       
        cy.get('.form-control').eq(0).type(case2.username);
        cy.get('.form-control').eq(1).type(case2.password);
        cy.get('.btn').click();
    })          
    })
    
});


// case : csv
const csv = require('neat-csv');

describe('dynamic', () => {
    it('dynamic', () => {
        cy.fixture('datacsv.csv').then(csv).then((data) => {
            data.forEach ((userdata) => {
            cy.visit('https://ccimsinternal.infodev.com.np/#/auth/login')
            cy.get('.form-control').eq(0).type(userdata.username);
            cy.get('.form-control').eq(1).type(userdata.password);
            cy.get('.btn').eq(0).click({force:true});
            cy.reload();
            
        })
        });
    });
});

