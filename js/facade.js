
function SaveDefaultEmail(){
        var DefaultEmail = $("#user_email").val();

        InitStorage();
        AddtoStorage();

        function InitStorage(){
                localStorage.setItem("DefaultEmail", DefaultEmail);
        }
        function AddtoStorage(){
                if (localStorage.getItem("DefaultEmail")){
                        window.alert("Default user email saved:"+ localStorage.getItem("DefaultEmail"));
                }
                else{
                        window.alert("Default user email save failed")
                }
        }
}

function TKshowAddFeedback(){
        var defaultReviewer = localStorage.getItem("DefaultEmail");
        $("#TKStudentEmail").val(defaultReviewer);

        TKupdateTypesDropdown();
}

function TKupdateTypesDropdown(){
        // $("#TKTypeAdd").html("");
        var options = [];
        function callback(tx,results) {

                var row1 = results.rows[0];
                var row2 = results.rows[1];
                var row3 = results.rows[2];
                var row4 = results.rows[3];
                var htmlCode = "<option value='' disabled selected style='display:none;'>Please Choose</option>" +
                    "<option value='1'>" + row1['name'] + "</option>" +
                    "<option value='2'>" + row2['name'] + "</option>" +
                    "<option value='3'>" + row3['name'] + "</option>" +
                    "<option value='4'>" + row4['name']  + "</option>";
                var candidate = $("#TKTypeAdd");
                candidate = candidate.html(htmlCode);
                candidate.selectmenu("refresh");
                // $("#TKTypeAdd").selectmenu("refresh");

        }
        Type.TKselectAll(options, callback);
}

function RegisterUser(){
        if(DoValidate_frmAdd())
        {
                console.info("Vote Form Validation is successful.");
                var studentNum = $("#TKStudentNum").val();
                var candidateId = $("#TKTypeAdd").val();
                var studentEmail = $("#TKStudentEmail").val();
                var voteDate = $("#TKReviewDate").val();

                /*var options =[studentNum,candidateId,studentEmail,voteDate];
                Review.TKinsert(options);*/
                function callback(tx,results) {
                         var eligible = true;
                         var length = results.rows.length;
                        if(length===0){
                                var options =[studentNum,candidateId,studentEmail,voteDate];
                                Review.TKinsert(options);
                        }
                        else{
                                for (var i = 0; i < length; i++) {
                                        var row = results.rows[i];
                                        if (studentNum === row['studentNum']) {
                                                 eligible = false
                                        }
                                }
                                if(eligible === true){
                                        var options =[studentNum,candidateId,studentEmail,voteDate];
                                        Review.TKinsert(options);
                                }
                                else {
                                        window.alert("You are not eligible to vote for this year");
                                }
                        }


                }
                Review.TKselectAll(callback);

        }
        else{
                console.error("Vote Form Validation failed.");
        }
}
