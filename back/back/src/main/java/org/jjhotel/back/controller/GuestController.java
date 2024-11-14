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
    public String login(@RequestBody GuestLoginDto guestLoginDto, HttpServletRequest request, HttpServletResponse response) { //일단 스트링으로 반환
        boolean result = guestService.findGuest(guestLoginDto);

        if (result) {
            HttpSession session = request.getSession(true);
            session.setAttribute(Constant.GUEST_SESSION, guestLoginDto.getGuestId());
            Cookie cookie = new Cookie(Constant.GUEST_COOKIE, Constant.GUEST_SESSION);
            cookie.setMaxAge(30 * 60);
            cookie.setPath("/");
            response.addCookie(cookie);
            return "성공";
        }

        return "아이디 및 비밀번호를 확인해 주세요";
    }
}
