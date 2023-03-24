package com.example.demo.dto;

import com.example.demo.model.Donation;

public class DonationPostDTO {
    private double damount;
    private String dname;
    private String demail;

    public DonationPostDTO(){

    }

    public DonationPostDTO(Donation donation) {
        this.damount = donation.getDAmount();
        this.dname = donation.getDName();
        this.demail = donation.getDEmail();
    }

    public double getDamount() {
        return damount;
    }

    public void setDamount(double damount) {
        this.damount = damount;
    }

    public String getDname() {
        return dname;
    }

    public void setDname(String dname) {
        this.dname = dname;
    }

    public String getDemail() {
        return demail;
    }

    public void setDemail(String demail) {
        this.demail = demail;
    }

    public Donation toDonation(){
        Donation donation = new Donation();
        donation.setDAmount(this.damount);
        donation.setDEmail(this.demail);
        donation.setDName(this.dname);
        return donation;
    }

    @Override
    public String toString() {
        return "DonationPostDTO{" +
                "damount=" + damount +
                ", dname='" + dname + '\'' +
                ", demail='" + demail + '\'' +
                '}';
    }
}
