
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
<<<<<<< HEAD
                rangelength:[2, 10]
            },
            phoneNumber:{
=======
                rangelength: [2, 10]
            },
            phoneNumber: {
>>>>>>> 071acf74c14b893df12bbc1d9d9fc7dd4511d508
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
<<<<<<< HEAD
            customCheck1:{
                required:true
            }
        }, 
        messages:{
            firstName:{
=======
            customCheck1: {
                required: true
            }
        },
        messages: {
            firstName: {
>>>>>>> 071acf74c14b893df12bbc1d9d9fc7dd4511d508
                required: "first name is required",
                rangelength: "Length must be between 2 and 10 letters"
            },
<<<<<<< HEAD
            lastName:{
                required: "first name is required",
                rangelength:"Length must be at least 2 letters"
            },
            phoneNumber:{
=======
            lastName: {
                required: "last name is required",
                rangelength: "Length must be between 2 and 10 letters"
            },
            phoneNumber: {
>>>>>>> 071acf74c14b893df12bbc1d9d9fc7dd4511d508
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
<<<<<<< HEAD
            customeCheck1:{
                required:"is required"
=======
            customeCheck1: {
                required: "is required"
>>>>>>> 071acf74c14b893df12bbc1d9d9fc7dd4511d508
            }
        }
    });
    return form.valid();
}

<<<<<<< HEAD
 jQuery.validator.addMethod("emailAddCheck",
    function(value, element)
    {
=======
jQuery.validator.addMethod("emailAddCheck",
    function (value, element) {
>>>>>>> 071acf74c14b893df12bbc1d9d9fc7dd4511d508
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    "Email is not valid");

jQuery.validator.addMethod("phoneAddCheck",
<<<<<<< HEAD
    function(value, element)
    {
        var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
        return this.optional(element) || regex.test(value);
     },
     "Phone Add Checker");  
=======
    function validatePhone(phoneNumber) {
        var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return phoneNumberPattern.test(phoneNumber);
    },
    "Phone is not valid");
>>>>>>> 071acf74c14b893df12bbc1d9d9fc7dd4511d508

// jQuery.validator.addMethod("candidateCheck",
//     function(value, element)
//     {
//         return this.optional(element) && value !== "";
//     },
//     "Candidate Checker");
