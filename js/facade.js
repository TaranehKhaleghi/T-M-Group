
/* function SaveDefaultEmail(){
        var DefaultEmail = $("#user_email").val();

        InitStorage();
        AddtoStorage();

        function InitStorage(){
                localStorage.setItem("DefaultEmail", DefaultEmail);
        }
        function AddtoStorage(){
                if (localStorage.getItem("DefaultEmail")){
                        window.alert("Default user email saved:"+ localStorage.getItem("DefaultEmail"));
                }
                else{
                        window.alert("Default user email save failed")
                }
        }
} */

/* function TKshowAddFeedback(){
        var defaultReviewer = localStorage.getItem("DefaultEmail");
        $("#TKStudentEmail").val(defaultReviewer);

        TKupdateTypesDropdown();
} */

/* function TKupdateTypesDropdown(){
        // $("#TKTypeAdd").html("");
        var options = [];
        function callback(tx,results) {

                var row1 = results.rows[0];
                var row2 = results.rows[1];
                var row3 = results.rows[2];
                var row4 = results.rows[3];
                var htmlCode = "<option value='' disabled selected style='display:none;'>Please Choose</option>" +
                    "<option value='1'>" + row1['name'] + "</option>" +
                    "<option value='2'>" + row2['name'] + "</option>" +
                    "<option value='3'>" + row3['name'] + "</option>" +
                    "<option value='4'>" + row4['name']  + "</option>";
                var candidate = $("#TKTypeAdd");
                candidate = candidate.html(htmlCode);
                candidate.selectmenu("refresh");
                // $("#TKTypeAdd").selectmenu("refresh");

        }
        Type.TKselectAll(options, callback);
} */

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
