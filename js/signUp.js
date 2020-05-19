$(()=>{
    // 실시간 감지가 필요하다면 "propertychange change keyup paste input"
    // 아이디
        $("#inputId").on("change", (e)=>{
            let inputId = $(e.target).val();
            let checkId = $("#checkId");
            const idReg = /^[A-za-z0-9]{5,15}$/;
            const idTrue = "생성 가능한 아이디입니다."
            const idFalse = "5~20자의 영문 대 소문자, 숫자만 사용가능합니다."
            if(idReg.test(inputId)){
                checkId.text(idTrue).css("color","black");
            } else {
                checkId.text(idFalse).css("color", "red");
                $(e.target).focus();
                $(e.target).val("");
            }
            console.log(checkId.val(idTrue))
        });
        // 비밀번호
        $("#inputPass").on("change", (e)=>{
            let inputPass = $(e.target).val();
            let checkPass = $("#checkPass");
            const passReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
            const passTrue = "사용 가능한 비밀번호입니다."
            const passFalse = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
            if(passReg.test(inputPass)){
                checkPass.text(passTrue).css("color","black");
            } else {
                checkPass.text(passFalse).css("color", "red");
                $(e.target).focus();
                $(e.target).val("");
            }
        });
        // 비밀번호 재확인
        $("#inputRePass").on("change", (e)=>{
            let inputPass = $("#inputPass").val();
            let inputRePass = $(e.target).val();
            let checkRePass = $("#checkRePass");
            const checkTrue = "일치합니다.";
            const checkFalse = "불일치합니다.";
            if(inputPass === inputRePass){
                checkRePass.text(checkTrue).css("color","black");
            } else {
                checkRePass.text(checkFalse).css("color", "red");
                $(e.target).focus();
                $(e.target).val("");
            }
        });
        // 이름은 따로 체크 안함
        // 이메일
        $("#inputEmail").on("change", (e)=>{
            let inputEmail = $(e.target).val();
            let checkEmail = $("#checkEmail");
            const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            const emailTure = ""
            const emailFalse = "이메일 주소를 다시 확인해주세요."
            if(emailReg.test(inputEmail)){
                checkEmail.text(emailTure).css("color","black");
            } else {
                checkEmail.text(emailFalse).css("color", "red");
                $(e.target).focus();
                $(e.target).val("");
            }
        });

        // 체크&스토리지
        $("#signUp").on("click", ()=>{
            // check value
            const inputId = $("#inputId").val(),
                  inputPass = $("#inputPass").val(),
                  inputRePass = $("#inputRePass").val(),
                  inputName = $("#inputName").val(),
                  inputEmail = $("#inputEmail").val();
            //   로컬
            localStorage.setItem("USER_ID", inputId);
            localStorage.setItem("USER_PASSWORD", inputPass);
            localStorage.setItem("USER_NAME", inputName);
            localStorage.setItem("USER_EMAIL", inputEmail);
            // 빈칸 체크 조건문
            const alertText = "필수 항목 입니다.";
            
            if(inputId && inputPass && inputRePass && inputName && inputEmail){
                alert("가입을 축하드립니다.");
                location.href = './login.html';
                window.close();
            };
            if(!inputId) {
                $("#checkId").text(alertText).css("color", "red");
            };
            if(!inputPass) {
                $("#checkPass").text(alertText).css("color", "red");
            };
            if(!inputRePass){
                $("#checkRePass").text(alertText).css("color", "red");
            };
            if(!inputName) {
                $("#checkName").text(alertText).css("color", "red");
            };
            if(!inputEmail){
                $("#checkEmail").text(alertText).css("color", "red");
            };
    });

    // 로그인 링크이동
        $("#loginGo").on("click", ()=>{
            location.href = './login.html';
        });
});

// function checkValue(){
//     const inputId = document.getElementById("memberId").value;
//     const inputPass = document.getElementById("memberPass").value;
//     const inputRePass = document.getElementById("memberPass2").value;
//     const inputName = document.getElementById("memberName").value;
//     const inputEmail = document.getElementById("memberEmail").value;

//     localStorage.setItem("USER_ID", inputId);
//     localStorage.setItem("USER_NAME", inputName);
//     localStorage.setItem("USER_PASSWORD", inputPass);
//     localStorage.setItem("USER_EMAIL", inputEmail);

//     const text = document.getElementById("textId");
//     const textPass = document.getElementById("textPass");
//     const textRe = document.getElementById("rePass");
//     const textName = document.getElementById("textName");
//     const textEmail = document.getElementById("textEmail");

//     const alertText = "필수 항목 입니다."

//     if(inputId && inputPass && inputRePass && inputName && inputEmail){
//         alert("가입을 축하드립니다.");
//         opener.location.href = 'mibs.html';
//         window.close()
//     }
//     if(!inputId) {
//         text.innerHTML = alertText;
//     }
//     if(!inputPass) {
//         textPass.innerHTML = alertText;
//     }
//     if(!inputRePass){
//         textRe.innerHTML = alertText;
//     }
//     if(!inputName) {
//         textName.innerHTML = alertText;
//     }
//     if(!inputEmail){
//         textEmail.innerHTML = alertText;
//     }
// }