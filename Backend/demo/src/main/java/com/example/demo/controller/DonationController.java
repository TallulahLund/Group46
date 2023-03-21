package com.example.demo.controller;
//import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.DonationPostDTO;
import com.example.demo.model.Donation;
import com.example.demo.service.DonationService2;

import jakarta.validation.Valid;

@RestController
public class DonationController {

   //private final DonationService2 donationService2;
   @Autowired
   DonationService2 donationService2;

   @PostMapping("/donation")
   public Donation createDonation(@Valid @RequestBody DonationPostDTO donationDTO){
    return donationService2.save(donationDTO.toDonation());
   }

  //@Autowired
   //public DonationController(DonationService2 donationService) {
    //this.donationService2 = donationService;
   //}

   //@PostMapping
    //public ResponseEntity<?> makeDonation(@RequestBody DonationPostDTO donationPostDTO) {
     //Donation donation = new Donation(donationPostDTO.getDamount(), donationPostDTO.getDname(), donationPostDTO.getDemail());
       // donationService2.Donation(donation);
        //return ResponseEntity.ok().build();
    //}

}
