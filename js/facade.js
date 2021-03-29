function RegisterSupplier() {
    console.info("Entering RegisterSupplier");
    if (DoValidate_frmAdd()) {
        console.info("Supplier Registration Form Validation is successful.");
        var accountType = $("input[name='accountType']:checked").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var countryCode = $("#countryCode option:selected").val();
        var phoneNumber = $("#phoneNumber").val();
        var userEmail = $("#userEmail").val();
        var city = $("#city").val();
        var country = $("#country").val();
        var addressDetails = $("#addressDetails").val();
        var password = $("#password").val();

        var options = [];
        options = [accountType, firstName, lastName, countryCode, phoneNumber, userEmail, city, country, addressDetails, password];

        SignupSupplier.supplierInsert(options);

    } else {
        console.error("Registration form Validation failed.");
    }
}

function LogInSupplier() {
    console.info("Entering LogInSupplier");

    if (DoValidate_frmLogIn()) {
        console.info("Supplier Login Form Validation is successful.");
        var userName = $("#userName").val().trim();
        var loginPassword = $("#loginPassword").val().trim();
        var registered = 0;

        function callback(tx, results) {
            console.info("Entering to callback");

            if (results.rows.length === 0) {
                window.alert("You have not registered yet!");
                console.info("Length is zero");
            } else {
                console.info("Length is not zero");
                for (var i = 0; i < results.rows.length; i++) {
                    var row = results.rows[i];
                    if (row['userEmail'].trim() === userName && row['password'].trim() === loginPassword) {
                        registered++;

                        localStorage.setItem("accountType", row['accountType']);
                        localStorage.setItem("firstName", row['firstName']);
                        localStorage.setItem("lastName", row['lastName']);
                        localStorage.setItem("countryCode", row['countryCode']);
                        localStorage.setItem("phoneNumber", row['phoneNumber']);
                        localStorage.setItem("userEmail", row['userEmail']);
                        localStorage.setItem("city", row['city']);
                        localStorage.setItem("country", row['country']);
                        localStorage.setItem("addressDetails", row['addressDetails']);
                    }
                }
                if (registered === 0) {
                    window.alert("You have not registered yet!");
                }
            }
        }
        SignInSupplier.selectAll(callback);
    } else {
        console.error("Log in form Validation failed.");
    }
}

function RegisterManufacturer() {
    console.info("Entering Business Registration");

    if (DoValidate_frmManufacturer()) {
        console.info("Business Registration Form Validation is successful.");

        var accountType = $("input[name='accountType']:checked").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var companyName = $("#companyName").val();
        var companyUrl = $("#companyUrl").val();
        var bnNumber = $("#bnNumber").val();
        var contactTitle = $("#contactTitle").val();
        var contactFName = $("#contactFName").val();
        var contactLName = $("#contactLName").val();
        var countryCode = $("#countryCode option:selected").val();
        var phoneNumber = $("#phoneNumber").val();
        var cFaxNumber = $("#cFaxNumber").val();
        var userEmail = $("#userEmail").val();
        var city = $("#city").val();
        var country = $("#country option:selected").val();
        var addressDetails = $("#addressDetails").val();
        var cPostalCode = $("#cPostalCode").val();
        var cPassword = $("#cPassword").val();

        var options = [];
        options = [accountType, firstName, lastName, companyName, companyUrl, bnNumber, contactTitle, contactFName, contactLName, countryCode, phoneNumber, cFaxNumber, userEmail, city, country, addressDetails, cPostalCode, cPassword];

        SignupManufacturer.manufacturerInsert(options);
    } else {
        console.error("Registration form Validation failed.");
    }
}

