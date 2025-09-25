package com.smart_school_bus.SSB.repository;

import com.smart_school_bus.SSB.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, String> {
    
}
