///<reference types ="Cypress" />
// const url = "http://172.31.1.13:1902/"

//within
it.only('Examples of within', () => {
    // cy.visit(url);
    cy.visit(Cypress.env('stag_url'));
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

    // wait
    cy.intercept("GET",'**/Portal/CustomerRegistrationRequest/**').as('waitPage')
    cy.wait('@waitPage')

    // drop down-- select
    cy.get('#MaritalStatusId').select('UnMarried');

    //file upload
    cy.get(':nth-child(3) > #contact-tab').click();
    cy.get('#NomineeExists').check({force:true});
    cy.wait(5000);
    cy.get('#NomineeFilesDoc').eq(0).selectFile('cypress/fixtures/tt.png',{force:true});
    
// attach file
    cy.visit(Cypress.env('drg_url'));
    cy.get("#file-upload").attachFile("/tt.png") 

    // drag and drop
    cy.visit(Cypress.env('drg_url'));
    cy.get("#drag-drop-upload").attachFile("/test.avif", { subjectType: 'drag-n-drop' })


});
        