function LogInManufacturer() {
    console.info("Entering LogInManufacturer");

    if (DoValidate_frmLogInMan()) {
        console.info("Manufacturer Login Form Validation is successful.");
        var userName = $("#userName").val().trim();
        var loginPassword = $("#loginPassword").val().trim();
        var registered = 0;

        function callback(tx, results) {
            console.info("Entering to business callback");

            if (results.rows.length === 0) {
                window.alert("You have not registered business yet!");
                console.info("Business Length is zero");
            } else {
                console.info("Business Length is not zero");
                for (var i = 0; i < results.rows.length; i++) {
                    var row = results.rows[i];
                    if (row['userEmail'].trim() === userName && row['cPassword'].trim() === loginPassword) {
                        registered++;

                        localStorage.setItem("accountType", row['accountType']);
                        localStorage.setItem("firstName", row['firstName']);
                        localStorage.setItem("lastName", row['lastName']);
                        localStorage.setItem("companyName", row['companyName']);
                        localStorage.setItem("companyUrl", row['companyUrl']);
                        localStorage.setItem("bnNumber", row['bnNumber']);
                        localStorage.setItem("contactTitle", row['contactTitle']);
                        localStorage.setItem("contactFName", row['contactFName']);
                        localStorage.setItem("contactLName", row['contactLName']);
                        localStorage.setItem("countryCode", row['countryCode']);
                        localStorage.setItem("phoneNumber", row['phoneNumber']);
                        localStorage.setItem("cFaxNumber", row['cFaxNumber']);
                        localStorage.setItem("userEmail", row['userEmail']);
                        localStorage.setItem("city", row['city']);
                        localStorage.setItem("country", row['country']);
                        localStorage.setItem("addressDetails", row['addressDetails']);
                        localStorage.setItem("cPostalCode", row['cPostalCode']);
                        localStorage.setItem("cPassword", row['cPassword']);
                    }
                }
                if (registered === 0) {
                    window.alert("You have not registered yet!");
                }
            }
        }
        SignInManufacturer.selectAll(callback);
    } else {
        console.error("Log in form Validation failed.");
    }
}

function SaveProduct() {
    if (DoValidate_frmSaveProduct()) {

        productImage = document.getElementById('myImage');
        image = getBase64Image(productImage);

        function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);

            var dataURL = canvas.toDataURL("image/png");

            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }

        var name = $("#productName").val();
        var price = $("#productPrice").val();
        var category = $("#category option:selected").val();
        var description = $("#description").val();

        options = [];
        options = [image, name, price, category, description];

        SaveProductInfo.productInsert(options);
    }
}

function UpdateProductList() {
    function callback(tx, results) {
        var htmlCode = "";
        var itemsNumber = 0;

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            itemsNumber = results.rows.length;

            var imgURL = "data:image/png;base64," + row['image'];

            htmlCode += "<div class='col-md-4'>" +
                "<figure class='card card-product-grid'>" +
                "<div class='img-wrap'>" +
                "<span class='badge badge-danger'>" + "NEW" + "</span>" +
                "<img src='" + imgURL + "'>" +
                "<a class='btn-overlay' href='page-product-detail.html'>" + "<i class='fa fa-search-plus'>" + "</i>" + "Quick view" + "</a>" +
                "</div><!-- img-wrap.-->" +
                "<figcaption class='info-wrap'>" +
                "<div class='fix-height'>" +
                "<a href='page-product-detail.html' class='title'>" + row['name'] + "</a>" +
                "<div class='price-wrap mt-2'>" +
                "<span class='price'>" + row['price'] + "</span>" +
                "&nbsp;&nbsp;<del class='price-old' style='color:red;'>" + row['price'] * 1.50 + "</del>" +
                "</div><!-- price-wrap.// -->" +
                "</div>" +
                "<a href='page-shopping-cart.html' class='btn btn-block btn-primary'>" + "Add to cart" + "</a>" +
                "</figcaption>" +
                "</figure>" +
                "</div><!-- col.// -->";
        }

        var productList = $("#productList");
        productList = productList.html(htmlCode);

        var items = $(".items");
        items = items.text(itemsNumber + " Items found");
    }

    SaveProductInfo.selectAll(callback);
}

function UpdatePopularProduct() {
    function callback(tx, results) {
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            var imgURL = "data:image/png;base64," + row['image'];

            htmlCode += "<div class='col-md-3'>" +
                "<div href='#' class='card card-product-grid'>" +
                "<a href='#' class='img-wrap'>" +
                "<img src='" + imgURL + "'>" +
                "</a>" +
                "<figcaption class='info-wrap'>" +
                "<a href='#' class='title'>" + row['name'] +
                "</a>" +
                "<div class='price mt-1'>" + row['price'] +
                "</div><!-- price-wrap.// -->" +
                "</figcaption>" +
                "</div>" +
                "</div><!-- col.// -->";
        }

        var productList = $("#popularProduct");
        productList = productList.html(htmlCode);
    }

    SaveProductInfo.selectAll(callback);
}

function UpdateNavManufacturerList() {
    function callback(tx, results) {
        var htmlCode = "<a class='dropdown-item' href='page-manufacturers.html'>Manufacturers List</a>";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += "<a class='dropdown-item' href='page-manufacturer-grid.html'>" +
                row['companyName'] +
                "</a>"; 
        }
        var manufacturerList = $("#manufacturerList");
        manufacturerList = manufacturerList.html(htmlCode);
    }

    SignupManufacturer.selectAll(callback);
}
