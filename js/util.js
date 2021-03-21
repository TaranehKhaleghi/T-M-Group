
//validate register form
//=======================
function DoValidate_frmAdd() {
    var form = $("#RegisterForm");
    form.validate({
        rules: {
            firstName: {
                required: true,
                rangelength: [2, 10]
            },
            lastName: {
                required: true,
                rangelength: [2, 10]
            },
            phoneNumber: {
                required: true,
                phoneAddCheck: true
            },
            userEmail: {
                required: true,
                emailAddCheck: true
            },
            city: {
                required: true,
                rangelength: [1, 20]
            },
            addressDetails: {
                required: true
            },
            password: {
                required: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            customCheck1: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "first name is required",
                rangelength: "Length must be between 2 and 10 letters"
            },
            lastName: {
                required: "last name is required",
                rangelength: "Length must be between 2 and 10 letters"
            },
            phoneNumber: {
                required: "phone number is required",
                phoneAddCheck: "Please enter a valid phone number"
            },
            userEmail: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            city: {
                required: "city is required"
            },
            addressDetails: {
                required: "address is required"
            },
            password: {
                required: "Enter password"
            },
            confirmPassword: {
                required: "Confirm password",
                equalTo: "Password is not match"
            },
            customCheck1: {
                required: "is required"
            }
        }
    });
    return form.valid();
}

//validate sign in form
//=======================
function DoValidate_frmLogIn() {
    var form = $("#LogInForm");
    form.validate({
        rules: {
            userName: {
                required: true,
                emailAddCheck: true
            },
            loginPassword: {
                required: true
            }
        },
        messages: {
            userName: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            loginPassword: {
                required: "Enter password"
            }
        }
    });
    return form.valid();
}

    //validate business info form
//=======================
function DoValidate_frmBusiness() {
    var form = $("#BusinessForm");
    form.validate({
        rules: {
            companyName: {
                required: true,    
                rangelength: [2, 20]           
            },
            companyUrl: {
                url: true
            },
            bnNumber:{
                required:true
            },
            cFirstName: {
                required: true,    
                rangelength: [2, 20]           
            },
            cLastName: {
                required: true,    
                rangelength: [2, 20]           
            },
            cPhoneNumber:{
                required: true,
                phoneAddCheck: true
            },
            contactEmail:{
                required: true,
                emailAddCheck: true
            },
            contactCity:{
                required: true
            },
            contactCountry:{
                required: true
            },
            cAddressDetails:{
                required:true
            },
            cPostalCode:{
                required: true
            }
        },
        messages: {
            companyName: {
                required: "company name is required"              
            },
            companyUrl: {
                url: "Please enter a valid url"
            },
            bnNumber:{
                required: "Business number is required"
            },
            cFirstName: {
                required: "contact first name is required"
            },
            cLastName: {
                required: "contact first name is required"
            },
            cPhoneNumber:{
                required: "phone number is required",
                phoneAddCheck: "Please enter a valid phone number"
            },
            contactEmail: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            contactCity:{
                required: "city is required"               
            },
            contactCountry:{
                required: "country is required" 
            },
            cAddressDetails:{
                required: "address is required"
            },
            cPostalCode:{
                required: "postal/zip code is required"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("emailAddCheck",
    function (value, element) {
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    "Email is not valid");

jQuery.validator.addMethod("phoneAddCheck",
    function (value, element) {
        var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return this.optional(element) || regex.test(value);
    },
    "Phone is not valid");




