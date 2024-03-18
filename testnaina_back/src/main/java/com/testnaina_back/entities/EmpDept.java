package com.testnaina_back.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class EmpDept {
    @Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Integer id_emp_dept;
public Integer getIdEmpDept(){ return id_emp_dept; }
public void setIdEmpDept(Integer o){ id_emp_dept=o; }
private Integer id_emp;
public Integer getIdEmp(){ return id_emp; }
public void setIdEmp(Integer o){ id_emp=o; }
private Integer id_dept;
public Integer getIdDept(){ return id_dept; }
public void setIdDept(Integer o){ id_dept=o; }

    
}

