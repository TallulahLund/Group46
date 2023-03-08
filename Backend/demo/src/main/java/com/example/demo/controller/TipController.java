package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.swing.JOptionPane;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TipPostDTO;
import com.example.demo.dto.UserPostDTO;
import com.example.demo.model.Tip;
import com.example.demo.model.User;
import com.example.demo.service.TipService;
import com.example.demo.service.UserService;

@RestController
public class TipController
{
	
	@Autowired
	TipService tipService;


	// Get All Tips
    @GetMapping("/tip")
    public List<Tip> getTips()
    {
        return tipService.getTips();
    }
    
    @PostMapping("/tip")
    public ResponseEntity<Optional<Tip>> addTip(@RequestBody TipPostDTO newTipDTO) {
    	System.out.println("\n\n\nbefore if null\n\n\n");
    	if (newTipDTO.getTipCategory()==null || 
    		newTipDTO.getTipString()==null/* ||
    		newTipDTO.getAuthor()==null*/)
    	{
//    		JOptionPane.showMessageDialog(null, "in if null");
    		System.out.println("\n\n\nin if null\n\n\n");
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }
    	
    	Tip newTip = new Tip(newTipDTO.getTipCategory(), newTipDTO.getTipString(), newTipDTO.getAuthor());
//    	Tip newTip = new Tip(newTipDTO.getTipCategory(), newTipDTO.getTipString(), newTipDTO.getAuthorID());
    	tipService.addTip(newTip);
    	return new ResponseEntity<>(Optional.ofNullable(newTip),HttpStatus.CREATED);

    }
    
    // Get Tip by ID
    @GetMapping("/tip/{id}")
    public Optional<Tip> getTipById(@PathVariable(value = "id") long Id)
    {
        return tipService.findByID(Id);
    }
    
    //Delete a Tip by ID
    ////
    @CrossOrigin(origins = "http://localhost:8080")
    ////
    @DeleteMapping("/tip/{id}")
    public String deleteTip(@PathVariable(value = "id") long Id)
    {
        tipService.deleteTip(Id);
        return "Tip Deleted"; 
    }
    
    ////
    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/tip/{id}", method = RequestMethod.OPTIONS)
    ResponseEntity<?> singularOptions() 
    {
       return ResponseEntity
           .ok()
           .allow(HttpMethod.GET, HttpMethod.DELETE, HttpMethod.PUT, HttpMethod.OPTIONS)
               .build();
    }
    ////
    
    ////
    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/tip/{id}", method = RequestMethod.PUT)
//    @PutMapping("/tip/{id}")
    public /*ResponseEntity<Optional<Tip>>*/ String editTip(@PathVariable(value = "id") long Id, @RequestBody TipPostDTO updatedTipDTO)
    {
//    	System.out.println("\n\nedit Tip - before if null\n\n");
//    	if (updatedTipDTO.getTipCategory()==null || 
//    		updatedTipDTO.getTipString()==null/* ||
//    		newTipDTO.getAuthor()==null*/)
//    	{
////        		JOptionPane.showMessageDialog(null, "in if null");
//    		System.out.println("\n\nedit tip - in if null\n\n");
//            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
//        }
    	
    	
//    	
    	Tip updatedTip = new Tip(updatedTipDTO.getTipCategory(), updatedTipDTO.getTipString(), updatedTipDTO.getAuthor());
////        	Tip newTip = new Tip(newTipDTO.getTipCategory(), newTipDTO.getTipString(), newTipDTO.getAuthorID());
////        	tipService.addTip(newTip);
//    	
    	tipService.editTip(Id, updatedTip);
//    	
//    	return new ResponseEntity<>(Optional.ofNullable(updatedTip),HttpStatus.OK);
    	
    	
//    	tipService.editTip(Id);
    	return "Tip Updated";
    	
//    	return tipRepository.update(Id, updatedTipDTO)
//                .onSuccessDo(e -> ResponseEntity.noContent().build())
//                .onFailureDo(e -> {
//                    if (e.exception() instanceof CustomerNotFound) {
//                        return ResponseEntity.notFound().build();
//                    } else {
//                        return ResponseEntity.internalServerError().build();
//                    }
//                }).response();
    }
    ////
    
    
    //Get Tip by Author
    @GetMapping("/tip/findByAuthor")								// meant to return list of tips not just 1 unique
    public Optional<List<Tip>>/*Optional<Tip>*/ getUserByAuthor(@RequestParam User authorID)
    {
    	return Optional.ofNullable(tipService.findByAuthor(authorID));
    }
}
