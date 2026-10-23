package com.work.working.Controller;
import java.util.List;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import jakarta.validation.Valid;
//import com.work.working.entity.Student;
//import com.work.working.service.WorkingService;
//@RestController
//@RequestMapping("/api/students")
//public class Controller {
//    private final WorkingService service;
//
//    public Controller(WorkingService service) {
//        this.service = service;
//    }
//
//    @GetMapping
//    public List<Student> getAll() {
//        return service.getAll();
//    }
//
//    @GetMapping("/{id}")
//    public Student getById(@PathVariable Long id) {
//        return service.getById(id);
//    }
//
//    @PostMapping
//    public ResponseEntity<Student> create(@Valid @RequestBody Student s) {
//        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(s));
//    }
//
//    @PutMapping("/{id}")
//    public Student update(@PathVariable Long id, @Valid @RequestBody Student s) {
//        return service.update(id, s);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> delete(@PathVariable Long id) {
//        service.delete(id);
//        return ResponseEntity.noContent().build();
//    }
//}
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.work.working.entity.Student;
import com.work.working.service.WorkingService;
import jakarta.validation.Valid;
//@CrossOrigin(origins = "http://localhost:5175")
@RestController
@RequestMapping("/api/students")
public class Controller {

    private final WorkingService service;
    public Controller(WorkingService service) {
        this.service = service;
    }
    @GetMapping
    public List<Student> getAll() {
        return service.getAll();
    }
    @GetMapping("/{id}")
    public Student getById(@PathVariable Long id) {
        return service.getById(id);
    }
    @PostMapping
    public ResponseEntity<Student> create(@Valid @RequestBody Student s) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(s));
    }
    @PutMapping("/{id}")
    public Student update(@PathVariable Long id, @Valid @RequestBody Student s) {
        return service.update(id, s);
    }
    @GetMapping("/department/{dept}")
    public List<Student> byDepartment(@PathVariable String dept) {
        return service.byDepartment(dept);
    }
    @GetMapping("/department/{dept}/top")
    public List<Student> topByDepartment(@PathVariable String dept) {
        return service.topByDepartment(dept);
    }
    @GetMapping("/search")
    public List<Student> search(@RequestParam String name) {
        return service.search(name);
    }
    @GetMapping("/toppers")
    public List<Student> toppers() {
        return service.toppers();
    }
    @GetMapping("/marks")
    public List<Student> marksBetween(@RequestParam int low, @RequestParam int high) {
        return service.marksBetween(low, high);
    }
    @GetMapping("/page")
    public Page<Student> page(@RequestParam(defaultValue = "0") int page,
                              @RequestParam(defaultValue = "5") int size) {
        return service.getPage(page, size);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        boolean deleted = service.delete(id);
        if (!deleted) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Student not found with id " + id);
        }
        return ResponseEntity.ok("Student deleted successfully");
    }
}


