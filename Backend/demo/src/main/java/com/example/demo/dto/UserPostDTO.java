// package com.example.demo.dto;

// import com.example.demo.UserType;

// public class UserPostDTO {
// 	String name;
// 	String email;
// 	String password;
// 	Boolean userType[];
	
// 	public UserPostDTO(String name, String email, String password, Boolean[] buyer_seller) {
// 		super();
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 		this.userType = buyer_seller;
// 	}
	
// 	public String getName() {
// 		return name;
// 	}

// 	public void setName(String name) {
// 		this.name = name;
// 	}

// 	public String getEmail() {
// 		return email;
// 	}

// 	public void setEmail(String email) {
// 		this.email = email;
// 	}

// 	public Boolean[] getUserType() {
// 		return userType;
// 	}

// 	public void setUserType(Boolean[] userType) {
// 		this.userType = userType;
// 	}
	

// 	public String getPassword() {
// 		return password;
// 	}

// 	public void setPassword(String password) {
// 		this.password = password;
// 	}

// 	public UserType convertType() {
		
// 		if(this.userType == null || (this.userType[0]==false && this.userType[1]==false))
// 			return UserType.NONE;
		
// 		if(this.userType[0]==true && this.userType[1]==false)
// 			return UserType.BUYER;
		
// 		if(this.userType[0] == false && this.userType[1]== true)
// 			return UserType.SELLER;
	
// 		return UserType.BOTH;
		
		
// 	}
// }


package com.example.demo.dto;

import java.time.LocalDate;

public class UserPostDTO {
	String name;
	String email;
	String password;
	LocalDate dob;
	
	public UserPostDTO(String name, String email, String password, LocalDate dob) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.dob = dob;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
}
