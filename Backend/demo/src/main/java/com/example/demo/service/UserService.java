//package com.example.demo.service;
//
//import java.util.ArrayList;
//import java.util.Iterator;
//import java.util.List;
//
//import org.springframework.stereotype.Service;
//
//import com.example.demo.UserType;
//import com.example.demo.model.User;
//
//@Service
//public class UserService {
//	static List <User> userList;
//	int currentID;
//
//	public UserService() {
//		super();
//		// TODO Auto-generated constructor stub
//		userList = new ArrayList<User>();
//		currentID=0;
//		initList();
//	
//	}
//	
//	public void initList() {
//		User user1 = new User(1, "Bob","bob@sample.com", "bob_pass", UserType.BUYER);
//		User user2 = new User(2, "Alice", "alice@sample.com", "alice_pass", UserType.SELLER);
//		User user3 = new User(3, "Carol", "carol@sample.com", "carol_pass", UserType.BOTH);
//		userList.add(user1);
//		userList.add(user2);
//		userList.add(user3);
//		currentID=3;
//	}
//	
//	public List<User> getUsers() {
//		return userList;
//	}
//
//	public int getCurrentID() {
//		return currentID;
//	}
//
//	public void setCurrentID(int currentID) {
//		this.currentID = currentID;
//	}
//	
//	public int incCurrentID() {
//		currentID += 1;
//		return currentID;
//	}
//	
//	public void addUser(User newUser) {
//		userList.add(newUser);
//	}
//	
//	public User findByID(int id) {
//		 Iterator<User> it = userList.iterator();
//		 while (it.hasNext()) {
//			 User user = it.next();
//			 if (user.getId() == id)
//				 return user;
//		 }
//		 
//		 return null;
//	}
//	
//	public boolean deleteUser(int id) {
//		User user = findByID(id);
//		return userList.remove(user);
//	}
//	
//	public User findByEmail(String email) {
//		Iterator<User> it = userList.iterator();
//		 while (it.hasNext()) {
//			 User user = it.next();
//			 if (user.getEmail().contentEquals(email))
//				 return user;
//		 }
//		 return null;
//	}
//
//}



package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.exception.ResourceNotFoundException;

@Service
public class UserService {
	@Autowired
    UserRepository userRepository;
	
	public UserService() {
		super();
	}
	
	
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}
	
	public void addUser(User newUser) {
		userRepository.save(newUser);
	}
	
	public Optional<User> findByID(Long id) {
		 return userRepository.findById(id);
	}
	
	public void deleteUser(Long id) {
		User user = userRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
		userRepository.delete(user);
	}
	
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}
