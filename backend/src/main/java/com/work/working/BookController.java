package com.work.working;
//
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/books")
//public class BookController {
//    @RequestMapping(value = "/all", method = RequestMethod.GET)
//    public String old() { return "long way"; }
//}
//import java.util.List;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/books")
// class BooksController {
//
//    private final List<Book> books = new ArrayList<>(List.of(new Book(1, "Java Basics", 450),new Book(2, "Spring Boot", 600)));
//
//    @GetMapping
//    public List<Book> all() {
//        return books;
  //  }
//    @GetMapping("/{id}")
//    public ResponseEntity<Book> one(@PathVariable int id) {
//        return books.stream()
//                .filter(b -> b.id() == id)
//                .findFirst()
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//@GetMapping("/search")
//public List<Book> search(@RequestParam String title) {
//    return books.stream()
//            .filter(b -> b.Title().toLowerCase().contains(title.toLowerCase()))
//            .toList();
//}
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Book> one(@PathVariable int id) {
//        return books.stream()
//                .filter(b -> b.id() == id)
//                .findFirst()
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//    @PostMapping
//    public ResponseEntity<Book> add(@RequestBody Book book) {
//        books.add(book);
//        return ResponseEntity.status(HttpStatus.CREATED).body(book);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> delete(@PathVariable int id) {
//        boolean removed = books.removeIf(b -> b.id() == id);
//        return removed ? ResponseEntity.noContent().build()
//                : ResponseEntity.notFound().build();
//    }
//}

//@GetMapping("/search")
//public List<Book> search(@RequestParam String title) {
//
//}
//@RequestParam(required = false) String title
import java.util.List;

import com.work.working.Repository.StudentRepository;
import com.work.working.entity.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final StudentRepository repo;

    public BookController(StudentRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Student> all() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> one(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Student> add(@Valid @RequestBody Student s) {
        return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(s));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@PathVariable Long id, @Valid @RequestBody Student s) {
        return repo.findById(id).map(existing -> {
            existing.setName(s.getName());
            existing.setEmail(s.getEmail());
            existing.setDepartment(s.getDepartment());
            existing.setMarks(s.getMarks());
            return ResponseEntity.ok(repo.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}