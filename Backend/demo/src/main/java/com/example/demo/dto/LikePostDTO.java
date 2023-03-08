package com.example.demo.dto;

import com.example.demo.model.Tip;
import com.example.demo.model.User;

public class LikePostDTO
{
	User user;
	Tip tip;
	
	public LikePostDTO(User user, Tip tip)
	{
		super();
		this.user = user;
		this.tip = tip;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Tip getTip() {
		return tip;
	}

	public void setTip(Tip tip) {
		this.tip = tip;
	}
}
