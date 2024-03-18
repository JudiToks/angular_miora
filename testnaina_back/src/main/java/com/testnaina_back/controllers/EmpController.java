package com.testnaina_back.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.testnaina_back.entities.Emp;
import com.testnaina_back.entities.EmpRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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
@GetMapping("")
public List<Emp> crudpage(){
    return (List<Emp>) repo.findAll();
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

