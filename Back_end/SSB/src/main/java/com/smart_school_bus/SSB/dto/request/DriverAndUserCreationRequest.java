package com.smart_school_bus.SSB.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.PrimitiveIterator;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverAndUserCreationRequest {
    @Valid
    UserCreationRequest user;

    @NotBlank(message = "INVALID_DRIVER_LICENSE")
    @Pattern(regexp = "^[A-Z0-9-]{6,15}$", message = "INVALID_DRIVER_LICENSE")
    String driverLicense;
}
