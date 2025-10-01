package com.smart_school_bus.SSB.dto.response;

import jakarta.persistence.Column;

import java.math.BigDecimal;
import java.time.LocalDate;

public class BusStopResponse {
    String address;
    BigDecimal latitude;
    BigDecimal longitude;
    LocalDate createdAt;
}
