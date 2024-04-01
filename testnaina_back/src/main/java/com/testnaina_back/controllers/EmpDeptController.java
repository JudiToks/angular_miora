package com.testnaina_back.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.testnaina_back.entities.EmpDept;
import com.testnaina_back.entities.EmpDeptRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;

@Controller
@RestController
@RequestMapping("/empDept")

public class EmpDeptController {
    @Autowired
private EmpDeptRepository repo;

    
    @PostMapping("")
public void insert(@RequestBody EmpDept o){
    repo.save(o);
}
@GetMapping("/{idfin}")
public Page<EmpDept> pagination(@PathVariable Integer idfin){
    PageRequest p = PageRequest.of(idfin,5);
    return repo.findAll(p);
}
@PutMapping("")
public void update(@RequestBody EmpDept o){
    repo.save(o);
}
@DeleteMapping("/{id}")
public void delete(@PathVariable Integer id){
    repo.deleteById(id);
}

    
}

