package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Tip;
import com.example.demo.model.User;
//import com.example.demo.model.User;
import com.example.demo.repository.TipRepository;
import com.example.demo.dto.TipPostDTO;
//import com.example.demo.repository.UserRepository;
import com.example.demo.exception.ResourceNotFoundException;

@Service
public class TipService
{

	@Autowired
    TipRepository tipRepository;
	
	public TipService()
	{
		super();
	}
	
	
	public List<Tip> getTips()
	{
		return (List<Tip>) tipRepository.findAll();
	}

	
	public void addTip(Tip newTip)
	{
		tipRepository.save(newTip);
	}
	
	public Optional<Tip> findByID(Long id)
	{
		 return tipRepository.findById(id);
	}
	
	public void deleteTip(Long id)
	{
		Tip tip = tipRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("Tip", "id", id));
		tipRepository.delete(tip);
	}
	
	public List<Tip>/*Tip*/ findByAuthor(User authorID)
	{
		return (List<Tip>) tipRepository.findByAuthor(authorID);
	}
	
	////
	public void editTip(Long id, Tip updatedTip)
	{
//		tipRepository.save(updatedTip);
//		update, insert
		
		Tip tip = tipRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Tip", "id", id));
		tip.setTipCategory(updatedTip.getTipCategory());
		tip.setTipString(updatedTip.getTipString());
		
		tipRepository.save(tip);
	}
}
