var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ")--" + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "DropShipping";
        var version = "1.0";
        var displayName = "DB for T&M Drop Shipping website";
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
            //repeat for other tables
            //=======================

            //don't want to drop any table now. only if necessary.
            //=====================================================
            //console.info("Dropping Table users if exists...");
            //var sqlDropUser = "DROP TABLE IF EXISTS users;";

            //tx.executeSql(sqlDropUser, options, successDrop, errorHandler);

            //console.info("Dropping Table products if exists...");
            //var sqlDropProduct = "DROP TABLE IF EXISTS products;";

            //tx.executeSql(sqlDropProduct, options, successDrop, errorHandler);
            //=====================================================
            //uncomment if necessary

            // Create table users
            console.info("Creating Table: users...");
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
            tx.executeSql(sqlCreateUser, options, successCreate, errorHandler);

            // Create table products
            console.info("Creating Table: products...");
            var sqlCreateProducts = "CREATE TABLE IF NOT EXISTS products(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(20) NOT NULL," +
                "price INT NOT NULL," +
                "description VARCHAR(50) NOT NULL," +
                "image VARBINARY NOT NULL);";
            // "FOREIGN KEY(manufacturer_id) REFERENCES manufacturers(id));"+
            // "FOREIGN KEY(category_id) REFERENCES category(id));";
            tx.executeSql(sqlCreateProducts, options, successCreate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function () {
        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            //repeat for other tables
            //=======================
            console.info("Dropping Table: users");
            var sqlUser = "DROP TABLE IF EXISTS users;";

            tx.executeSql(sqlUser, options, successDrop, errorHandler);
            //=====================================================
            console.info("Dropping Table: products");
            var sqlProduct = "DROP TABLE IF EXISTS products;";

            tx.executeSql(sqlProduct, options, successDrop, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
