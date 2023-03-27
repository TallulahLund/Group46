package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "QuizStatistics")
@EntityListeners(AuditingEntityListener.class)
public class QuizStat implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	Long id;
	
	@NotBlank
	String LastScore;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "userId", referencedColumnName = "id")
	User testee;

	public QuizStat() {
		super();
		// TODO Auto-generated constructor stub
	}

	//Possibly remove constructor
	public QuizStat(String lastScore, User testee) {
		super();
		this.LastScore = lastScore;
		this.testee = testee;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLastScore() {
		return LastScore;
	}

	public void setLastScore(String lastScore) {
		LastScore = lastScore;
	}
	
	public User getTestee() {
		return testee;
	}

	public void setTestee(User testee) {
		this.testee = testee;
	}

	@Override
	public String toString() {
		return "QuizStat [id=" + id + ", LastScore=" + LastScore + "]";
	}
	
	
}
