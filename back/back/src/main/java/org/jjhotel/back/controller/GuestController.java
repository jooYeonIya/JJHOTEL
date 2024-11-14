package org.jjhotel.back.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

import org.jjhotel.back.constants.Constant;
import org.jjhotel.back.domain.dto.GuestLoginDto;
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
    public void createGuest(@RequestBody GuestCreateDto guestCreateDto) {
        guestService.createGuest(guestCreateDto);
    }

    @GetMapping("/reservation/check/{guestId}")
    public ReservationInfoDto getGuestReservationInfo(@PathVariable String guestId) {
        return guestService.getGuestReservationInfo(guestId);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody GuestLoginDto guestLoginDto, HttpServletRequest request, HttpServletResponse response) {
        boolean result = guestService.findGuest(guestLoginDto);

        if (result) {
            HttpSession session = request.getSession(true);
            session.setAttribute(Constant.GUEST_SESSION, guestLoginDto.getGuestId());
            Cookie cookie = new Cookie(Constant.GUEST_COOKIE, Constant.GUEST_SESSION);
            cookie.setMaxAge(30 * 60);
            cookie.setPath("/");
            response.addCookie(cookie);
            return true;
        }

        return false;
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);

        if (session != null) {
            session.invalidate();

            Cookie cookie = new Cookie(Constant.GUEST_COOKIE, null);
            cookie.setMaxAge(0);
            cookie.setPath("/");
            response.addCookie(cookie);
        }

        return "일단 문자열 반환";
    }
}
