package com.example.demo.security;

import java.io.IOException;

//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;

//
import jakarta.servlet.FilterChain;
//import jakarta.servlet.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

public class JWTAuthenticationFilter extends GenericFilterBean {
  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
    Authentication authentication = JWTService.getAuthentication((HttpServletRequest)request);
    
    SecurityContextHolder.getContext().
        setAuthentication(authentication);
    filterChain.doFilter(request, response);
  }

//@Override
//public void doFilter(jakarta.servlet.ServletRequest request, jakarta.servlet.ServletResponse response,
//		jakarta.servlet.FilterChain chain) throws IOException, jakarta.servlet.ServletException {
//	// TODO Auto-generated method stub
//	
//}
}