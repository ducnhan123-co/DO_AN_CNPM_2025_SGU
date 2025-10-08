package com.smart_school_bus.SSB.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ScheduleWithoutStudentsResponse {
    String id;
    BusResponse bus;
    DriverResponse driver;
    RouteResponse route;
    LocalTime startTime;
    LocalTime endTime;
    LocalDateTime createdAt;
}
