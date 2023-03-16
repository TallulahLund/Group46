package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Questions2020253")
@EntityListeners(AuditingEntityListener.class)
public class Question implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@NotBlank
	String question;
	
	@NotBlank
	String choiceA;
	
	@NotBlank
	String choiceB;
	
	@NotBlank
	String choiceC;
	
	@NotBlank
	String choiceD;
	
	@NotBlank
	String correctAnswer;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;
	
	public Question() {
		super();
	}
	
	public Question(String question, String correctAnswer, String choiceA, String choiceB, String choiceC, String choiceD) {
		super();
		this.question = question;
		this.choiceA = choiceA;
		this.choiceB = choiceB;
		this.choiceC = choiceC;
		this.choiceD = choiceD;
		this.correctAnswer = correctAnswer;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getQuestion() {
		return question;
	}


	public void setQuestion(String question) {
		this.question = question;
	}


	public String getChoiceA() {
		return choiceA;
	}


	public void setChoiceA(String choiceA) {
		this.choiceA = choiceA;
	}


	public String getChoiceB() {
		return choiceB;
	}


	public void setChoiceB(String choiceB) {
		this.choiceB = choiceB;
	}


	public String getChoiceC() {
		return choiceC;
	}


	public void setChoiceC(String choiceC) {
		this.choiceC = choiceC;
	}


	public String getChoiceD() {
		return choiceD;
	}


	public void setChoiceD(String choiceD) {
		this.choiceD = choiceD;
	}


	public String getCorrectAnswer() {
		return correctAnswer;
	}


	public void setCorrectAnswer(String correctAnswer) {
		this.correctAnswer = correctAnswer;
	}


	@Override
	public String toString() {
		return "Question [id=" + id + ", question=" + question + ", choiceA=" + choiceA + ", choiceB=" + choiceB
				+ ", choiceC=" + choiceC + ", choiceD=" + choiceD + ", correctAnswer=" + correctAnswer + "]";
	}


	
}
