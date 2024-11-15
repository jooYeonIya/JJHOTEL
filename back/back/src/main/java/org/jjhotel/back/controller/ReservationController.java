package org.jjhotel.back.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jjhotel.back.constants.Constant;
import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.dto.ReservationWithGuestInfoDto;
import org.jjhotel.back.domain.dto.RoomReservationDto;
import org.jjhotel.back.service.ReservationService;
import org.jjhotel.back.utilities.email.EmailMessage;
import org.jjhotel.back.utilities.email.EmailService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://3.35.14.52")
@RequestMapping("/reservation")
public class ReservationController {
    private final ReservationService reservationService;
    private final EmailService emailService;

    @PostMapping("/check")
    public ReservationInfoDto getReservationInfo(@RequestBody ReservationWithGuestInfoDto reservationWithGuestInfoDto) {
        return reservationService.getReservationInfo(reservationWithGuestInfoDto);
    }

    @PatchMapping("/check/delete/{reservationId}")
    public String deleteReservation(@PathVariable("reservationId") String reservationId){
        reservationService.deleteReservation(reservationId);
        return "redirect:/";
    }

    @PostMapping()
    public String doReservation(@RequestBody RoomReservationDto info, HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        String guestId = session.getAttribute(Constant.GUEST_SESSION).toString();
        String reservation = reservationService.doReservation(info, guestId);
        EmailMessage message = EmailMessage.builder()
            .to(info.getGuestEmail())
            .title("예약 확인 메일입니다.")
            .message("안녕하세요. JJ 호텔입니다."
                + "<br><br><br> 이용 날짜: "
                + "<strong>" + info.getCheckInDate() + " ~ "  + info.getCheckOutDate() + "</strong>"
                + "<br><br> 예약 번호: <strong>" + reservation + "</strong>"
                + "<br><br><br> 예약이 완료되었습니다. <br> 저희 호텔을 이용해주셔서 감사합니다. ")
            .build();
        emailService.sendMail(message);
        return reservation;
    }
}
