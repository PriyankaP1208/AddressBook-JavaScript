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

    toString() {
        return "First Name: " + this.firstNname + "Last Name: " + this.lastName + "Address: " + this.address
            + "City: " + this.city + "State: " + this.state + "Zip Code: " + this.zip 
            + "Phone Number: " + this.phoneNo + "Email Id: " + this.emailId;
    }
}

let addressBook = new AddressBook("Priya", "Patil", "Railway Society", "Solapur", "Maharashtra" , 413004, 9881208765, "priya@gmail.com");
console.log(addressBook);