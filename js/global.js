
function btnRegister_click() {
    RegisterUser();
}
function btnLogIn_click(){
    LogInUser();
}


function init() {
    console.info("DOM is ready");

    $('#customCheck1').click(function () {
        if ($('#submitBtn').is(':disabled')) {
            $('#submitBtn').removeAttr('disabled');
        } else {
            $('#submitBtn').attr('disabled', 'disabled');
        }
    });

    $("#submitBtn").on("click", btnRegister_click);

    $("#logInBtn").on("click", btnLogIn_click);
}

function initDB() {
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.createTables();
        }
        else {
            console.error("Error: Cannot create tables: database does not exist");
        }
    }
    catch (e) {
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}
$(document).ready(function () {
    init();
    initDB();
});