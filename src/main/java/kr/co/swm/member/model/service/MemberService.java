package kr.co.swm.member.model.service;

import kr.co.swm.member.model.dto.MemberDTO;
import kr.co.swm.member.model.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MemberService {
    private final PasswordEncoder passwordEncoder;
    private final MemberMapper memberMapper;

    public int setSignup(MemberDTO memberDTO) {
        String userPwd = memberDTO.getUserPwd();
        String userConfirmPwd = memberDTO.getConfirmPassword();

        if(userPwd.equals(userConfirmPwd)) {
            // 비밀번호와 비밀번호 확인이 일치하는지 체크
            String encodedPassword = passwordEncoder.encode(userPwd);
            // 암호화 비밀번호 DTO에 저장
            memberDTO.setUserPwd(encodedPassword);

            return memberMapper.setSignUp(memberDTO);
        }
        else {
            return 0;
        }

    }

}
