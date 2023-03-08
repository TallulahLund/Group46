package com.example.demo.repository;

import com.example.demo.model.Tip;
import com.example.demo.model.User;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface TipRepository extends CrudRepository<Tip,Long>
{
//	Tip findByAuthor(User authorID);
	List<Tip> findByAuthor(User authorID);
}
