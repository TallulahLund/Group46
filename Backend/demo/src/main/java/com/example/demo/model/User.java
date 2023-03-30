// //package com.example.demo.model;
// //
// //import com.example.demo.UserType;
// //
// ////Let's create a simple User class
// ////In Spring Data we will look at how to persist this in a database
// //public class User {
// //
// //	int id;
// //	String name;
// //	String email;
// //	String password;
// //	UserType userType;
// //	
// //	public User(int id, String name, String email, String password, UserType userType) {
// //		super();
// //		this.id = id;
// //		this.name = name;
// //		this.email = email;
// //		this.password = password;
// //		this.userType = userType;
// //	}
// //	
// //	
// //	public int getId() {
// //		return id;
// //	}
// //
// //	public void setId(int id) {
// //		this.id = id;
// //	}
// //
// //	public String getEmail() {
// //		return email;
// //	}
// //
// //	public void setEmail(String email) {
// //		this.email = email;
// //	}
// //
// //
// //	public String getName() {
// //		return name;
// //	}
// //
// //
// //	public void setName(String name) {
// //		this.name = name;
// //	}
// //
// //
// //	public String getPassword() {
// //		return password;
// //	}
// //
// //
// //	public void setPassword(String password) {
// //		this.password = password;
// //	}
// //
// //
// //	public UserType getUserType() {
// //		return userType;
// //	}
// //
// //
// //	public void setUserType(UserType userType) {
// //		this.userType = userType;
// //	}
// //
// //
// //	@Override
// //	public String toString() {
// //		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", userType="
// //				+ userType + "]";
// //	}
// //	
// //	
// //}



// package com.example.demo.model;

// import java.io.Serializable;
// import java.util.Date;
// import java.util.List;
// import java.util.Set;

// import jakarta.persistence.*;
// import jakarta.validation.constraints.NotBlank;
// //import javax.persistence.Column;
// //import javax.persistence.Entity;
// //import javax.persistence.EntityListeners;
// //import javax.persistence.GeneratedValue;
// //import javax.persistence.GenerationType;
// //import javax.persistence.Id;
// //import javax.persistence.ManyToMany;
// //import javax.persistence.Table;
// //import javax.persistence.Temporal;
// //import javax.persistence.TemporalType;
// //import javax.validation.constraints.NotBlank;

// import org.springframework.data.annotation.CreatedDate;
// import org.springframework.data.annotation.LastModifiedDate;
// import org.springframework.data.jpa.domain.support.AuditingEntityListener;

// import com.example.demo.UserType;

// //Let's create a simple User class
// @Entity
// @Table(name = "Users2139677")
// @EntityListeners(AuditingEntityListener.class)
// public class User implements Serializable {
// 	private static final long serialVersionUID = 1L;

// 	@Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
// 	Long id;
	
// 	@NotBlank
// 	String name;
	
// 	@NotBlank
// 	@Column(unique=true)
// 	String email;
	
// 	@NotBlank
// 	String password;
	
// 	UserType userType;
	
	
// //	@NotBlank
// //	@OneToMany(cascade = CascadeType.ALL, mappedBy = "author")
// //	private List<Tip> tips;
	
// //	cascade = { CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REMOVE }
	
// 	@Column(nullable = false, updatable = false)
// 	@Temporal(TemporalType.TIMESTAMP)
// 	@CreatedDate
// 	private Date createdAt;

// 	@Column(nullable = false)
// 	@Temporal(TemporalType.TIMESTAMP)
// 	@LastModifiedDate
// 	private Date updatedAt;
	
	
// 	 public User() {
// 			super();
// 			// TODO Auto-generated constructor stub
// 	}
		
	 
// 	 public User(String name, String email, String password, UserType userType/*, List<Tip> tips*/) {
// 		super();
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 		this.userType = userType;
		
// 		//
// //		this.tips = tips;
// 	}
	
	
// 	public Long getId() {
// 		return id;
// 	}

// 	public void setId(Long id) {
// 		this.id = id;
// 	}

// 	public String getEmail() {
// 		return email;
// 	}

// 	public void setEmail(String email) {
// 		this.email = email;
// 	}


// 	public String getName() {
// 		return name;
// 	}


// 	public void setName(String name) {
// 		this.name = name;
// 	}


// 	public String getPassword() {
// 		return password;
// 	}


// 	public void setPassword(String password) {
// 		this.password = password;
// 	}


// 	public UserType getUserType() {
// 		return userType;
// 	}


// 	public void setUserType(UserType userType) {
// 		this.userType = userType;
// 	}

// 	//
// //	public List<Tip> getTips()
// //	{
// //		return tips;
// //	}
// //	public void setTips(List<Tip> tips)
// //	{
// //		this.tips = tips;
// //	}


// 	@Override
// 	public String toString() {
// 		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", userType="
// 				+ userType + "]";
// 	}
	
	
// }


//package com.example.demo.model;
//
//import com.example.demo.UserType;
//
////Let's create a simple User class
////In Spring Data we will look at how to persist this in a database
//public class User {
//
//	int id;
//	String name;
//	String email;
//	String password;
//	UserType userType;
//	
//	public User(int id, String name, String email, String password, UserType userType) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.email = email;
//		this.password = password;
//		this.userType = userType;
//	}
//	
//	
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//
//	public String getName() {
//		return name;
//	}
//
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//
//	public String getPassword() {
//		return password;
//	}
//
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//
//	public UserType getUserType() {
//		return userType;
//	}
//
//
//	public void setUserType(UserType userType) {
//		this.userType = userType;
//	}
//
//
//	@Override
//	public String toString() {
//		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", userType="
//				+ userType + "]";
//	}
//	
//	
//}



package com.example.demo.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


//Let's create a simple User class
@Entity
@Table(name = "Users2139677")
@EntityListeners(AuditingEntityListener.class)
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@NotBlank
	String name;
	
	@NotBlank
	@Column(unique=true)
	String email;
	
	@NotBlank
	String password;
	
	LocalDate dob; 
	
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;
	
	
	 public User() {
			super();
	}
	 
	 public User(String name, String email, String password, LocalDate dob) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.dob = dob;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
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


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", dob="
				+ dob + "]";
	}
	
	
}
