package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.QuizStat;
import com.example.demo.model.User;
import com.example.demo.repository.QuizStatRepository;

import com.example.demo.exception.ResourceNotFoundException;

@Service
public class QuizStatService {

	@Autowired
	QuizStatRepository quizStatRepository;
	
	public QuizStatService() {
		super();
	}
	
	public List<QuizStat> getQuizStat(){
		return (List<QuizStat>) quizStatRepository.findAll();
	}
	
	public void addStats(QuizStat newQuizStat) {
		quizStatRepository.save(newQuizStat);
	}
	
	public Optional<QuizStat> findByID(Long id)
	{
		 return quizStatRepository.findById(id);
	}
	
	public Optional<QuizStat> findByTestee(User UserID){
		return quizStatRepository.findByTestee(UserID);
	}
	
	public void editStat(Long id, QuizStat updatedStat) {
		QuizStat quizStat = quizStatRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("QuizStat", "id", id));
		quizStat.setLastScore(updatedStat.getLastScore());
		
		quizStatRepository.save(quizStat);
	}
}
