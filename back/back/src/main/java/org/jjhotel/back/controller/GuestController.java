package org.jjhotel.back.controller;

import lombok.RequiredArgsConstructor;

import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.dto.GuestCreateDto;
import org.jjhotel.back.service.GuestService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/guest")
public class GuestController {
    private final GuestService guestService;

    @PostMapping("/add")
    public String createGuest(@RequestBody GuestCreateDto guestCreateDto) {
        guestService.createGuest(guestCreateDto);
        return "redirect:/login";
    }

    @GetMapping("/reservation/check/{guestId}")
    public ReservationInfoDto getGuestReservationInfo(@PathVariable String guestId) {
        return guestService.getGuestReservationInfo(guestId);
    }
}
