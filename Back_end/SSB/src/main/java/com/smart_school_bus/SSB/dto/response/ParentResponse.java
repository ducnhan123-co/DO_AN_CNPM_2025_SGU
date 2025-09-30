package com.smart_school_bus.SSB.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ParentResponse {
    String id;
    UserResponse user;
    List<StudentResponse> students;
}
