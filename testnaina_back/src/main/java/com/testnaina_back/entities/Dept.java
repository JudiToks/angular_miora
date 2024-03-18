package com.testnaina_back.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Dept {
    @Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Integer id_dept;
public Integer getIdDept(){ return id_dept; }
public void setIdDept(Integer o){ id_dept=o; }
private String nom_dept;
public String getNomDept(){ return nom_dept; }
public void setNomDept(String o){ nom_dept=o; }

    
}

