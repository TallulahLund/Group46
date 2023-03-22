package com.example.demo.dto;

import com.example.demo.MonthlyEmail;

public class PetitionPostDTO {

	String Fname;
	String Lname;
	String email;
	String birthday;
	Boolean monthlyemail;
	String ptitle;
		
	public PetitionPostDTO(String Fname, String Lname, String email, String birthday ,Boolean monthlyemail, String petitionname) {
		super();
		this.Fname =Fname;
		this.Lname =Lname;
		this.email = email;
		this.birthday = birthday;
		this.monthlyemail = monthlyemail;
		this.ptitle = petitionname;
	}
	
	
	public String getFirstName() {
		return Fname;
	}

	
	public void setFirstName(String Fname) {
		this.Fname = Fname;
	}

	
	public String getLastName() {
		return Lname;
	}

	
	public void setLastName(String Lname) {
		this.Lname = Lname;
	}
	
	
	public String getEmail() {
		return email;
	}

	
	public void setEmail(String email) {
		this.email = email;
	}

	
	public Boolean getMonthEmail() {
		return monthlyemail;
	}

	
	public void setMonthEmail(Boolean monthlyemail) {
		this.monthlyemail = monthlyemail;
	}
	

	public String getBirthday() {
		return birthday;
	}

	
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	
	
	public String getPTitle () {
		
		return ptitle;
	}
	
	
	public void setPTitle (String petitionname) {
		
		this.ptitle = petitionname;
	}

	
	public MonthlyEmail Useranswer() {
		
		if(this.monthlyemail==null || this.monthlyemail==false)
			return MonthlyEmail.NO;
		
		return MonthlyEmail.YES;
		
	}

	
}
