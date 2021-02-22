var Review = {
    TKinsert: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Your vote Added");
        }

        function txFunction(tx) {
            var sql = "";
            sql = "INSERT INTO students(studentNum, candidateId, studentEmail, voteDate) VALUES(?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    TKselectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM students;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var Type = {
    TKselectAll: function (options, callback) {
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



