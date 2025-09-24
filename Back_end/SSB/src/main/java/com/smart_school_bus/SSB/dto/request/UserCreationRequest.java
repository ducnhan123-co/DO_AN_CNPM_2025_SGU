package com.smart_school_bus.SSB.dto.request;

import com.smart_school_bus.SSB.validator.DobConstraint;
import com.smart_school_bus.SSB.validator.GenderConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;

@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserCreationRequest {
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,}$", message = "INVALID_PASSWORD")
    @NotNull(message = "INVALID_PASSWORD")
    String password;

    @NotNull(message = "INVALID_PHONE_NUMBER")
    @Pattern(regexp = "^0\\d{9}$", message = "INVALID_PHONE_NUMBER")
    String phoneNumber;

    @NotNull(message = "INVALID_EMAIL")
    @Email(message = "INVALID_EMAIL")
    String email;

    @NotNull(message = "INVALID_FIRST_NAME")
    String firstName;

    String lastName;

    @DobConstraint(min = 16, message = "INVALID_DOB")
    LocalDate dob;

    String address;

    Set<String> roleNames;

    @NotNull
    @GenderConstraint
    String gender;
}
