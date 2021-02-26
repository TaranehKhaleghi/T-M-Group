var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ")--" + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "DropShipping";
        var version = "1.0";
        var displayName = "DB for T&M Drop Shipping website ";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database ...");
        //or window.openDatabase()
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");
        }
    },

    createTables: function () {

        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successCreate() {
            console.info("Success: Create Table successful. ");
        }

        function successInsert() {
            console.info("Success: Data insert successful");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];

            console.info("Dropping Table type if exists...");
            var sqlDropType = "DROP TABLE IF EXISTS candidates;";

            tx.executeSql(sqlDropType, options, successDrop, errorHandler);


            //console.info("Creating Table: Candidates");
            /*var sqlCreateType = "CREATE TABLE IF NOT EXISTS candidates("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(30) NOT NULL,"
                + "year VARCHAR(4) NOT NULL);";

            tx.executeSql(sqlCreateType, options, successCreate, errorHandler);

            console.info("Inserting data to Table Candidates...");

            var sqlInsertType = ["INSERT INTO candidates(name, year) VALUES('Jackson Rodrigues', '2019');",
                " INSERT INTO candidates(name, year) VALUES('Mobina Sama', '2019');",
                " INSERT INTO candidates(name, year) VALUES('Julia Smith', '2019');",
                " INSERT INTO candidates(name, year) VALUES('Nathan Bardy', '2019');"];

            for (var i = 0; i < sqlInsertType.length; i++) {
                tx.executeSql(sqlInsertType[i], options, successInsert, errorHandler);

            }*/

            console.info("Creating user Tables:");
         //phoneNumber" "userEmail, city, country, addressDetails, password
            var sqlCreateUser = "CREATE TABLE IF NOT EXISTS users(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "accountType VARCHAR(20) NOT NULL," +
                "firstName VARCHAR(20) NOT NULL," +
                "lastName VARCHAR(20) NOT NULL," +
                "countryCode VARCHAR(3) NOT NULL," +
                "phoneNumber VARCHAR(10) NOT NULL," +
                "userEmail VARCHAR(50) NOT NULL," +
                "city VARCHAR(20) NOT NULL," +
                "country VARCHAR(20) NOT NULL," +
                "addressDetails VARCHAR(50) NOT NULL," +
                "password VARCHAR(50) NOT NULL);";
              //  "FOREIGN KEY(candidateId) REFERENCES candidates(id));";
            tx.executeSql(sqlCreateUser, options, successCreate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    TKdropTables: function () {
        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];

            console.info("Dropping Table: candidates");
            var sqlType = "DROP TABLE IF EXISTS candidates;";

            tx.executeSql(sqlType, options, successDrop, errorHandler);

            console.info("Dropping Table: users");
            var sqlReview = "DROP TABLE IF EXISTS users;";

            tx.executeSql(sqlReview, options, successDrop, errorHandler);

        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
