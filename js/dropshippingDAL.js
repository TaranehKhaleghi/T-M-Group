var SignupSupplier = {

    supplierInsert: function (options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Supplier registration has been successful");

            window.location.replace("page-user-login.html");
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting into table");

            sql = "INSERT INTO suppliers(accountType, firstName, lastName, countryCode, phoneNumber, userEmail, city, country, addressDetails, password) VALUES(?,?,?,?,?,?,?,?,?,?);";
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

            var sql = "SELECT * FROM suppliers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SignupManufacturer = {

    manufacturerInsert: function (options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Manufacturer registration has been successful");

            window.location.replace("page-manufacturer-login.html");
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting into table business info");

            sql = "INSERT INTO manufacturers(accountType, firstName, lastName, companyName, companyUrl, bnNumber, contactTitle, contactFName, contactLName, countryCode, phoneNumber, cFaxNumber, userEmail, city, country, addressDetails, cPostalCode, cPassword) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);

            console.info("Business data added");
        }

        db.transaction(txFunction, errorHandler, successInsertTransaction);
    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all business Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all business records...");

            var sql = "SELECT * FROM manufacturers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SignInSupplier = {

    selectedSupplier: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successRegistered() {
            console.info("Success: Log in successful");
            alert("Registered supplier!");

            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting a User...  ");
            var sql = "SELECT * FROM suppliers WHERE id=?;";

            tx.executeSql(sql, options, callback, successRegistered, errorHandler);
            console.info("Data found...");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
            alert("Registered supplier!");
            window.alert("You logged in successfully");

            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM suppliers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SignInManufacturer = {

    selectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
            alert("Registered manufacturer!");
            window.alert("You logged in successfully");

            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM manufacturers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};