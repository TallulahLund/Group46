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
import jakarta.validation.constraints.NotBlank;

// Donation is relationship between Users and Amount
@Entity
@Table(name = "donations")
@EntityListeners(AuditingEntityListener.class)
public class Donation implements Serializable
{
private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
    @NotBlank
    double damount;

    @NotBlank
    String demail;

    @NotBlank
    String dname;

    public Donation() {
        super();

    }

        public Donation(double damount, String dname, String demail ) {
            this.damount = damount;
            this.dname = dname;
            this.demail = demail;
        }
        
        public double getDAmount() {
            return damount;
        }
        
        public void setDAmount(double damount) {
            this.damount = damount;
        }
        
        public String getDName() {
            return dname;
        }
        
        public void setDName(String dname) {
            this.dname = dname;
        }

        public String getDEmail() {
            return demail;
        }
        
        public void setDEmail(String demail) {
            this.demail = demail;
        }


        
        @Override
        public String toString() {
            return "Donation [damount=" + damount + ", dname=" + dname + ", demail=" + demail +"]";
        }
    }
    


