package com.example.demo.repository;

import com.example.demo.model.User;
import com.example.demo.model.QuizStat;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface QuizStatRepository extends CrudRepository<QuizStat, Long> {
	Optional<QuizStat> findByTestee(User UserID);
}
