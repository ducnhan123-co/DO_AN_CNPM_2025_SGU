package com.smart_school_bus.SSB.dto.response;

import com.smart_school_bus.SSB.entity.Bus;
import com.smart_school_bus.SSB.entity.Driver;
import com.smart_school_bus.SSB.entity.Route;
import com.smart_school_bus.SSB.entity.Student;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Set;

public class ScheduleResponse {
    String id;
    BusResponse bus;
    DriverResponse driver;
    RouteResponse route;
    LocalTime startTime;
    LocalTime endTime;
    Set<StudentResponse> students;
    LocalDateTime createdAt;
}
