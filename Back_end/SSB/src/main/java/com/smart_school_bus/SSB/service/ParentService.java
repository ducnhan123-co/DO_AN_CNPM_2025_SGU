package com.smart_school_bus.SSB.service;

import com.smart_school_bus.SSB.dto.request.ParentCreationRequest;
import com.smart_school_bus.SSB.dto.response.ParentResponse;
import com.smart_school_bus.SSB.entity.Parent;
import com.smart_school_bus.SSB.entity.User;
import com.smart_school_bus.SSB.exception.AppException;
import com.smart_school_bus.SSB.exception.ErrorCode;
import com.smart_school_bus.SSB.mapper.ParentMapper;
import com.smart_school_bus.SSB.repository.ParentRepository;
import com.smart_school_bus.SSB.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class ParentService {
    UserRepository userRepository;
    ParentRepository parentRepository;
    ParentMapper parentMapper;

    public ParentResponse createParent(ParentCreationRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        Parent parent = Parent.builder()
                .user(user)
                .build();

        return parentMapper.toResponse(parentRepository.save(parent));
    }

    public List<ParentResponse> getParents() {
        List<Parent> parents = parentRepository.findAll();

        List<ParentResponse> parentResponses = parents.stream().map(parentMapper::toResponse).toList();

        return parentResponses;
    }

    public ParentResponse getParent(String id) {
        Parent parent = parentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.PARENT_NOT_FOUND));

        return parentMapper.toResponse(parent);
    }

    public void deleteParent(String id) {
        Parent parent = parentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.PARENT_NOT_FOUND));

        parentRepository.delete(parent);
    }
}
