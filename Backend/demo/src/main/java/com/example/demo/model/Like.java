package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;

//import org.hibernate.annotations.CascadeType;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

// Likes is relationship between Users and Tips
@Entity
@Table(name = "Likes2139677test2")
@EntityListeners(AuditingEntityListener.class)
public class Like implements Serializable
{
private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@ManyToOne(fetch = FetchType.EAGER/*LAZY*/, cascade = CascadeType.DETACH)
	@JoinColumn(name = "UserId")
	User user;
	
	@ManyToOne(fetch = FetchType.EAGER/*LAZY*/, cascade = CascadeType.DETACH)
	@JoinColumn(name = "tipId")
	Tip tip;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date likedAt;
	
	public Like()
	{
		super();
	}
	
	public Like(User user, Tip tip)
	{
		this.user = user;
		this.tip = tip;
	}
	
	public Long getId()
	{
		return id;
	}
	public void setId(Long id)
	{
		this.id = id;
	}
	
	public User getUser()
	{
		return user;
	}
	
	public void setUser(User user)
	{
		this.user = user;
	}
	
	public Tip getTip()
	{
		return tip;
	}
	
	public void setTip(Tip tip)
	{
		this.tip = tip;
	}
	
	@Override
	public String toString() {
		return "Like [id=" + id + ", user=" + user + ", tip=" + tip
				+ "]";
	}
}
