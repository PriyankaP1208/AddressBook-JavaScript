const prompt  = require ('prompt-sync')();
class EmployeePayrollData{
    //constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.emailId = params[7];
        
    }

    //getter and setter
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName)){
            this._firstName = firstName;
        }
        else throw 'Name is incorrect: '+ firstName;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName)){
            this._lastName = lastName;
        }
        else throw 'Name is incorrect: '+ lastName;
    }

    get address(){
        return this._address;
    }
    set address(address){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,} [A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(address)){
            this._address = address;
        }
        else throw 'address is incorrect: '+ address;
    }

    get city(){
        return this._city;
    }
    set city(city){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(city)){
            this._city = city;
        }
        else throw 'city is incorrect: '+ city;
    }

    get state(){
        return this._state;
    }
    set state(state){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(state)){
            this._state = state;
        }
        else throw 'state is incorrect: '+ state;
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        let nameRegex = RegExp('[0-9]{3}[ ]?[0-9]{3}$');
        if(nameRegex.test(zip)){
            this._zip = zip;
        }
        else throw 'zip is incorrect: '+ zip;
    }

    get phoneNo(){
        return this._phoneNo;
    }
    set phoneNo(phoneNo){
        let nameRegex = RegExp('^[0-9]{2} [0-9]{10}$');
        if(nameRegex.test(phoneNo)){
            this._phoneNo = phoneNo;
        }
        else throw 'phone no is incorrect: '+ phoneNo;
    }

    get emailId(){
        return this._emailId;
    }
    set emailId(emailId){
        let nameRegex = RegExp('^[a-z]+[-+._]?[a-z]+@[a-z]+[.][a-z]{2,}[.]?([a-z]{2,})?$');
        if(nameRegex.test(emailId)){
            this._emailId = emailId;
        }
        else throw 'email Id is incorrect: '+ emailId;
    }

  //toString
    toString(){
        return "First Name = "+this.firstName +", Last Name = " + this.lastName +",address = "+this.address
                +",city = "+this.city +", state =" + this.state +", zip =" + this.zip
                +", phone no =" + this.phoneNo +", Mail id =" + this.emailId;
    }
}
function createContact() {
    var array1 = new Array();
     //console.log()
     try {
    let fName = prompt('Enter the first name:');
    let lName = prompt('Enter the last name:');
    let address = prompt('Enter the address:');
    let city = prompt('Enter the city:');
    let state = prompt('Enter the state:');
    let zip = prompt('Enter the zipcode:');
    let phoneNumber = prompt('Enter the phone number:');
    let email = prompt('Enter the email:');

    let contact = new EmployeePayrollData(fName, lName, address, city, state, zip, phoneNumber, email);
   // let contact = new EmployeePayrollData("Priyanka", "CSE", 30000);
    array1.push(contact);
    console.log(contact.toString());
    console.log(array1);
    }catch(e)
    {
        console.log(e);
    }
}
createContact();