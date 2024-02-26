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

// export class loginpage {
//     constructor (username,password){
//         this.user = username;
//         this.password = password;
//     }

//     UsernameOperator(){
//         cy.get('.form-control').eq(0).type(this.user);   
//         cy.get('.form-control').eq(1).type(this.password);
//         cy.get('.btn').click();
//     }

  
//   }