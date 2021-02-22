var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ")--" + error.message);
}

var DB = {
    TKcreateDatabase: function () {
        var shortName = "TKFinalProject";
        var version = "1.0";
        var displayName = "DB for TKFinalProject App";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database ...");
        //or window.openDatabase()
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");
        }
    },

    TKcreateTables: function () {

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


            console.info("Creating Table: Candidates");
            var sqlCreateType = "CREATE TABLE IF NOT EXISTS candidates("
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

            }

            console.info("Creating Other Tables:");

            var sqlCreateReview = "CREATE TABLE IF NOT EXISTS students(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "studentNum VARCHAR(8) NOT NULL," +
                "candidateId INTEGER NOT NULL," +
                "studentEmail VARCHAR(30)," +
                "voteDate DATE," +
                "FOREIGN KEY(candidateId) REFERENCES candidates(id));";
            tx.executeSql(sqlCreateReview, options, successCreate, errorHandler);
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

            console.info("Dropping Table: students");
            var sqlReview = "DROP TABLE IF EXISTS students;";

            tx.executeSql(sqlReview, options, successDrop, errorHandler);

        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
