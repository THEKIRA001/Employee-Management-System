package com.project.code.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.code.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long>{

}
