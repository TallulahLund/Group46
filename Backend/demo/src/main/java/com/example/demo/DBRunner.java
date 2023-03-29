// package com.example.demo;

// import com.example.demo.model.*;
// import com.example.demo.repository.*;
// import java.math.BigDecimal;
// import java.util.ArrayList;
// import java.util.Iterator;
// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Component;


// @Component
// public class DBRunner implements CommandLineRunner{
// 	@Autowired 
// 	private UserRepository userRepository;
	
// 	@Autowired
// 	private ProduceRepository produceRepository;
	
// 	@Autowired
// 	private ProduceSellerPriceRepository priceRepository;
	
// 	// Tip
// 	@Autowired
// 	private TipRepository tipRepository;

// 	// Like
// 	@Autowired
// 	private LikeRepository likeRepository;
	
// 	// Petition
// 	@Autowired
// 	private PetitionRepository petitionRepository;
	
	
// 	// Questions
// 	@Autowired
// 	private QuestionRepository questionRepository;
	
	
	
	
// 	@Override
// 	 public void run(String... args) throws Exception {
// //		priceRepository.deleteAll();
// //		userRepository.deleteAll();
// //		produceRepository.deleteAll();
// //		
// //		//
// //		tipRepository.deleteAll();
// //		
// //		likeRepository.deleteAll();
		
// //		List<Tip> tips = new ArrayList<Tip>();
		
// 		priceRepository.deleteAll();
// 		produceRepository.deleteAll();
		
// //		likeRepository.deleteAll();
// //		tipRepository.deleteAll();
// //		userRepository.deleteAll();
// //		
// //		// Week 19 Lab
// //		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
// //		
// //		User newUser = new User("alex2", "alex2@sample.com", encoder.encode("alex2_pass"), UserType.BUYER/*, tips*/);
// //		userRepository.save(newUser);
// //		
// //		Produce newProduce = new Produce("Apple");
// //		produceRepository.save(newProduce);
// //		
// //		ProduceSellerPrice newPSPrice = new ProduceSellerPrice();
// //		newPSPrice.setProduce(newProduce);
// //		newPSPrice.setSeller(newUser);
// //		newPSPrice.setPrice(new BigDecimal(1));
// //		priceRepository.save(newPSPrice);
// //		
// //		//
// //		Tip newTip = new Tip("Home", "Lights off", newUser);//.getId());
// //		tipRepository.save(newTip);
// //		Tip newTip2 = new Tip("Car", "Engine off", newUser);//.getId());// String.valueOf(newUser.getId()));
// //		tipRepository.save(newTip2);
// //		
// //		
// //		Iterable<ProduceSellerPrice> prices= priceRepository.findAll();
// //		prices.forEach((p)->{
// //			System.out.println(p);
// //		});
// //		
// //		///////
// //		
// //		Like newLike = new Like(newUser, newTip);
// //		likeRepository.save(newLike);
// 	}
// }


package com.example.demo;

import com.example.demo.model.*;
import com.example.demo.repository.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;


@Component
public class DBRunner implements CommandLineRunner{
	@Autowired 
	private UserRepository userRepository;
	
//	@Autowired
//	private ProduceRepository produceRepository;
//	
//	@Autowired
//	private ProduceSellerPriceRepository priceRepository;
	
	// Tip
	@Autowired
	private TipRepository tipRepository;

	// Like
	@Autowired
	private LikeRepository likeRepository;
	
	@Override
	 public void run(String... args) throws Exception {
//		priceRepository.deleteAll();
//		userRepository.deleteAll();
//		produceRepository.deleteAll();
//		
//		//
//		tipRepository.deleteAll();
//		
//		likeRepository.deleteAll();
		
//		List<Tip> tips = new ArrayList<Tip>();
		
//		priceRepository.deleteAll();
//		produceRepository.deleteAll();
		
//		likeRepository.deleteAll();
//		tipRepository.deleteAll();
//		userRepository.deleteAll();
//		
//		// Week 19 Lab
//		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//		
//		User newUser = new User("alex2", "alex2@sample.com", encoder.encode("alex2_pass"), UserType.BUYER/*, tips*/);
//		userRepository.save(newUser);
//		
//		Produce newProduce = new Produce("Apple");
//		produceRepository.save(newProduce);
//		
//		ProduceSellerPrice newPSPrice = new ProduceSellerPrice();
//		newPSPrice.setProduce(newProduce);
//		newPSPrice.setSeller(newUser);
//		newPSPrice.setPrice(new BigDecimal(1));
//		priceRepository.save(newPSPrice);
//		
//		//
//		Tip newTip = new Tip("Home", "Lights off", newUser);//.getId());
//		tipRepository.save(newTip);
//		Tip newTip2 = new Tip("Car", "Engine off", newUser);//.getId());// String.valueOf(newUser.getId()));
//		tipRepository.save(newTip2);
//		
//		
//		Iterable<ProduceSellerPrice> prices= priceRepository.findAll();
//		prices.forEach((p)->{
//			System.out.println(p);
//		});
//		
//		///////
//		
//		Like newLike = new Like(newUser, newTip);
//		likeRepository.save(newLike);
	}
}
