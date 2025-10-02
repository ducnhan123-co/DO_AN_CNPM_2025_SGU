package com.smart_school_bus.SSB.repository;

import com.smart_school_bus.SSB.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver, String> {
}
