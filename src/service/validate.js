
class ValidateField {
    constructor(name, surname, middleName, email, phone, ban = false){
        this.name = name;
        this.surname = surname;
        this.middleName = middleName;
        this.email = email;
        this.phone = phone;
        this.ban = ban;
    }

    validate(){
        // Email valid
        let EMAIL_REGEXP = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
        // Name valid, must not contain a number in the string
        let NAME_REGEXP = new RegExp(/[^a-zА-Я]/i);
        // Array for success or fail
        let statusValidate = []

        // Testing
        !NAME_REGEXP.test(this.name) && this.name.length >= 2 ? statusValidate.push('pass') : statusValidate.push('fail')
        !NAME_REGEXP.test(this.surname) && this.surname.length >= 2 ? statusValidate.push('pass') : statusValidate.push('fail')
        !NAME_REGEXP.test(this.middleName) && this.middleName.length >= 2 ? statusValidate.push('pass') : statusValidate.push('fail')
        EMAIL_REGEXP.test(this.email) ? statusValidate.push('pass') : statusValidate.push('fail');
        this.phone ? statusValidate.push('pass') : statusValidate.push('fail'); 
        this.ban === true || this.ban === false ? statusValidate.push('pass') : statusValidate.push('fail'); 

        return statusValidate;
    }
}

// const log = new ValidateField("ASDFASD", "123123", "a[spmf12", "patricklopez19@mmukmedia.net", "12312312", false)


export default ValidateField;
