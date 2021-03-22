function RegisterSupplier() {
        console.info("Entering RegisterSupplier");
        if (DoValidate_frmAdd()) {
                console.info("Supplier Registration Form Validation is successful.");
                var accountType = $("input[name='accountType']:checked").val();
                var firstName = $("#firstName").val();
                var lastName = $("#lastName").val();
                var countryCode = $("#countryCode option:selected").val();
                var phoneNumber = $("#phoneNumber").val();
                var userEmail = $("#userEmail").val();
                var city = $("#city").val();
                var country = $("#country").val();
                var addressDetails = $("#addressDetails").val();
                var password = $("#password").val();

                var options = [];
                options = [accountType, firstName, lastName, countryCode, phoneNumber, userEmail, city, country, addressDetails, password];

                SignupSupplier.supplierInsert(options);

        }
        else {
                console.error("Registration form Validation failed.");
        }
}

function LogInSupplier() {
        console.info("Entering LogInSupplier");

        if (DoValidate_frmLogIn()) {
                console.info("Supplier Login Form Validation is successful.");
                var userName = $("#userName").val().trim();
                var loginPassword = $("#loginPassword").val().trim();
                var registered = 0;

                function callback(tx, results) {
                        console.info("Entering to callback");

                        if (results.rows.length === 0) {
                                window.alert("You have not registered yet!");
                                console.info("Length is zero");
                        }
                        else {
                                console.info("Length is not zero");
                                for (var i = 0; i < results.rows.length; i++) {
                                        var row = results.rows[i];
                                        if (row['userEmail'].trim() === userName && row['password'].trim() === loginPassword) {
                                                registered++;

                                                localStorage.setItem("accountType", row['accountType']);
                                                localStorage.setItem("firstName", row['firstName']);
                                                localStorage.setItem("lastName", row['lastName']);
                                                localStorage.setItem("countryCode", row['countryCode']);
                                                localStorage.setItem("phoneNumber", row['phoneNumber']);
                                                localStorage.setItem("userEmail", row['userEmail']);
                                                localStorage.setItem("city", row['city']);
                                                localStorage.setItem("country", row['country']);
                                                localStorage.setItem("addressDetails", row['addressDetails']);
                                        }
                                }
                                if (registered === 0) {
                                        window.alert("You have not registered yet!");
                                }
                        }
                }
                SignInSupplier.selectAll(callback);
        }
        else {
                console.error("Log in form Validation failed.");
        }
}

function RegisterManufacturer() {
        console.info("Entering Business Registration");

        if (DoValidate_frmManufacturer()) {
                console.info("Business Registration Form Validation is successful.");

                var accountType = $("input[name='accountType']:checked").val();
                var firstName = $("#firstName").val();
                var lastName = $("#lastName").val();
                var companyName = $("#companyName").val();
                var companyUrl = $("#companyUrl").val();
                var bnNumber = $("#bnNumber").val();
                var contactTitle = $("#contactTitle").val();
                var contactFName = $("#contactFName").val();
                var contactLName = $("#contactLName").val();
                var countryCode = $("#countryCode option:selected").val();
                var phoneNumber = $("#phoneNumber").val();
                var cFaxNumber = $("#cFaxNumber").val();
                var userEmail = $("#userEmail").val();
                var city = $("#city").val();
                var country = $("#country option:selected").val();
                var addressDetails = $("#addressDetails").val();
                var cPostalCode = $("#cPostalCode").val();
                var cPassword = $("#cPassword").val();

                var options = [];
                options = [accountType, firstName, lastName, companyName, companyUrl, bnNumber, contactTitle, contactFName, contactLName, countryCode, phoneNumber, cFaxNumber, userEmail, city, country, addressDetails, cPostalCode, cPassword];

                SignupManufacturer.manufacturerInsert(options);
        }
        else {
                console.error("Registration form Validation failed.");
        }
}

function LogInManufacturer() {
        console.info("Entering LogInManufacturer");

        if (DoValidate_frmLogInMan()) {
                console.info("Manufacturer Login Form Validation is successful.");
                var userName = $("#userName").val().trim();
                var loginPassword = $("#loginPassword").val().trim();
                var registered = 0;

                function callback(tx, results) {
                        console.info("Entering to business callback");

                        if (results.rows.length === 0) {
                                window.alert("You have not registered business yet!");
                                console.info("Business Length is zero");
                        }
                        else {
                                console.info("Business Length is not zero");
                                for (var i = 0; i < results.rows.length; i++) {
                                        var row = results.rows[i];
                                        if (row['userEmail'].trim() === userName && row['cPassword'].trim() === loginPassword) {
                                                registered++;

                                                localStorage.setItem("accountType", row['accountType']);
                                                localStorage.setItem("firstName", row['firstName']);
                                                localStorage.setItem("lastName", row['lastName']);
                                                localStorage.setItem("companyName", row['companyName']);
                                                localStorage.setItem("companyUrl", row['companyUrl']);
                                                localStorage.setItem("bnNumber", row['bnNumber']);
                                                localStorage.setItem("contactTitle", row['contactTitle']);
                                                localStorage.setItem("contactFName", row['contactFName']);
                                                localStorage.setItem("contactLName", row['contactLName']);
                                                localStorage.setItem("countryCode", row['countryCode']);
                                                localStorage.setItem("phoneNumber", row['phoneNumber']);
                                                localStorage.setItem("cFaxNumber", row['cFaxNumber']);
                                                localStorage.setItem("userEmail", row['userEmail']);
                                                localStorage.setItem("city", row['city']);
                                                localStorage.setItem("country", row['country']);
                                                localStorage.setItem("addressDetails", row['addressDetails']);
                                                localStorage.setItem("cPostalCode", row['cPostalCode']);
                                                localStorage.setItem("cPassword", row['cPassword']);
                                        }
                                }
                                if (registered === 0) {
                                        window.alert("You have not registered yet!");
                                }
                        }
                }
                SignInManufacturer.selectAll(callback);
        }
        else {
                console.error("Log in form Validation failed.");
        }
}