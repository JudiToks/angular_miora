package com.testnaina_back.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.List;

@Entity

public class EmpDept {
    @Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Integer id_emp_dept;
public Integer getId_emp_dept(){ return id_emp_dept; }
public void setId_emp_dept(Integer o){ id_emp_dept=o; }
private Integer id_emp;
public Integer getId_emp(){ return id_emp; }
public void setId_emp(Integer o){ id_emp=o; }
private Integer id_dept;
public Integer getId_dept(){ return id_dept; }
public void setId_dept(Integer o){ id_dept=o; }

    
}

