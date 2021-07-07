const prompt = require('prompt-sync')();

class AddressBook {
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

let array1 = new Array();
let choice;
while(choice != 0)
{
    console.log("\n1.Add contacts\n 2.Display\n 3.Edit contacts\n 4.Delete contact\n 5.Count number of contact");
    choice = Number(prompt("Enter your choice:"));
    switch(choice)
    {
        case 1:
            createContact();
            break;
        case 2:
            display();
            break;
        case 3:
            editContacts();
            break;
        case 4:
            deleteContact();
            break;
        case 5:
            numberOfContact();
            break;
        default:
            console.log("Wrong choice.");   
    }
}

function  createContact() {
    try{
        let fName = prompt('Enter first name:');
        let lName = prompt('Enter last name:');
        let address = prompt('Enter address:');
        let city = prompt('Enter city:');
        let state = prompt('Enter state:');
        let zip = prompt('Enter zipcode:');
        let phoneNumber = prompt('Enter phone number:');
        let email = prompt('Enter email:');
        let contact = 0;
            
        contact = new AddressBook(fName, lName, address, city, state, zip, phoneNumber, email);
        array1.push(contact);
        console.log(contact.toString());
        console.log(array1);
    }catch(e)
    {
        console.log(e);
    }

}
    
function editContacts () {
    let fName = prompt ('Enter First name:');
    array1.find(contact => 
        { if(contact.firstName == fName)
            {
                console.log(contact.toString())
            
            let name = prompt("Enter what you want to update:");
        switch(name)
        {
            case "address":
                let address1 = prompt("Enter new address:");
                objIndex = array1.findIndex((obj => obj.firstName == fName));
                array1[objIndex].address = address1;
                break;
            case "city":
                let city1 = prompt("Enter new city name:");
                objIndex = array1.findIndex((obj => obj.firstName == fName));
                array1[objIndex].city = city1;
                break;
            case "state":
                let state1 = prompt("Enter new state:");
                objIndex = array1.findIndex((obj => obj.firstName == fName));
                array1[objIndex].state = state1;
                break;
            case "phoneNo":
                let phoneNo1 = prompt("Enter new phone number:");
                objIndex = array1.findIndex((obj => obj.firstName == fName));
                array1[objIndex].phoneNo = phoneNo1;
                break;
            case "zip":
                let zip1 = prompt("Enter new zip code:");
                objIndex = array1.findIndex((obj => obj.firstName == fName));
                array1[objIndex].zip = zip1;
                break;
            }
            console.log("Update Successfully!");
        }
        else{
            console.log("Contact is not existing");
        }
    })
}
    
function display()
{
    array1.forEach(contact => console.log(contact.toString()));
}

function deleteContact() {
    let name = prompt("Enter first name to delete contact:");
    let index = array1.findIndex(contact => (contact.firstName == name));
    if(index == -1)
        console.log("Name not found");
    else
        array1.splice(index, 1);
    console.log("Deleted successfuly!");
}

function numberOfContact() {
    console.log("Total number of contacts:" + array1.length);
}