// package com.example.demo.model;

// import java.io.Serializable;
// import java.util.Date;
// import java.util.Set;

// import jakarta.persistence.*;
// import jakarta.validation.constraints.NotBlank;

// import org.springframework.data.annotation.CreatedDate;
// import org.springframework.data.annotation.LastModifiedDate;
// import org.springframework.data.jpa.domain.support.AuditingEntityListener;

// import com.example.demo.UserType;

// // Tip class
// @Entity
// @Table(name = "Tips2139677test2")
// @EntityListeners(AuditingEntityListener.class)
// public class Tip implements Serializable
// {
// 	private static final long serialVersionUID = 1L;
	
// 	@Id
// 	@GeneratedValue(strategy = GenerationType.IDENTITY)
// 	Long id;
	
// 	@NotBlank
// 	String tipCategory;
	
// 	@NotBlank
// //	@Column(unique = true)			- unique?
// 	String tipString;
	
// //	@NotBlank
// ////	@OneToOne(cascade = CascadeType.ALL)
// //	@ManyToOne(fetch = FetchType.LAZY)
// //	@JoinColumn(name = "author")
// //	private User author;
	
	
// 	@ManyToOne(fetch = FetchType.EAGER/*LAZY*/, cascade = CascadeType.DETACH)
// 	@JoinColumn(name = "authorId", referencedColumnName = "id")
// //	Long authorID;
// 	User author;
// //	String authorID;
	
	
// //	@NotBlank
// //	int likes = 0;
// //	
// //	@NotBlank
// //	boolean reported = false;
	
// 	@Column(nullable = false, updatable = false)
// 	@Temporal(TemporalType.TIMESTAMP)
// 	@CreatedDate
// 	private Date createdAt;

// 	@Column(nullable = false)
// 	@Temporal(TemporalType.TIMESTAMP)
// 	@LastModifiedDate
// 	private Date updatedAt;
	
	
// 	public Tip()
// 	{
// 		super();
// 	}
	
// 	public Tip(String tipCategory, String tipString, User author)
// 	{
// 		super();
// 		this.tipCategory = tipCategory;
// 		this.tipString = tipString;
// 		this.author = author;
// 	}
	
// //	public Tip(String tipCategory, String tipString, Long authorID)
// //	{
// //		super();
// //		this.tipCategory = tipCategory;
// //		this.tipString = tipString;
// //		this.authorID = authorID;
// //	}
	
// 	public Long getId()
// 	{
// 		return id;
// 	}
// 	public void setId(Long id)
// 	{
// 		this.id = id;
// 	}
	
// 	public String getTipCategory()
// 	{
// 		return tipCategory;
// 	}
// 	public void setTipCategory(String tipCategory)
// 	{
// 		this.tipCategory = tipCategory;
// 	}
	
// 	public String getTipString()
// 	{
// 		return tipString;
// 	}
// 	public void setTipString(String tipString)
// 	{
// 		this.tipString = tipString;
// 	}
	
// 	public User getAuthor()
// 	{
// 		return author;
// 	}
// 	public void setAuthor(User author)
// 	{
// 		this.author = author;
// 	}
	
// //	public Long getAuthorID()
// //	{
// //		return authorID;
// //	}
// //	public void setAuthor(Long authorID)
// //	{
// //		this.authorID = authorID;
// //	}
	
// 	public Date getCreatedAt()
// 	{
// 		return createdAt;
// 	}
// 	public void setCreatedAt(Date createdAt)
// 	{
// 		this.createdAt = createdAt;
// 	}
	
// 	public Date getUpdatedAt()
// 	{
// 		return updatedAt;
// 	}
// 	public void setUpdatedAt(Date updatedAt)
// 	{
// 		this.updatedAt = updatedAt;
// 	}
	
// 	@Override
// 	public String toString() {
// 		return "Tip [id=" + id + ", tipCategory=" + tipCategory + ", tipString=" + tipString + ", author=" + author + "]";
// //		return "Tip [id=" + id + ", tipCategory=" + tipCategory + ", tipString=" + tipString + ", authorID=" + authorID + "]";
// 	}
// }


package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.example.demo.UserType;

// Tip class
@Entity
@Table(name = "Tips2139677")
@EntityListeners(AuditingEntityListener.class)
public class Tip implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@NotBlank
	String tipCategory;
	
	@NotBlank
//	@Column(unique = true)			- unique?
	String tipString;
	
//	@NotBlank
////	@OneToOne(cascade = CascadeType.ALL)
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "author")
//	private User author;
	
	
	@ManyToOne(fetch = FetchType.EAGER/*LAZY*/, cascade = CascadeType.DETACH)
	@JoinColumn(name = "authorId", referencedColumnName = "id")
//	Long authorID;
	User author;
//	String authorID;
	
	
//	@NotBlank
//	int likes = 0;
//	
//	@NotBlank
//	boolean reported = false;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;
	
	
	public Tip()
	{
		super();
	}
	
	public Tip(String tipCategory, String tipString, User author)
	{
		super();
		this.tipCategory = tipCategory;
		this.tipString = tipString;
		this.author = author;
	}
	
//	public Tip(String tipCategory, String tipString, Long authorID)
//	{
//		super();
//		this.tipCategory = tipCategory;
//		this.tipString = tipString;
//		this.authorID = authorID;
//	}
	
	public Long getId()
	{
		return id;
	}
	public void setId(Long id)
	{
		this.id = id;
	}
	
	public String getTipCategory()
	{
		return tipCategory;
	}
	public void setTipCategory(String tipCategory)
	{
		this.tipCategory = tipCategory;
	}
	
	public String getTipString()
	{
		return tipString;
	}
	public void setTipString(String tipString)
	{
		this.tipString = tipString;
	}
	
	public User getAuthor()
	{
		return author;
	}
	public void setAuthor(User author)
	{
		this.author = author;
	}
	
//	public Long getAuthorID()
//	{
//		return authorID;
//	}
//	public void setAuthor(Long authorID)
//	{
//		this.authorID = authorID;
//	}
	
	public Date getCreatedAt()
	{
		return createdAt;
	}
	public void setCreatedAt(Date createdAt)
	{
		this.createdAt = createdAt;
	}
	
	public Date getUpdatedAt()
	{
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt)
	{
		this.updatedAt = updatedAt;
	}
	
	@Override
	public String toString() {
		return "Tip [id=" + id + ", tipCategory=" + tipCategory + ", tipString=" + tipString + ", author=" + author + "]";
//		return "Tip [id=" + id + ", tipCategory=" + tipCategory + ", tipString=" + tipString + ", authorID=" + authorID + "]";
	}
}
