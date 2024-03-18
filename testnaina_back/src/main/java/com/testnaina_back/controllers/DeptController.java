package com.testnaina_back.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.testnaina_back.entities.Dept;
import com.testnaina_back.entities.DeptRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RestController
@RequestMapping("/dept")

public class DeptController {
    @Autowired
private DeptRepository repo;

    
    @PostMapping("")
public void insert(@RequestBody Dept o){
    repo.save(o);
}
@GetMapping("")
public List<Dept> crudpage(){
    return (List<Dept>) repo.findAll();
}
@PutMapping("")
public void update(@RequestBody Dept o){
    repo.save(o);
}
@DeleteMapping("/{id}")
public void delete(@PathVariable Integer id){
    repo.deleteById(id);
}

}

