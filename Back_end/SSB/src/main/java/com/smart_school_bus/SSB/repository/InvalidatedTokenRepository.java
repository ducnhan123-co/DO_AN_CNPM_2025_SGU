package com.smart_school_bus.SSB.repository;

import com.smart_school_bus.SSB.entity.InvalidatedToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvalidatedTokenRepository extends JpaRepository<InvalidatedToken, String> {
}
