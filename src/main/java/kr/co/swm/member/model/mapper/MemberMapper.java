package kr.co.swm.member.model.mapper;

import kr.co.swm.member.model.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {

    public int setSignUp(MemberDTO memberDTO);
}
