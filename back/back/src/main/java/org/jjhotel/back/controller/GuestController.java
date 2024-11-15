package org.jjhotel.back.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

import org.jjhotel.back.constants.Constant;
import org.jjhotel.back.domain.dto.GuestInfoDto;
import org.jjhotel.back.domain.dto.GuestLoginDto;
import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.dto.GuestCreateDto;
import org.jjhotel.back.service.GuestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/guest")
public class GuestController {
    private final GuestService guestService;

    @PostMapping("/add")
    public String createGuest(@RequestBody GuestCreateDto guestCreateDto) {
        guestService.createGuest(guestCreateDto);
        return "redirect:/guest/login";
    }

    @GetMapping("/reservation/check")
    public List<ReservationInfoDto> getGuestReservationInfo(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            return null;
        }
        String guestId = session.getAttribute(Constant.GUEST_SESSION).toString();
        List<ReservationInfoDto> guestReservationInfo = guestService.getGuestReservationInfo(guestId);
        return guestReservationInfo;
    }

    @GetMapping("/myinfo")
    public GuestInfoDto getMyInfo(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            return null;
        }
        String guestId = session.getAttribute(Constant.GUEST_SESSION).toString();
        return guestService.getMyInfo(guestId);
    }

    @PutMapping("/update")
    public GuestInfoDto updateMyInfo(@RequestBody GuestInfoDto guestInfoDto) {
        String guestId = guestInfoDto.getGuestId();
        return guestService.updateMyInfo(guestInfoDto);
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
