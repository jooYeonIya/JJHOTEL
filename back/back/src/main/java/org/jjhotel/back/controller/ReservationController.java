package org.jjhotel.back.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.dto.ReservationWithGuestInfoDto;
import org.jjhotel.back.domain.dto.RoomReservationDto;
import org.jjhotel.back.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/reservation")
public class ReservationController {
    private final ReservationService reservationService;

    @PostMapping("/check")
    public ReservationInfoDto getReservationInfo(@RequestBody ReservationWithGuestInfoDto reservationWithGuestInfoDto) {
        ReservationInfoDto reservationInfo = reservationService.getReservationInfo(reservationWithGuestInfoDto);
        return reservationService.getReservationInfo(reservationWithGuestInfoDto);
    }

    @PostMapping()
    public String doReservation(@RequestBody RoomReservationDto info) {
        // guestId 는 보안.. 작업하면서 .. 세션에서 가져오든.. 어떻게든..
        return reservationService.doReservation(info, "asdf");
    }
}
