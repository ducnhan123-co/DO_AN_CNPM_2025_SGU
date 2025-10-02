package com.smart_school_bus.SSB.service;

import com.smart_school_bus.SSB.dto.request.RouteCreationRequest;
import com.smart_school_bus.SSB.dto.response.RouteResponse;
import com.smart_school_bus.SSB.entity.BusStop;
import com.smart_school_bus.SSB.entity.Route;
import com.smart_school_bus.SSB.exception.AppException;
import com.smart_school_bus.SSB.exception.ErrorCode;
import com.smart_school_bus.SSB.mapper.RouteMapper;
import com.smart_school_bus.SSB.repository.BusStopRepository;
import com.smart_school_bus.SSB.repository.RouteRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class RouteService {
    RouteRepository routeRepository;
    RouteMapper routeMapper;
    BusStopRepository busStopRepository;

    public RouteResponse createRoute(RouteCreationRequest request) {
        if (routeRepository.existsByName(request.getName())) {
            throw new AppException(ErrorCode.ROUTE_EXISTED);
        }

        Set<BusStop> busStops = new HashSet<>();
        request.getBusStopIds().forEach(id -> {
            BusStop busStop = busStopRepository.findById(id)
                    .orElseThrow(() -> new AppException(ErrorCode.BUS_STOP_NOT_FOUND));

            busStops.add(busStop);
        });
        if (busStops.isEmpty())
            throw new AppException(ErrorCode.INVALID_ROUTE_BUSSTOP_IDS);

        Route route = routeMapper.toRoute(request);
        route.setBusStops(busStops);
        route.setCreatedAt(LocalDateTime.now());

        return routeMapper.toResponse(routeRepository.save(route));
    }

    public List<RouteResponse> getAllRoutes() {
        return routeRepository.findAll()
                .stream()
                .map(routeMapper::toResponse)
                .toList();
    }

    public RouteResponse getRouteById(String id) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ROUTE_NOT_FOUND));

        return routeMapper.toResponse(route);
    }

    public RouteResponse updateRoute(String id, RouteCreationRequest request) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ROUTE_NOT_FOUND));

        if (!route.getName().equals(request.getName()) &&
                routeRepository.existsByName(request.getName())) {
            throw new AppException(ErrorCode.ROUTE_EXISTED);
        }

        Set<BusStop> busStops = new HashSet<>();
        request.getBusStopIds().forEach(busStopId -> {
            BusStop busStop = busStopRepository.findById(busStopId)
                    .orElseThrow(() -> new AppException(ErrorCode.BUS_STOP_NOT_FOUND));
            busStops.add(busStop);
        });

        route.setBusStops(busStops);

        return routeMapper.toResponse(routeRepository.save(route));
    }

    public void deleteRoute(String id) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ROUTE_NOT_FOUND));

        routeRepository.delete(route);
    }
}
