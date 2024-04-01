package com.testnaina_back.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.List;

@Entity

public class Dept {
    @Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Integer id_dept;
public Integer getId_dept(){ return id_dept; }
public void setId_dept(Integer o){ id_dept=o; }
private String nom_dept;
public String getNom_dept(){ return nom_dept; }
public void setNom_dept(String o){ nom_dept=o; }

    
}

