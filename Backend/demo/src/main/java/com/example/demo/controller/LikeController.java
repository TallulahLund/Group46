package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LikePostDTO;
import com.example.demo.dto.UserPostDTO;
import com.example.demo.model.Like;
import com.example.demo.model.User;
import com.example.demo.service.LikeService;

@RestController
public class LikeController
{
	@Autowired
	LikeService likeService;
	
	// Get All Likes
    @GetMapping("/like")
    public List<Like> getLikes() {
        return likeService.getLikes();
    }
    
    @PostMapping("/like")
    public ResponseEntity<Optional<Like>> addUser(@RequestBody LikePostDTO newLikeDTO) {
    	
    	if (newLikeDTO.getUser()==null ||
    		newLikeDTO.getTip() == null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }
    	
    	// Week 19 Lab
//    	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//    	
//    	User newUser = new User(newUserDTO.getName(), newUserDTO.getEmail(),
//    			encoder.encode(newUserDTO.getPassword()), newUserDTO.convertType()/*,
//    			newUserDTO.getTips()*/);
//    	userService.addUser(newUser);
    	
    	Like newLike = new Like(newLikeDTO.getUser(), newLikeDTO.getTip());
    	likeService.addLike(newLike);
    	
    	return new ResponseEntity<>(Optional.ofNullable(newLike),HttpStatus.CREATED);

    }
	 
    
    // Get Like by ID
    @GetMapping("/like/{id}")
    public Optional<Like> getLikeById(@PathVariable(value = "id") long Id) {
        return likeService.findByID(Id);
    }
    
    // Get Like by TipID and UserID
    @GetMapping("/like/findByTipIdAndUserId")
    public /*Optional<Like>*//*List<Like>*/long getLikeByTipIdAndUserId(@RequestParam Long tipId, @RequestParam Long userId)
    {
    	List<Like> lcll = likeService.findByTipIdAndUserId(tipId, userId);
//        return likeService.findByTipIdAndUserId(tipId, userId);
    	System.out.println("\n\n lcll=" + lcll + "....\n\n");
//    	return lcll;
    	return lcll.get(0).getId();
    }
    
    
    //Delete a Like by ID
    @CrossOrigin(origins = "http://localhost:8080")
    @DeleteMapping("/like/{id}")
    public String deleteUser(@PathVariable(value = "id") long Id) {
        likeService.deleteLike(Id);
        return "Like Deleted"; 
    }
    
    ////
    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/like/{id}", method = RequestMethod.OPTIONS)
    ResponseEntity<?> singularOptions() 
    {
       return ResponseEntity
           .ok()
           .allow(HttpMethod.GET, HttpMethod.DELETE, HttpMethod.PUT, HttpMethod.OPTIONS)
               .build();
    }
    ////
    
    
    //Get Likes by TipId
    @GetMapping("/like/findByTipId")
    public Optional<List<Like>> getLikesByTipId(@RequestParam Long tipId) {
    	return Optional.ofNullable(likeService.findByTipId(tipId));
    }
    
    //
    //Get count by TipId
    @GetMapping("like/countByTipId")
    public Long countByTipId(@RequestParam Long tipId)
    {
    	return likeService.countByTipId(tipId);
    }
    
}
