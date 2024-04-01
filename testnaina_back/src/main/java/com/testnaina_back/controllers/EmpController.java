package com.testnaina_back.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.testnaina_back.entities.Emp;
import com.testnaina_back.entities.EmpRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;

@Controller
@RestController
@RequestMapping("/emp")

public class EmpController {
    @Autowired
private EmpRepository repo;

    
    @PostMapping("")
public void insert(@RequestBody Emp o){
    repo.save(o);
}
@GetMapping("/{idfin}")
public Page<Emp> pagination(@PathVariable Integer idfin){
    PageRequest p = PageRequest.of(idfin,5);
    return repo.findAll(p);
}
@PutMapping("")
public void update(@RequestBody Emp o){
    repo.save(o);
}
@DeleteMapping("/{id}")
public void delete(@PathVariable Integer id){
    repo.deleteById(id);
}

    
}

