package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.QuestionService;
import com.example.demo.model.Question;

@RestController  
public class QuestionController {
	
	@Autowired
	QuestionService questionService;
	
	@GetMapping("/questions")
	public List<Question> getQuestions() {
		return questionService.getQuestions();
	}

}