
function btnRegister_click() {
    RegisterUser();
}

function TKbtnSaveDef_click() {
     SaveDefaultEmail();
}

function TKAddFeedbackPage_show() {
     TKshowAddFeedback();
}


function TKinit() {
    console.info("DOM is ready");

    $('#customCheck1').click(function() {
        if ($('#submitBtn').is(':disabled')) {
            $('#submitBtn').removeAttr('disabled');
        } else {
            $('#submitBtn').attr('disabled', 'disabled');
        }
    });

    $("#submitBtn").on("click", btnRegister_click);

  $("#TKbtnSaveDef").on("click", TKbtnSaveDef_click);

     $("#TKAddFeedbackPage").on("pageshow",TKAddFeedbackPage_show);

}
function TKinitDB(){
    try{
        DB.TKcreateDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.TKcreateTables();
        }
        else{
            console.error("Error: Cannot create tables: database does not exist");
        }
    }
    catch(e){
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}
$(document).ready(function () {
    TKinit();
    TKinitDB();
});