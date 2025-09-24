package com.smart_school_bus.SSB.mapper;

import com.smart_school_bus.SSB.dto.request.UserCreationRequest;
import com.smart_school_bus.SSB.dto.request.UserUpdateRequest;
import com.smart_school_bus.SSB.dto.response.UserResponse;
import com.smart_school_bus.SSB.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "userName", ignore = true)
    User toUser(UserCreationRequest request);

    UserResponse toResponse(User user);

    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "userName", ignore = true)
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
