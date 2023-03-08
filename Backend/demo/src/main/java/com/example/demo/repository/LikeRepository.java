package com.example.demo.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Like;

public interface LikeRepository extends CrudRepository<Like, Long>
{
	List<Like> findByTipId(Long tipId);
	
//	@Query(value = "SELECT id, liked_at, tip_id, user_id FROM likes2139677test2 WHERE tip_id = 'tipId' AND user_id = 'userId'", nativeQuery = true)
			// AND liked_at IS NOT NULL", nativeQuery = true)
//	@Query(value = "SELECT l FROM likes2139677test2 l WHERE l.tip_id = 'tipId' AND l.user_id = 'userId'", nativeQuery = true)
//	@Query(value = "SELECT * FROM likes2139677test2 WHERE tip_id = 'tipId' AND user_id = 'userId'", nativeQuery = true)
//	@Query("SELECT * FROM likes2139677test2 WHERE tip_id = 'tipId' AND user_id = 'userId'")
	/*Optional<Like>*/ List<Like> findByTipIdAndUserId(@Param("tip_id") Long tipId, @Param("user_id") Long userId);
	
	@Query(value = "SELECT COUNT(*) FROM likes2139677test2 WHERE tip_id = 'tipId'", nativeQuery = true)
	Long countByTipId(Long tipId);
}
