package com.testnaina_back.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.testnaina_back.entities.EmpDept;
import com.testnaina_back.entities.EmpDeptRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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
@GetMapping("")
public List<EmpDept> crudpage(){
    return (List<EmpDept>) repo.findAll();
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

