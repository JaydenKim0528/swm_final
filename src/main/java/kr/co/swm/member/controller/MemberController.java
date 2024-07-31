package kr.co.swm.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MemberController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/sign.do")
    public String register() {
        return "/member/sign";
    }

    @GetMapping("/mypage.do")
    public String mypage() {
        return "/member/mypage";
    }


}
