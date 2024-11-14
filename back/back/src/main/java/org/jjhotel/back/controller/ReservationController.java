package org.jjhotel.back.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.dto.ReservationWithGuestInfoDto;
import org.jjhotel.back.service.ReservationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reservation")
public class ReservationController {
    private final ReservationService reservationService;

    @PostMapping("/check")
    public ReservationInfoDto getReservationInfo(@RequestBody ReservationWithGuestInfoDto reservationWithGuestInfoDto) {
        ReservationInfoDto reservationInfo = reservationService.getReservationInfo(reservationWithGuestInfoDto);
        return reservationService.getReservationInfo(reservationWithGuestInfoDto);
    }

    @PatchMapping("/check/delete")
    public String deleteReservation(@RequestBody ReservationWithGuestInfoDto reservationWithGuestInfoDto){
        String reservationId = reservationWithGuestInfoDto.getReservationId();
        reservationService.deleteReservation(reservationId);
        return "redirect:/";
    }

}
