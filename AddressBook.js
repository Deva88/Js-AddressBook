/* @Description -To create contact class inside class we have create properties and create constructor.
 * Inside the constructor as a parameter passing the instance variable
 *for the initializing the instances set value with the possition */

class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    // Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

let contact1 = new Contact("Devendra", "Kumar", "Garkha", "Saran", "Bihar", 841311, 8123273639,  "dev@gmail.com")
console.log(contact1);