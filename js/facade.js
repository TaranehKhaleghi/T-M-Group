function RegisterUser() {
        console.info("Entering RegisterUser");
        if (DoValidate_frmAdd()) {
                console.info("User Registration Form Validation is successful.");
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

                function checkDatabase() {
                        var isExist = 0;
                        var isEligible = true;
                        function callback(tx, results) {
                                console.info("Entering to callback");
                                if (results.rows.length === 0) {
                                        console.info("Length is zero");
                                        isExist = 0;
                                        isEligible = true;
                                }
                                else {
                                        console.info("Length is not zero");
                                        for (var i = 0; i < results.rows.length; i++) {
                                                var row = results.rows[i];
                                                if (row['userEmail'] === userEmail) {
                                                        console.info("There is a same email ...");
                                                        isExist++;
                                                        isEligible = false;
                                                }
                                        }
                                }
                                if (isExist === 0) {
                                        console.info("Calling insert in registration");
                                }
                                else {
                                        window.alert("This account with the same email is already exist!");
                                }
                        }

                        Register.selectAll(callback);
                        return isEligible;
                }

                if (checkDatabase) {
                        Register.userInsert(options);
                }
        }
        else {
                console.error("Registration form Validation failed.");
        }
}

function CheckDatabase(id) {
        function callback(tx, results) {
                for (var i = 0; i < results.rows.length; i++) {
                        var row = results.rows[i];
                        if (row['id'] == id) {
                                return true;
                        }
                        else {
                                return false;
                        }
                }
        }
        SignIn.selectAll(callback);
}

function LogInUser() {
        console.info("Entering LogInUser");

        if (DoValidate_frmLogIn()) {
                console.info("User Login Form Validation is successful.");
                var userName = $("#userName").val().trim();
                var loginPassword = $("#loginPassword").val().trim();
                var registered = 0;
                var mp = $("#majidProfile span").text();
                console.info(mp);
                function callback(tx, results) {
                        console.info("Entering to callback");
                        var htmlCode = "";
                        var row = "";

                        if (results.rows.length === 0) {
                                window.alert("You have not registered yet!");
                                console.info("Length is zero");
                        }
                        else {
                                console.info("Length is not zero");
                                for (var i = 0; i < results.rows.length; i++) {
                                            row = results.rows[i];                                     
                                        if (row['userEmail'].trim() === userName && row['password'].trim() === loginPassword) {                                                                                                                                                
                                                registered++;                                                                                                            
                                        }                                    
                                }
                                if (registered === 0) {
                                        window.alert("You have not registered yet!");
                                }
                                else{
                                        var htmlCode = row['firstName'];   
                                        console.info(htmlCode);
                                       /*  var mp = $("#majidProfile").val();
                                        console.info(mp); */
                                        $("#majidProfile").html(htmlCode);                                        
                                }
                        }
                        
                }
                SignIn.selectAll(callback);                
        }
        else {
                console.error("Log in form Validation failed.");
        }
}
