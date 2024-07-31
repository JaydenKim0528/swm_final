// 특정 섹션만 보이도록 설정하는 함수
function showSection(sectionId) {
    // 모든 섹션 숨기기
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'none';
    });

    // 선택된 섹션만 보이기
    document.getElementById(sectionId).style.display = 'block';
}

// 페이지 로드 시 기본으로 예약 내역 섹션을 보이게 설정
window.onload = function() {
    showSection('reservation');
}

document.addEventListener('DOMContentLoaded', function() {
    // 비밀번호 변경 버튼 클릭 시 비밀번호 변경 필드 보이기/숨기기
    document.getElementById('changePasswordButton').addEventListener('click', function() {
        var passwordChangeFields = document.getElementById('passwordChangeFields');
        if (passwordChangeFields.style.display === 'none' || passwordChangeFields.style.display === '') {
            passwordChangeFields.style.display = 'block';
        } else {
            passwordChangeFields.style.display = 'none';
        }
    });

    // 비밀번호 변경 취소 버튼 클릭 시 비밀번호 변경 필드 숨기기
    document.getElementById('cancelPasswordChange').addEventListener('click', function() {
        document.getElementById('passwordChangeFields').style.display = 'none';
    });

    // 휴대폰 번호 수정 버튼 클릭 시 휴대폰 변경 필드 보이기/숨기기
    document.getElementById('changePhoneButton').addEventListener('click', function() {
        var phoneChangeFields = document.getElementById('phoneChangeFields');
        if (phoneChangeFields.style.display === 'none' || phoneChangeFields.style.display === '') {
            phoneChangeFields.style.display = 'block';
        } else {
            phoneChangeFields.style.display = 'none';
        }
    });

    // 휴대폰 번호 변경 취소 버튼 클릭 시 휴대폰 변경 필드 숨기기
    document.getElementById('cancelPhoneChange').addEventListener('click', function() {
        document.getElementById('phoneChangeFields').style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 새로운 핸드폰 번호 입력 필드와 인증번호 전송 버튼 요소 선택
    const newPhoneInput = document.getElementById('newPhone');
    const sendVerificationCodeButton = document.getElementById('sendVerificationCode');

    // 입력 필드에 입력이 있을 때 버튼을 활성화
    newPhoneInput.addEventListener('input', function() {
        if (newPhoneInput.value.trim() !== '') {
            sendVerificationCodeButton.disabled = false;
        } else {
            sendVerificationCodeButton.disabled = true;
        }
    });
});


