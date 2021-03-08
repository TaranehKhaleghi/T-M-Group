var Register = {
    
    userInsert: function (options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Registration has been successful");
            window.location.replace("page-user-login.html");           
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

/* var Type = {
    selectAll: function (options, callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM candidates;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
 */


