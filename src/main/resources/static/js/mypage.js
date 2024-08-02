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


// 탈퇴시 기타 사유 텍스트 박스 유효성 검사
document.addEventListener('DOMContentLoaded', function() {
    // 'otherReason' 텍스트 영역, 'charCount' 카운터 문구, 'errorMessage' 에러 메시지 요소 가져오기
    var otherReason = document.getElementById('otherReason');
    var charCount = document.getElementById('charCount');
    var errorMessage = document.getElementById('errorMessage');

    otherReason.addEventListener('input', function () {
        // 입력된 텍스트의 길이 계산
        var textLength = this.value.length;
        // 현재 문자 수와 최대 문자 수를 표시
        charCount.textContent = textLength + " / 250";

        // 문자 수가 250자를 초과하면 에러 메시지를 표시하고 추가 입력 방지
        if (textLength > 250) {
            errorMessage.style.display = 'block';
            // 초과된 문자 삭제
            this.value = this.value.substring(0, 250);
            // 문자 수를 다시 계산하고 표시
            charCount.textContent = "250 / 250";
        } else {
            // 문자 수가 250자 이내면 에러 메시지를 숨김
            errorMessage.style.display = 'none';
        }
    });

    // 폼 제출 이벤트 리스너 추가
    document.getElementById('withdrawalForm').addEventListener('submit', function(event) {
        // 'otherReason' 텍스트 영역의 값 가져오기
        var otherReasonText = otherReason.value;
        // 텍스트의 길이가 250자를 초과하면 폼 제출 방지 및 경고 메시지 표시
        if (otherReasonText.length > 250) {
            event.preventDefault(); // 폼 제출 방지
            alert("기타 사유는 250자 이내로 입력해 주세요.");
        }
    });
});


