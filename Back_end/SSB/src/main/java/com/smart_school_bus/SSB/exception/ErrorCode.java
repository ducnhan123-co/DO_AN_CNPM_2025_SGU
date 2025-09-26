package com.smart_school_bus.SSB.exception;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    UNCATEGORIZED(9999, "Uncategorized error catch", HttpStatus.INTERNAL_SERVER_ERROR),
    INVALID_PASSWORD(1001, "Invalid password", HttpStatus.UNAUTHORIZED),
    INVALID_PHONE_NUMBER(1003, "Invalid phone number", HttpStatus.BAD_REQUEST),
    INVALID_DOB(1002, "Age must be at least {min}", HttpStatus.UNPROCESSABLE_ENTITY),
    USER_NOT_FOUND(1004, "User not found", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1005, "Unauthenticated", HttpStatus.UNAUTHORIZED),
    DOUBLE_ENTRY(1006, "Added object existed", HttpStatus.CONFLICT),
    UNKNOWN_KEY(1007, "Unknow validator", HttpStatus.BAD_REQUEST),
    INVALID_FIRST_NAME(1008, "Invalid first name", HttpStatus.BAD_REQUEST),
    INVALID_ROLES(1009, "Invalid roles for staff", HttpStatus.FORBIDDEN),
    INVALID_EMAIL(1010, "Invalid email", HttpStatus.BAD_REQUEST),
    ACCESS_DENIED(1011, "Access denied", HttpStatus.BAD_REQUEST),
    INVALID_LICENSE_PLATE(1012, "Invalid license plate for bus", HttpStatus.BAD_REQUEST),
    INVALID_CAPACITY(1013, "Invalid capacity for bus", HttpStatus.BAD_REQUEST),
    BUS_NOT_FOUND(1014, "Bus not found", HttpStatus.NOT_FOUND),
    INVALID_STUDENT_ID(1015, "Invalid student ID", HttpStatus.BAD_REQUEST),
    INVALID_LAST_NAME(1016, "Invalid last name", HttpStatus.BAD_REQUEST),
    INVALID_ADDRESS(1017, "Invalid address", HttpStatus.BAD_REQUEST),
    INVALID_CLASSROOM(1018, "Invalid classroom", HttpStatus.BAD_REQUEST),
    INVALID_IMAGE_URL(1019, "Invalid image URL", HttpStatus.BAD_REQUEST),
    STUDENT_EXISTED(1020, "Student existed", HttpStatus.BAD_REQUEST),
    STUDENT_NOT_FOUND(1021, "Student not found", HttpStatus.NOT_FOUND),
    BUS_EXISTED(1022, "Bus existed", HttpStatus.NOT_FOUND),
    USER_EXISTED(1023, "User existed", HttpStatus.NOT_FOUND),
    INVALID_TO(1024, "Invalid recipient email", HttpStatus.BAD_REQUEST),
    INVALID_SUBJECT(1025, "Invalid subject", HttpStatus.BAD_REQUEST),
    INVALID_BODY(1026, "Invalid body", HttpStatus.BAD_REQUEST),
    ;
    int code;
    String message;
    HttpStatusCode httpStatusCode;
}
