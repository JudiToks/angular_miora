package com.testnaina_back.entities;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
@Repository
public interface EmpRepository extends JpaRepository<Emp,Integer> {
}
