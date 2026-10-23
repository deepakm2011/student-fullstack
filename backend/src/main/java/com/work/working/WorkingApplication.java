package com.work.working;

import com.work.working.Repository.StudentRepository;
import com.work.working.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class WorkingApplication {
	public static void main(String[] args) {
			SpringApplication.run(WorkingApplication.class, args);
	}
	@Bean
    CommandLineRunner test(StudentRepository repo) {
		return args -> {
//			repo.save(new Student("aaaa", "aaaa@gmail.com", "CSE", 85));
//			repo.save(new Student("bbbb", "bbbb@gmail.com", "ECE", 72));
			repo.findAll().forEach(s -> System.out.println(s.getName()));
		};
	}
}