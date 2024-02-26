export class ccimsloginpage{
    constructor(username,password){
        this.name = username;
        this.pass = password;
    }

   login(){
        cy.get('.form-control').eq(0).type(this.name);   
        cy.get('.form-control').eq(1).type(this.pass);
        cy.get('.btn').click();
    }
}
