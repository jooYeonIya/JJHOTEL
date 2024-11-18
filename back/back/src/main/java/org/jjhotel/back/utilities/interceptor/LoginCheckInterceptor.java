//package org.jjhotel.back.utilities.interceptor;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import jakarta.servlet.http.HttpSession;
//import org.jjhotel.back.constants.Constant;
//import org.springframework.stereotype.Component;
//import org.springframework.web.servlet.HandlerInterceptor;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@Component
//public class LoginCheckInterceptor implements HandlerInterceptor {
//  @Override
//  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//    HttpSession session = request.getSession(false);
//    if (session == null || session.getAttribute(Constant.GUEST_SESSION) == null) {
//      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//      response.setContentType("application/json");
//      return false;
//    }
//
//    return true;
//  }
//}
