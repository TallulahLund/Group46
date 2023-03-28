package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Petition;
import com.example.demo.repository.PetitionRepository;


@Service
public class PetitionService {

	
	@Autowired
	PetitionRepository petitionRepository;
	

	
	public PetitionService() {
		super();

	}
		
	public List<Petition> getPetitions() {
		return (List<Petition>) petitionRepository.findAll();
	}

    public int [] getPetitionSigns(){
    	
    	List <Petition> petitions = getPetitions();
    	
    	int [] signs = new int [3];
    	signs[0] = 0;
    	signs [1] = 0;
    	signs [2] = 0;
    	
        for(int i =0; i<petitions.size();i++) {
        	
        	if(petitions.get(i).getPTitle().compareTo("petition-1")==0)
        		signs[0] += 1;
        	else if(petitions.get(i).getPTitle().compareTo("petition-2")==0)
        		signs[1] += 1;
        	else
        		signs[2] += 1;
        	
        }
        
        return signs;
     }
	
	public void addPetition(Petition newPetition) {
		
		petitionRepository.save(newPetition);
	}
	
	
	public Optional<Petition> findByID(Long id) {

		return petitionRepository.findById(id);
	}
	
	
	public void deletePetition(Long id) {
	
		Petition petition = petitionRepository.findById(id)
		.orElseThrow(()-> new ResourceNotFoundException ("Petition", "id", id));
		
		petitionRepository.delete(petition);
	}
		
		
	public Petition findByEmail(String email) {
		
		return petitionRepository.findByEmail(email);
	}
	
	public Petition findByPtitle (String title) {
		
		return petitionRepository.findByPtitle(title);
	}
}

