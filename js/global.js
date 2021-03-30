function btnRegister_click() {
    RegisterSupplier();
}

function btnRegisterBusiness_click() {
    RegisterManufacturer();
}

function btnLogIn_click() {
    LogInSupplier();
}

function btnLogInMan_click() {
    LogInManufacturer();
}

function btnSaveProduct_click() {
    SaveProduct();
}

function updateAllList_show() {
    UpdateProductList();
    UpdatePopularProduct();
    UpdateNavManufacturerList();
    UpdateNavCategoryList();
    UpdateLeftMenuCategory();
}

function init() {
    console.info("DOM is ready");

    $('#customCheck1').click(function() {
        if ($('#submitBtn').is(':disabled')) {
            $('#submitBtn').removeAttr('disabled');
        } else {
            $('#submitBtn').attr('disabled', 'disabled');
        }
    });

    $('#customCheck2').click(function() {
        if ($('#saveBtn').is(':disabled')) {
            $('#saveBtn').removeAttr('disabled');
        } else {
            $('#saveBtn').attr('disabled', 'disabled');
        }
    });

    $("#submitBtn").on("click", btnRegister_click);

    $("#saveBtn").on("click", btnRegisterBusiness_click);

    $("#logInBtn").on("click", btnLogIn_click);

    $("#logInManBtn").on("click", btnLogInMan_click);

    $("#saveProduct").on("click", btnSaveProduct_click);

    window.onload = function() {
        updateAllList_show();
    };
}

function initDB() {
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.createTables();
        } else {
            console.error("Error: Cannot create tables: database does not exist");
        }
    } catch (e) {
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}
$(document).ready(function() {
    init();
    initDB();
});