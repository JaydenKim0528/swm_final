package kr.co.swm.member.controller;

import jakarta.validation.Valid;
import kr.co.swm.member.model.dto.MemberDTO;
import kr.co.swm.member.model.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor //final로 선언된 필드가 있다면, 이 필드들을 초기화하는 생성자를 자동으로 생성
@Controller
public class MemberController {

    private final MemberService memberService;

    // 회원가입(Form) 페이지 이동
    @GetMapping("/signForm")
    public String showSignForm(Model model) {
        // th:object로 바인딩되어 폼 필드와 연결
        model.addAttribute("memberDTO", new MemberDTO());
        return "/member/sign";
    }


    // 회원가입
    @PostMapping("/signForm")
    public String signUp(@Valid MemberDTO memberDTO) {
        int result = memberService.setSignup(memberDTO);
        return "redirect:/member/sign";
    }


}
