package org.jjhotel.back.utilities.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
  private final LoginCheckInterceptor loginCheckInterceptor;

  public WebConfig(LoginCheckInterceptor loginCheckInterceptor) {
    this.loginCheckInterceptor = loginCheckInterceptor;
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(loginCheckInterceptor)
        .addPathPatterns("")
        .excludePathPatterns("/**"); //차후 화면 리스트업해서 수정 필요
  }
}
