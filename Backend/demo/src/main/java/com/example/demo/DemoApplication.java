//// original
//
////package com.example.demo;
////
////import org.springframework.boot.SpringApplication;
////import org.springframework.boot.autoconfigure.SpringBootApplication;
////
////@SpringBootApplication
////public class DemoApplication {
////
////	public static void main(String[] args) {
////		SpringApplication.run(DemoApplication.class, args);
////	}
////
////}
//
//
//// added by me from week 10 lab
//package com.example.demo;
//import java.util.Arrays;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.annotation.Bean;
//
//// Week 17 Lab
//import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
//
//@SpringBootApplication
//@EnableJpaAuditing
//public class DemoApplication {
//	public static void main(String[] args) {
//		SpringApplication.run(DemoApplication.class, args);
//	}
//	
////	@Bean
////	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
////		return args -> {
////			System.out.println("Let's inspect the beans provided by Spring Boot:");
////			String[] beanNames = ctx.getBeanDefinitionNames();
////			Arrays.sort(beanNames);
////			for (String beanName : beanNames) {
////				System.out.println(beanName);
////			}
////		};
////	}
//}



package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
}
