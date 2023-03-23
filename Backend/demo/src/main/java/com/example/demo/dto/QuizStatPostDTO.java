package com.example.demo.dto;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@Component
public class QuizStatPostDTO {
	
	@Autowired
	UserService userService;

	
	String LastScore;
//	User UserId;
	
	public QuizStatPostDTO() {
		super();
	}

	public QuizStatPostDTO(String LastScore) {
		super();
		this.LastScore = LastScore;
//		this.UserId = UserId;
	}

//	public User getUserId() {
//		return UserId;
//	}
//
//	public void setUserId(User userId) {
//		UserId = userId;
//	}

	public String getLastScore() {
		return LastScore;
	}

	public void setLastScore(String lastScore) {
		LastScore = lastScore;
	}

}