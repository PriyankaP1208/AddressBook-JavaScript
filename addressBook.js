class AddressBook {
    constructor (...params) {
        this.firstNname = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.emailId = params[7];
    }

    get firstNname()
    {
        return this._firstNname;
    }

    set firstNname(firstNname)
    {
        let fnameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(fnameRegex.test(firstNname))
            console.log("Valid First Name!")
        else
            console.log("Invalid First Name!");
    }

    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastNname)
    {
        let lnameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(lnameRegex.test(lastNname))
            console.log("Valid Last Name!")
        else
            console.log("Invalid Last Name!");
    }

    get address()
    {
        return this._address;
    }

    set address(address)
    {
        let addressRegex = RegExp('^[A-Z]{1}[a-z]{2,} [A-Z]{1}[a-z]{2,}$');
        if(addressRegex.test(address))
            console.log("Valid Address!")
        else
            console.log("Invalid Address!");
    }

    get city()
    {
        return this._city;
    }

    set city(city)
    {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(cityRegex.test(city))
            console.log("Valid City Name!")
        else
            console.log("Invalid City Name!");
    }

    get state()
    {
        return this._state;
    }

    set state(state)
    {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(stateRegex.test(state))
            console.log("Valid State Name!")
        else
            console.log("Invalid State Name!");
    }

    get zip()
    {
        return this._zip;
    }

    set zip(zip)
    {
        let zipRegex = RegExp('[0-9]{3}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            console.log("Valid Zip Code!")
        else
            console.log("Invalid Zip Code!");
    }
    
    get phoneNo()
    {
        return this._phoneNo;
    }

    set phoneNo(phoneNo)
    {
        let phoneNoRegex = RegExp('^[0-9]{2} [0-9]{10}$');
        if(phoneNoRegex.test(phoneNo))
            console.log("Valid Phone number!")
        else
            console.log("Invalid Phone number!");
    }

    get emailId()
    {
        return this._emailId;
    }

    set emailId(emailId)
    {
        let emailIdRegex = RegExp('^[a-z]+[-+._]?[a-z]+@[a-z]+[.][a-z]{2,}[.]?([a-z]{2,})?$');
        if(emailIdRegex.test(emailId))
            console.log("Valid Mail id!")
        else
            console.log("Invalid Mail id!");
    }

    toString() {
        return "First Name: " + this.firstNname + "Last Name: " + this.lastName + "Address: " + this.address
            + "City: " + this.city + "State: " + this.state + "Zip Code: " + this.zip 
            + "Phone Number: " + this.phoneNo + "Email Id: " + this.emailId;
    }
}

try{ 
    let addressBook = new AddressBook("Priya", "Patil", "Railway Society", "Solapur", "Maharashtra" , 413004, "91 9881208765", "priya@gmail.com");
    console.log(addressBook.toString);
}catch(e)
{
    console.log(e);
}

try {
    let addressBook1 = new AddressBook("priya", "patil", "rail", "sol", "mah", 423, "9884532576", "priya@com");
    console.log(addressBook1.toString);
}catch(e)
{
    console.log(e);
}

 
    
    

