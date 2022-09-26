package com.ssafy.nopo.common.auth.jwt;

import com.ssafy.nopo.db.entity.User;
import org.springframework.security.core.Authentication;

import javax.servlet.ServletException;
import java.io.UnsupportedEncodingException;
import java.util.Map;

public interface JwtUtil {

    String createAccessToken(Authentication authentication);

    String createTokenForRefresh(User user);

    String createRefreshToken();

    // 토큰 유효성 검사 이후 payload 반환
    Map<String, Object> get(String key) throws ServletException, UnsupportedEncodingException;

    boolean isUsable(String jwt);

}
