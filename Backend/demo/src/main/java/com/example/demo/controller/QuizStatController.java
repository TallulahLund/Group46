package com.example.demo.controller;

import com.example.demo.model.QuizStat;
import com.example.demo.model.User;
import com.example.demo.service.QuizStatService;
import com.example.demo.service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.QuizStatPostDTO;

@RestController
public class QuizStatController {

	@Autowired
	QuizStatService quizStatService;
	
	@Autowired
	UserService userService;
	
	@GetMapping("/stat")
	public List<QuizStat> getQuizStat(){
		return quizStatService.getQuizStat();
	}
	
	@PostMapping("/stat/{id}")
	public ResponseEntity<Optional<QuizStat>> addStat(@PathVariable(value = "id") long Id, @RequestBody QuizStatPostDTO newQuizStatDTO){
		if(newQuizStatDTO.getLastScore()==null || userService.findByID(Id) == null){
			return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
		}
		QuizStat newQuizStat = new QuizStat();
		
		
		newQuizStat.setLastScore(newQuizStatDTO.getLastScore());
		User optionalUser = userService.findByID(Id).get();
		newQuizStat.setTestee(optionalUser);
		quizStatService.addStats(newQuizStat);
		return new ResponseEntity<>(Optional.ofNullable(newQuizStat), HttpStatus.CREATED);
	}
	
	@GetMapping("/stat/{id}")
    public Optional<QuizStat> getTipById(@PathVariable(value = "id") long Id)
    {
        return quizStatService.findByID(Id);
    }
	
//	@CrossOrigin(origins = "http://localhost:8080")
//	@RequestMapping(value = "/stat/{id}", method = RequestMethod.PUT)
//	public String editStat(@PathVariable(value = "id") long Id, @RequestBody QuizStatPostDTO newQuizStatDTO) {
//		if(newQuizStatDTO.getLastScore()==null || userService.findByID(Id) == null){
//			return "Failed Update";
//		}
//		QuizStat updatedQuizStat = new QuizStat();
//		User optionalUser = userService.findByID(Id).get();
//		updatedQuizStat.setLastScore(newQuizStatDTO.getLastScore());
//		updatedQuizStat.setTestee(optionalUser);
//		quizStatService.editStat(Id, updatedQuizStat);
//		
//		return "Stats Updated";
//	}
	
	@GetMapping("stat/findByUser/{id}")
	public Optional<QuizStat> getStatByUser(@PathVariable(value = "id") long id){
		if(userService.findByID(id) == null) {
			return Optional.ofNullable(null);
		}
		User optionalUser = userService.findByID(id).get();
		return quizStatService.findByTestee(optionalUser);
	}
}
