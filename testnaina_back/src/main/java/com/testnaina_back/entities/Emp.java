package com.testnaina_back.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Emp {
    @Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Integer id_emp;
public Integer getIdEmp(){ return id_emp; }
public void setIdEmp(Integer o){ id_emp=o; }
private String nom;
public String getNom(){ return nom; }
public void setNom(String o){ nom=o; }

    
}

