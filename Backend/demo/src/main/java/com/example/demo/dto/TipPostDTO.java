package com.example.demo.dto;

import com.example.demo.model.User;

//import com.example.demo.UserType;

public class TipPostDTO
{
	String tipCategory;
	String tipString;
	User author;
//	Long authorID;
	
	public TipPostDTO(String tipCategory, String tipString, User author)
	{
		super();
		this.tipCategory = tipCategory;
		this.tipString = tipString;
		this.author = author;
	}
	
//	public TipPostDTO(String tipCategory, String tipString, Long authorID)
//	{
//		super();
//		this.tipCategory = tipCategory;
//		this.tipString = tipString;
//		this.authorID = authorID;
//	}
	
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
//	public void setAuthorID(Long authorID)
//	{
//		this.authorID = authorID;
//	}
	
}
