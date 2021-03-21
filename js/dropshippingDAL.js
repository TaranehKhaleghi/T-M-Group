var Register = {

    userInsert: function (options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Registration has been successful");

            if ($("input[name='accountType']:checked").val() === "Supplier") {
                window.location.replace("page-user-login.html");

            }
            else {
                window.location.replace("page-user-business-info.html");
            }
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting into table");

            sql = "INSERT INTO users(accountType, firstName, lastName, countryCode, phoneNumber, userEmail, city, country, addressDetails, password) VALUES(?,?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);

            console.info("Data added");
        }

        db.transaction(txFunction, errorHandler, successInsertTransaction);
    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM users;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var BusinessInfo = {

    businessInsert: function (options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Business registration has been successful");

            window.location.replace("page-user-login.html");
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting into table business info");

            sql = "INSERT INTO manufacturers(companyName, companyUrl, bnNumber, cFirstName, cLastName, contactTitle, cCountryCode, cPhoneNumber, cFaxNumber, contactEmail, contactCity, contactCountry, cAddressDetails, cPostalCode) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);

            console.info("Business data added");
        }

        db.transaction(txFunction, errorHandler, successInsertTransaction);
    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM manufacturers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SignIn = {

    selectedUser: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successRegistered() {
            console.info("Success: Log in successful");
            alert("Registered user!");

            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting a User...  ");
            var sql = "SELECT * FROM users WHERE id=?;";

            tx.executeSql(sql, options, callback, successRegistered, errorHandler);
            console.info("Data found...");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
            alert("Registered user!");
            window.alert("You logged in successfully");

            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM users;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};


