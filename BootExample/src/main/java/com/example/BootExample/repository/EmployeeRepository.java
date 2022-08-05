package com.example.BootExample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BootExample.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee , Long> {

}
