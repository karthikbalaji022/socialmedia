export function validate(username,email,phone,password,confirmpassowrd){
    let err=[];
    validateUsername(username).forEach(item=>err.push(item));
    validateEmail(email).forEach(item=>err.push(item));
    if(phone.length!==10)
        err.push("enter valid phone number");
    passwordValidate(password).forEach(item=>err.push(item));
    if(password!==confirmpassowrd)
        err.push("passwords dont match");
    return err;
}


export function passwordValidate(pass){
    let err=[];
    if(pass.length<8)
    {
        err.push("Password length must be greater than 8 characters.");
    }
    if(!(/[a-z]/.test(pass))){
        err.push("Password must contain atleast one character");
    }
    if(!/[A-Z]/.test(pass)){
        err.push("Password must contain atleast one capital letter.");
    }
    if(!(/[0-9]/.test(pass)))
    {
        err.push("Password must contain atleast one number.");
    }
    if(!(/[!@#\$%^&*]/.test(pass)))
    {
        err.push("Password must contain atleast one special character.");
    }
    return err;
}

export function validateEmail(email){
    if(email.includes("@") && email.includes("."))
    return [];
    return ["Email is invalid"]
}

export function validateUsername(username){
    let err=[];
    let mock=["kb022","bk022"];
    if(username.length<4)
        err.push("Username length must be greater than equal to 4.");
        console.log(

        )
    let register=window.location.pathname.split('/').includes("register");
    if(register && mock.includes(username.toLowerCase()))
        err.push("Username must be unique!");
    return err;
}