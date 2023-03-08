package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Like;
import com.example.demo.model.User;
import com.example.demo.repository.LikeRepository;

@Service
public class LikeService
{
	@Autowired
	LikeRepository likeRepository;
	
	public LikeService()
	{
		super();
	}
	
	public List<Like> getLikes()
	{
		return (List<Like>) likeRepository.findAll();
	}

	public void addLike(Like newLike)
	{
		likeRepository.save(newLike);
	}
	
	public Optional<Like> findByID(Long id)
	{
		 return likeRepository.findById(id);
	}
	
	public void deleteLike(Long id)
	{
		Like like = likeRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("Like", "id", id));
		likeRepository.delete(like);
	}
	
	public List<Like> findByTipId(Long id) {
		 return likeRepository.findByTipId(id);
	}
	
	public /*Optional<Like>*/ List<Like> findByTipIdAndUserId(Long tipId, Long userId)
	{
		List<Like> ll = likeRepository.findByTipIdAndUserId(tipId, userId);
//		 return likeRepository.findByTipIdAndUserId(tipId, userId);
		System.out.println("\n\n ll= "+ ll +"....\n");
		return ll;
	}
	
	//
	public Long countByTipId(Long tipId)
	{
		Long l = likeRepository.countByTipId(tipId);
		System.out.println("\n\n\n......" + tipId + "........" + l);
		return l;
//		return likeRepository.countByTipId(tipId);
	}
}
