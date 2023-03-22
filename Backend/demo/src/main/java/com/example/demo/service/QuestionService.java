package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.QuestionRepository;
import com.example.demo.model.Question;

@Service
public class QuestionService {
	@Autowired
	QuestionRepository questionRepository;

	public QuestionService() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public List<Question> getQuestions(){
		return (List<Question>) questionRepository.findAll();
	}
}
