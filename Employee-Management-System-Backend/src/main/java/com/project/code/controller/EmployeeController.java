package com.project.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.code.model.Employee;
import com.project.code.repository.EmployeeRepo;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepo employeeRepo;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepo.findAll();
	}
}
