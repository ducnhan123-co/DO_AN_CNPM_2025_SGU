package com.smart_school_bus.SSB.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "route_id", unique = true, updatable = false, nullable = false)
    String id;

    @Column(name = "name")
    String name;

    @Column(name = "description")
    String description;

    @Column(name = "distance")
    Double distance;

    @ManyToMany()
    @JoinTable(name = "route_stop",
            joinColumns = @JoinColumn(name = "route_id"),
            inverseJoinColumns = @JoinColumn(name = "bus_stop_id")
    )
    Set<BusStop> busStops;

    @Column(name = "created_at", updatable = false, nullable = false)
    LocalDateTime createdAt;
}
