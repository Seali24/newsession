// it('synchasynch', () => {
//     cy.visit("https://ams.infodev.com.np/#/login")
//     cy.get('.text-primary').then((letsCheck) => {
//     expect(letsCheck).to.have.text('Advertisement Board')
//     expect(letsCheck).exist
//     expect(letsCheck.text().length).to.be.greaterThan(0);
//     expect(letsCheck.text().length).to.be.eq(19);
//     // username
//     cy.get('.form-group > .form-control').type('admin')
//     .should('have.value','admin');
//     // password
//     cy.get('.input-group > .form-control').then((passwordcheck)=>{
//         if (passwordcheck.hasClass('form-control')){
//             console.log("Class is present")
//             } else{
//             console.log("class is missing")
//             }
//             expect(passwordcheck).exist
//             expect(passwordcheck).to.have.class("form-control")
//     }).type('Admin@123');
//     // submit
//     cy.get('.btn').click();

//     });

    
// });


// it('get', () => {
//     cy.request({
//         method:"GET",
//         url:'https://reqres.in/api/users?page=2'})
//         .then((response)=>{
//         expect(response.status).to.eq(200)
//         expect(response.body.data[0].id).to.eq(7)
//         expect(response.body.data[0].first_name).to.eq('Michael');
//         })
// });

//fifth
// it.only('post', () => {
//     cy.request({
//         method:'POST',
//         url:'https://reqres.in/api/users',
//     body: {
//         name: "morpheus",
//         job: "leader"
//     }
//     }).then((response) => {
//     expect(response.status).to.eq(201)
// })
// });
let pricetage = "cost"
it('post ', () => {
    cy.request({
        method: "POST",
        url: "https://api.demoblaze.com/login",
        body: {
            username : "Shirish Mainali",
            password : "$hirish@1234"
        }
    

    }).then((response) => {
        expect(response.status).to.eq(200)
    })
});

it('get after post ', () => {
    cy.request({
        method : "GET",
        url : "https://api.demoblaze.com/entries"
    }).then((response) =>{
       Cypress.env('cost',response.body.Items.price)
       const pricetag = Cypress.env('cost')
    })
});


it.only(' get  ', () => {
    const pricetag = Cypress.env('cost')
    cy.request({
        method : "GET",
        url : "https://api.demoblaze.com/entries"
    }).then((response) => {
        expect(response.body.Items[1].price).to.eq(820);
    })
});
