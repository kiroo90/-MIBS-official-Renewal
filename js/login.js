$(()=>{
    // local dataget
    const getId = localStorage.getItem("USER_ID");
    const getPass = localStorage.getItem("USER_PASSWORD");
    console.log(getId);
    console.log(getPass);

    // 로그인 성공시 텍스트
    const LoginText =  `${getId}님`;

    $("#login").on("click",()=>{
        const loginId = $("#loginId").val();
        const loginPass = $("#loginPass").val()

        if(!loginId) {
            alert("아이디를 입력해주세요");
        } else if(!loginPass) {
            alert("비밀번호를 입력해주세요");
        } else if(loginId !== getId) {
            alert("존재하지 않는 아이디입니다.");
            $("#loginId").focus();
            $("#loginId").val("");
        } else if(loginPass !== getPass){
            alert("비밀번호가 틀렸습니다");
            $("#loginPass").focus();
            $("#loginPass").val("");
        } else if(getId && getPass === null){
            showing()
        } else {
            sessionStorage.setItem("LOGIN_ID", loginId);
            sessionStorage.setItem("LOGIN_PASS", loginPass);
            alert(`반갑습니다 ${getId} 님`);
            location.href = "../index.html";
            storage();
        }
    });

    function showing() {
        const loginClass = $(".login");
        loginClass.removeClass("none");

    }

    function Paint (){
        const loginClass = $(".login");
        const loginText = $(".loginText");
        const snbLogin = $(".on");
        const snbLogOut = $(".logoutLi");
        let logout = $(".logout");
        loginClass.addClass("none");
        snbLogin.addClass("none");
        snbLogOut.removeClass("none");
        logout.addClass("on");
        loginText.text(LoginText);
    }

    function storage(){
        const loginId = sessionStorage.getItem("LOGIN_ID");
        if(loginId === null){
            showing();
        } else {
            Paint();
        }
    }
    storage();

    $(".logoutBtn").on("click", ()=>{
        sessionStorage.removeItem("LOGIN_ID");
        sessionStorage.removeItem("LOGIN_PASS");
        window.location.reload();
    });

    $("#signUpGo").on("click", ()=>{
        location.href = "./signup.html";
    });
});