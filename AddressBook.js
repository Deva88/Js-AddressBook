/* @Description -To create contact class inside class we have create properties and create constructor.
 * Inside the constructor as a parameter passing the instance variable
 *for the initializing the instances set value with the possition */

const prompt = require('prompt-sync')();
class Contact{
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

    /* @Description - To validate first name should start with captital character
     * To validate the name should have atleast 3 char
     * if name is not start with capital letter and if its not atleast 3 character its throw error
     * To used throw keyword for the invalid firstName */

    get firstName(){ return this._firstName}
    set firstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(firstName)) {
            this._firstName = firstName
        }
        else throw "Incorrect First Name"
    }

    /* @Description - To validate last name should start with captital character
     * To validate the name should have atleast 3 char
     * if name is not start with capital letter and if its not atleast 3 character its throw error
     * To used throw keyword for the invalid lastName */

    get lastName(){ return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(lastName)) {
            this._lastName = lastName
        }
        else throw "Incorrect Last Name"
    }

    /* @Description - to validate address should start with captital letters or small letters
     * to used throw keyword for the invalid address */

    get address(){ return this._address}
    set address(address){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(address)) {
            this._address = address
        }
        else throw "Incorrect Address"
    }

    /* @Description - to validate city should start with captital letters or small letters
     * to used throw keyword for the invalid city  */

    get city(){ return this._city}
    set city(city){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(city)) {
            this._city = city
        }
        else throw "Incorrect City"
    }

    /* @Description - to validate state should start with captital letters or small letters
     * to used throw keyword for the invalid state  */

    get state(){ return this._state}
    set state(state){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(state))
            this._state = state
        else throw "Incorrect State"
    }

     /* @Description - to validate zip  should start with numbers 
     * to used throw keyword for the invalid state  */

    get zip(){ return this._zip}
    set zip(zip){
        let pinRegex = RegExp("^[0-9]{3}\s{0,1}[0-9]{3}$")
        if(pinRegex.test(zip)){
            this._zip = zip
        }
        else throw "Incorrect Zip"
    }

    /* @Description - to validate phone number should start with numbers to allow max 10 digit
     * to used throw keyword for the invalid phone number  */

    get phoneNo(){ return this._phoneNo}
    set phoneNo(phoneNo){
        let regex = RegExp('[0-9]{2}\\s[0-9]{10}')
        if(regex.test(phoneNo)) {
            this._phoneNo = phoneNo
        }
        else throw "Incorrect Phone Number"
    }

    /* @Description - to validate email id  should start with small letter and have one numeric 
    * its should must have atleast one special character
    * to used throw keyword for the invalid emailId  */

    get email(){ return this._email}
    set email(email){
        let regex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(regex.test(email)) {
            this._email = email
        }
        else throw "Incorrect Email"
    }
    toString(){
        return "\n\nFirstName: " + this.firstName + "\nLastName: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city +
                "\nState: " + this.state + "\nZip: " + this.zip + "\nPhoneNO: " + this.phoneNo + "\nEmail: " + this.email;
    }
}

/* @Description - to create a new address book array and add new contacts  */

let contact1 = new Contact("Devendra", "Kumar", "Garkha", "Saran", "Bihar", 841311, "91 8123273639",  "deva@gmail.com")
let contact2 = new Contact("Abhi", "Kumar", "BTM", "Bangalore", "KA", 560076, "91 9739251118",  "abhi@gmail.com")
let contact3 = new Contact("Vikash", "Kumar", "Garkha", "Chapra", "Bihar", 123456, "91 1234567891",  "viksah@gmail.com")

let addressBookArray = new Array();

/* @Description- Check the Duplicate Entry of the same Person in Address Book */

function addContact(contact){
    let duplicateContact;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === contact.firstName && addressBookArray[i].lastName === contact.lastName){
            duplicateContact = addressBookArray[i]
        }
    }
    if(duplicateContact != null)
        console.log("Can't Add Contact. Dupicate Contact Found.")
    else
        addressBookArray.push(contact)
}
addContact(contact1)
addContact(contact2)
addContact(contact3)
addContact(contact4)

/* added new details for contact person using their name and edit */

function findContact(fname, lname){
    let contactToEdit;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === fname && addressBookArray[i].lastName === lname)
            contactToEdit = addressBookArray[i]
    }
    console.log(contactToEdit)

    if(contactToEdit == null)
        console.log("No Contact Found To Edit")
    else{
        let input = 1;
        while(input != 9){
            console.log("1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
            console.log("6. Edit ZipCode \n7. Edit Phone No \n8. Edit Email \n9. View Edited Details and EXIT")
            input = prompt("Enter Your Choice:  ")
            input = parseInt(input)
            switch (input) {
                case 1:
                    let fname = prompt("Enter the first Name: ")
                    contactToEdit.firstName = fname;
                    break
                case 2:
                    let lname = prompt("Enter the last Name: ")
                    contactToEdit.lastName = lname
                    break
                case 3:
                    let address_edit = prompt("Enter the address: ")
                    contactToEdit.address = address_edit
                    break
                case 4:
                    let city_edit = prompt("Enter the city: ")
                    contactToEdit.city = city_edit
                    break
                case 5:
                    let state_edit = prompt("Enter the State: ")
                    contactToEdit.state = state_edit
                    break
                case 6:
                    let zip_edit = prompt("Enter the zip: ")
                    contactToEdit.zip = zip_edit
                    break
                case 7:
                    let phone_edit = prompt("Enter the phone number: ")
                    contactToEdit.phoneNo = phone_edit
                    break
                case 8:
                    let mail_edit = prompt("Enter the email: ")
                    contactToEdit.email = mail_edit
                    break
                case 9:
                    console.log(contactToEdit);
                    break;
                default:
                    console.log("Wrong Input")
            }
        }
    }
}

/* slice method are used to delete contact by using person name  
* Find Number of Cotacts in Address Book
*/

function deleteContact(fname, lname){
    let contactToDelete;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === fname && addressBookArray[i].lastName === lname)
            contactToDelete = addressBookArray[i]
    }
    if(contactToDelete == null) {
        console.log("No Such Contact Exist in Address Book")
    }
    else {
        addressBookArray.pop(contactToDelete)
        console.log(addressBookArray.toString())
    }
}

console.log("---Type---\n1 to view the contact.\n2 to edit a contact\n3 to delete a contact\n4 to count the number of contacts")

let type = prompt("Enter your choice: ")
if (type == 1) {
    console.log(addressBookArray.toString())
}
else if (type == 2) {

    findContact(f_Name, l_Name);
}
else if (type == 3) {
    let f_Name = prompt("Enter the First Name:  ")
    let l_Name = prompt("Enter the Last Name:  ")
    deleteContact(f_Name, l_Name)
}
else if ( type == 4) {
    function count(counter){
        return counter + 1;
    }
    console.log("Total Number of Contacts: " + addressBookArray.reduce(count, 0))
    
}