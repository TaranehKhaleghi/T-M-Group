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
                "user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "accountType VARCHAR(20) NOT NULL," +
                "firstName VARCHAR(30) NOT NULL," +
                "lastName VARCHAR(30) NOT NULL," +
                "countryCode VARCHAR(3) NOT NULL," +
                "phoneNumber VARCHAR(10) NOT NULL," +
                "userEmail VARCHAR(50) NOT NULL," +
                "city VARCHAR(20) NOT NULL," +
                "country VARCHAR(20) NOT NULL," +
                "addressDetails VARCHAR(50) NOT NULL," +
                "password VARCHAR(50) NOT NULL);";
            tx.executeSql(sqlCreateUser, options, successCreate, errorHandler);

            // Create table product
            console.info("Creating Table: product...");
            var sqlCreateProducts = "CREATE TABLE IF NOT EXISTS product(" +
                "product_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(30) NOT NULL," +
                "price INT NOT NULL," +
                "description VARCHAR(50) NOT NULL," +
                "image VARBINARY NOT NULL),"+
                "FOREIGN KEY(manufacturer_id) REFERENCES manufacturer(id));";
                "FOREIGN KEY(category_id) REFERENCES category(id));";
            tx.executeSql(sqlCreateProducts, options, successCreate, errorHandler);

            // Create table manufacturer
            console.info("Creating Table: manufacturer...");
            var sqlManufacturer = "CREATE TABLE IF NOT EXISTS manufacturer(" +
                "manufacturer_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "companyName VARCHAR(30) NOT NULL," +
                "bnNumber VARCHAR(30) NOT NULL," +                
                "contactFName VARCHAR(30) NOT NULL," +
                "contactLName VARCHAR(30) NOT NULL," +
                "contactTitle VARCHAR(30) NOT NULL," +
                "city VARCHAR(20) NOT NULL," +
                "addressDetails VARCHAR(30) NOT NULL," +
                "postalCode VARCHAR(10) NOT NULL," +
                "country VARCHAR(20) NOT NULL," +
                "phone VARCHAR(20) NOT NULL," +
                "fax VARCHAR(20);";
                "email VARCHAR(20) NOT NULL," +
                "url VARCHAR(20));";                     
            tx.executeSql(sqlManufacturer, options, successCreate, errorHandler);

            // Create table order
            console.info("Creating Table: order...");
            var sqlOrder = "CREATE TABLE IF NOT EXISTS order(" +
                "order_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "orderDate date(10) NOT NULL," +
                "shipDate date(10)," +
                "FOREIGN KEY(user_id) REFERENCES users(id))," +
                "FOREIGN KEY(payment_id) REFERENCES payment(id));";
            tx.executeSql(sqlOrder, options, successCreate, errorHandler);

             // Create table orderDetails
             console.info("Creating Table: orderDetails...");
             var sqlOrderDetails = "CREATE TABLE IF NOT EXISTS orderDetails(" +
                 "orderDetails_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                 "orderNumber VARCHAR(30) NOT NULL AUTOINCREMENT," +
                 "price INT NOT NULL," +
                 "quantity INT NOT NULL," +
                 "discount INT NOT NULL," +
                 "total INT NOT NULL," +
                 "size VARCHAR(10)," +
                 "color VARCHAR(20)," +
                 "shipDate date," +
                 "FOREIGN KEY(product_id) REFERENCES product(id))," +
                 "FOREIGN KEY(order_id) REFERENCES order(id));";
             tx.executeSql(sqlOrderDetails, options, successCreate, errorHandler);
 
              // Create table payment
            console.info("Creating Table: payment...");
            var sqlPayment = "CREATE TABLE IF NOT EXISTS payment(" +
                "payment_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "paymentType VARCHAR(10) NOT NULL);";
            tx.executeSql(sqlPayment, options, successCreate, errorHandler); 
            
            // Create table category
            console.info("Creating Table: category...");
            var sqlCategory = "CREATE TABLE IF NOT EXISTS category(" +
                "category_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(20) NOT NULL)," +
                "description VARCHAR(50) NOT NULL);";

            tx.executeSql(sqlCategory, options, successCreate, errorHandler);
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
