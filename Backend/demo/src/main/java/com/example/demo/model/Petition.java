package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.*;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.example.demo.MonthlyEmail;

//Let's create a simple User class
//In Spring Data we will look at how to persist this in a database

@Entity
@Table(name = "Petitions_2101827")
@EntityListeners(AuditingEntityListener.class)
public class Petition implements Serializable {

private static final long serialVersionUID = 1L; 
	
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	/*@NotBlank*/
	String Fname;
	
	/*@NotBlank*/
	String Lname;
  
  /*@NotBlank*/
  @Column(unique=true)
	String email;
	
  /*@NotBlank*/
	String birthday;
	
//  @NotBlank
	String ptitle;
	
	MonthlyEmail ans;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createAt;
	
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updateAt;

	
	public Petition() {
		
		super();
	}
	
	public Petition (String Fname,String Lname, String email, String birthday, MonthlyEmail ans, String ptitle) {
		super();
		this.Fname = Fname;
		this.Lname = Lname;
		this.email = email;
		this.birthday = birthday;
		this.ans = ans;
		this.ptitle = ptitle;
		
	}
	
	public void setPetitionID(Long id) {
		
		this.id = id;
	}
	
	public Long getPetitionID() {
		
		return id;
	}
	
	public void setFirstName(String Fname) {
		
		this.Fname = Fname;
	}
	
	public String getFirstName() {
		
		return Fname;
	}
	
	
  public void setLastName(String Lname) {
		
		this.Lname = Lname;
	}
	
  
	public String getLastName() {
		
		return Lname;
	}
	
	
	public void setEmail(String email) {
		
		this.email = email;
	}
	
	public String getEmail () {
		
		return email;
	}
	
	public void setBirthday(String birthday) {
		
		this.birthday = birthday;
	}
	
	public String getBirthday() {
		
		return birthday;
	}
	
	public void setMonthlyEmail(MonthlyEmail ans) {
		
		this.ans = ans;
	}
	
	public MonthlyEmail getMonthlyEmail() {
		
		return ans;
	}
	
	public void setPTitle(String ptitle) {
		
		this.ptitle = ptitle;
	}
	
	public String getPTitle() {
		
		return ptitle;
	}
	
	@Override
	public String toString() {
		String data = "[" + "ID=" + id + " FirstName=" + Fname + " LastName=" + Lname + " Email=" + email + " Birth=" + birthday + " MonthEmail=" + ans +
				" Title=" + ptitle + "]";
		
		return data;
	}
	
}

