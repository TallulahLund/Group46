package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.demo.security.JWTAuthenticationFilter;
import com.example.demo.security.LoginFilter;

import static org.springframework.security.config.Customizer.withDefaults;


import java.util.Arrays;

@Configuration
//@EnableWebSecurity
public class SecurityConfiguration {
	@Autowired
	 private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
	    auth.userDetailsService(userDetailsService)
	    .passwordEncoder(new BCryptPasswordEncoder());
	}
	
	
	@Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http
			.csrf(csrf -> csrf.disable())
			.cors()
			.and()
			.sessionManagement()
	        .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http
//		.authorizeRequests() // deprecated
		.authorizeHttpRequests()
//		.antMatchers(HttpMethod.POST, "/user") // doesn't work because of deprecated
		.requestMatchers(HttpMethod.POST, "/user","/petition", "/donations", "/stat")//, "/tip")//(HttpMethod.POST, "/user", "/tip")//.requestMatchers( HttpMethod.GET, "/tip")
//	    .and()
//	    .requestMatchers(HttpMethod.GET, "/tip")
		.permitAll()
	    .and()
		.authorizeHttpRequests()
	    .requestMatchers(HttpMethod.GET, "/tip", "/like/findByTipId", "/questions", "/stat")
		.permitAll()
	    .and()
//	    .authorizeRequests()  // deprecated
	    .authorizeHttpRequests()
		.anyRequest().authenticated()
		.and()
		.addFilterBefore(new LoginFilter("/login", authenticationManager(http.getSharedObject(AuthenticationConfiguration.class))),
				UsernamePasswordAuthenticationFilter.class)
		.addFilterBefore(new JWTAuthenticationFilter(), 
				UsernamePasswordAuthenticationFilter.class);
		
//		http.antMatcher("/tip")
//		.httpBasic()
//		.and()
		
		

		return http.build();
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				.allowedOrigins("http://localhost:3000", "http://localhost:3001");
			}
		};
	}
	

	/*
	//If you want to configure an InMemory User for testing
	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails user = User
				.withUsername("user")
				.password(passwordEncoder().encode("password"))
				.roles("USER")
				.build();
		return new InMemoryUserDetailsManager(user);
	}

	@Bean
	   public PasswordEncoder passwordEncoder() {
	       return new BCryptPasswordEncoder();
	   } 
	   */
}

