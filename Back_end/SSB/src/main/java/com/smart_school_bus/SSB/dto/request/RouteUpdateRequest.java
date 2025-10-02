package com.smart_school_bus.SSB.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RouteUpdateRequest {
    @NotBlank(message = "INVALID_ROUTE_NAME")
    String name;

    String description;

    @NotNull(message = "INVALID_ROUTE_DISTANCE")
    Double distance;

    @NotNull(message = "INVALID_ROUTE_BUSSTOP_IDS")
    Set<String> busStopIds;
}
