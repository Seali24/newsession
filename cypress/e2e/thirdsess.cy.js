///<reference types ="Cypress" />
const url = "http://172.31.1.13:1902/"

//within
it.only('Examples of within', () => {
    cy.visit(url);
    cy.get('.login-form').eq(0).within(() => {
    cy.get(".form-group").eq(0).should("exist")
    cy.get(".form-control").eq(1).should("exist");
})
    cy.get('#Username').type('O045719', {delay:500});
    cy.get('#Password').type('Pass@1234', {delay:500});
    cy.get('.btn').eq(0).click({ force: true });
    cy.wait(1000);
    cy.get(':nth-child(7) > .nav-link').click();
    cy.get('#IndexCreate').click({force:true});
    cy.wait(1000);



    // general information
    cy.get('#MaritalStatusId').select('UnMarried');
    cy.get('#NomineeFilesDoc').eq(0).selectFile('cypress/fixtures/ff.png',{force:true});
    


    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile("/tt.png") 

});
        