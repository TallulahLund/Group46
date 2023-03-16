package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Petition;

public interface PetitionRepository extends CrudRepository<Petition,Long>{

	Petition findByEmail(String email);
	Petition findByPtitle(String title);
}

