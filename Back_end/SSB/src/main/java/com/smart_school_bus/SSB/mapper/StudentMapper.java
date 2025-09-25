package com.smart_school_bus.SSB.mapper;

import com.smart_school_bus.SSB.dto.request.StudentCreationRequest;
import com.smart_school_bus.SSB.dto.request.StudentUpdateRequest;
import com.smart_school_bus.SSB.dto.response.StudentResponse;
import com.smart_school_bus.SSB.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    Student toStudent(StudentCreationRequest request);

    StudentResponse toResponse(Student student);

    public void updateStudent(@MappingTarget Student student, StudentUpdateRequest request);
}
