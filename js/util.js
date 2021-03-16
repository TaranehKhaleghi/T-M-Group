
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
                rangelength:[2, 10]
            },
            phoneNumber:{
                required: true,
                phoneAddCheck: true,
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
            customCheck1:{
                required:true
            }
        }, 
        messages:{
            firstName:{
                required: "first name is required",
                rangelength: "Length must be between 2 and 10 letters"
            },
            lastName:{
                required: "last name is required",
                rangelength:"Length must be between 2 and 10 letters"
            },
            phoneNumber:{
                required: "phone number is required",
                rangelength: "Please enter a valid phone number"
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
            customCheck1:{
                required:"is required"
            }
        }
    });
    return form.valid();
}

 jQuery.validator.addMethod("emailAddCheck",
    function(value, element)
    {
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    "Email is not valid");

jQuery.validator.addMethod("phoneAddCheck",
    function(value, element)
    {
        var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
        return this.optional(element) || regex.test(value);
     },
     "Phone is not valid");  

    //validate login form
    //=======================

function DoValidate_frmLogIn(){
var form = $("#LogInForm");
form.validate({
    rules: {
        userName: {
            required: true,
            emailCheck: true
        },
        loginPassword: {
            required: true
        }
    }, 
    messages:{
        userName: {
            required: "Email is required",
            //emailAddCheck: "Please enter a valid email address"
        },
        loginPassword: {
            required: "Enter password"
        }
    }
});
    return form.valid();
}

    jQuery.validator.addMethod("emailCheck",
    function(value, element)
    {
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    "Email is not valid");

