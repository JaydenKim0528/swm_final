// 회원가입 유효성 검사 로직

// 아이디 유효성 검사
function validateId() {
    const signUpId = document.getElementById("signUpId").value;
    const idMsg = document.getElementById("idMsg");

    // 영문 소문자와 숫자만 허용, 6자리 이상 12자리 이하
    const idPattern = /^(?=.*[a-z])[a-z0-9]{6,12}$/;

    if (idPattern.test(signUpId)) {
        idMsg.innerHTML = "사용 가능한 아이디입니다.";
        idMsg.style.color = "#aaa";
    } else {
        idMsg.innerHTML = "영어 소문자와 숫자만 허용, 6~12자리로 입력하세요.";
        idMsg.style.color = "red";
    }
}


// 이름 유효성 검사
function validName() {
    const signUpName = document.getElementById("signUpName").value;
    const nameMsg = document.getElementById("nameMsg");

    const idPattern = /^[가-힣]{2,10}$/; /*최소 2자, 최대 10자의 한글만 가능합니다*/

    if(idPattern.test(signUpName)) {
        nameMsg.innerHTML = "사용 가능합니다."
        nameMsg.style.color = "#aaa";
    }
    else {
        nameMsg.innerHTML = "한글만 가능 합니다."
        nameMsg.style.color = "red";
    }
}

// 비밀번호 유효성 검사
function validatePassword() {
    const signUpPwd = document.getElementById("signUpPwd").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const pwdMsg = document.getElementById("pwdMsg");
    const pwdConfirmMsg = document.getElementById("pwdConfirmMsg");

    const pwdPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;


    if (pwdPattern.test(signUpPwd)) {
        pwdMsg.innerHTML = "유효한 비밀번호입니다.";
        pwdMsg.style.color = "#aaa";
    } else {
        pwdMsg.innerHTML = "영문+숫자+특수문자를 포함하여 8~20자로 입력하세요.";
        pwdMsg.style.color = "red";
    }

    // 비밀번호 확인 일치 검사
    if (signUpPwd !== "" && signUpPwd === confirmPassword) {
        pwdConfirmMsg.innerHTML = "비밀번호가 일치합니다.";
        pwdConfirmMsg.style.color = "#aaa";
    } else if (confirmPassword !== "") {
        pwdConfirmMsg.innerHTML = "비밀번호가 일치하지 않습니다.";
        pwdConfirmMsg.style.color = "red";
    } else {
        pwdConfirmMsg.innerHTML = "";
    }
}


// 휴대전화 유효성 검사
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneMsg = document.getElementById("phoneMsg");

    // 휴대전화 번호 정규식: 010으로 시작하며, 뒤에 8자리 숫자가 나옴
    const phonePattern = /^010\d{8}$/;

    // 휴대전화 번호 유효성 검사
    if (phonePattern.test(phone)) {
        phoneMsg.innerHTML = "유효한 전화번호입니다.";
        phoneMsg.style.color = "#aaa";
    } else {
        phoneMsg.innerHTML = "'-' 없이 입력하세요.";
        phoneMsg.style.color = "red";
    }
}
