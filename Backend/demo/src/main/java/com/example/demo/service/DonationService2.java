package com.example.demo.service;

//import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Donation;
import com.example.demo.repository.DonationRepository;

@Service
public class DonationService2 {
    @Autowired
    private DonationRepository donationRepository;

    public Donation save(Donation donation){
        return donationRepository.save(donation);
    }
}
