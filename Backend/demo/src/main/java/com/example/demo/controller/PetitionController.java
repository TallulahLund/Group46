package com.example.demo.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PetitionPostDTO;
import com.example.demo.model.Petition;
import com.example.demo.service.PetitionService;



@RestController 
public class PetitionController {

	
	@Autowired
	PetitionService petitionService;

	
	// Get All Users
	@GetMapping("/petition")
	public List<Petition> getPetitions() {
		
	    return petitionService.getPetitions();
	}
	
	
	@PostMapping("/petition")
    public ResponseEntity<Optional<Petition>> addPetition(@RequestBody PetitionPostDTO newPetitionDTO) {
    	
    	if (newPetitionDTO.getFirstName()==null ||
    		newPetitionDTO.getLastName()==null ||
    		newPetitionDTO.getEmail()==null  ||
    		newPetitionDTO.getBirthday()==null ||
    		newPetitionDTO.getMonthEmail()== null ||
    		newPetitionDTO.getPTitle()==null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }
    	
    	Petition newPetition = new Petition(newPetitionDTO.getFirstName(), newPetitionDTO.getLastName(),
    			newPetitionDTO.getEmail(), newPetitionDTO.getBirthday(), newPetitionDTO.Useranswer(), newPetitionDTO.getPTitle());
    	
    	petitionService.addPetition(newPetition);
    	
    	return new ResponseEntity<>(Optional.ofNullable(newPetition),HttpStatus.CREATED);
    }
	
	
    // Get User by ID
    @GetMapping("/petition/{id}")
    public Optional<Petition> getPetitionById(@PathVariable(value = "id") long Id) {
    	
        return petitionService.findByID(Id);
    }
    
    
    //Delete a User by ID
    @DeleteMapping("/petition/{id}")
    public String deletePetition(@PathVariable(value = "id") long Id) {
    	
    	petitionService.deletePetition(Id);
    	
    	return "Petition Deleted";
    }
    
    
    //Get User by Email
    @GetMapping("/petition/findByEmail")
    public Optional<Petition> getPetitionByEmail(@RequestParam String email) {
    	
    	return Optional.ofNullable(petitionService.findByEmail(email));
    }
    
    
    //Get User by Petition Title
    @GetMapping("/petition/findPetition")
    public Optional<Petition> getPetitionByTitle(@RequestParam String title){
    	
    	return Optional.ofNullable(petitionService.findByPtitle(title));
    }
	
	
	
}
