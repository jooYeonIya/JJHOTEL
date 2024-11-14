package org.jjhotel.back.service;

import lombok.RequiredArgsConstructor;

import org.jjhotel.back.domain.dto.GuestLoginDto;
import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.entity.Guest;
import org.jjhotel.back.domain.dto.GuestCreateDto;
import org.jjhotel.back.domain.entity.Reservation;
import org.jjhotel.back.exception.NotUniqueGuestIdException;
import org.jjhotel.back.exception.NotValidEmailException;
import org.jjhotel.back.repository.GuestRepository;
import org.jjhotel.back.repository.ReservationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.temporal.ChronoUnit;
import java.util.Optional;

import java.util.ArrayList;
import java.util.List;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
@Transactional
public class GuestService {
    private final GuestRepository guestRepository;
    private final ReservationRepository reservationRepository;

    public void createGuest(GuestCreateDto guestCreateDto) {

        if (guestRepository.existsById(guestCreateDto.getGuestId())) {
            throw new NotUniqueGuestIdException("이미 존재하는 ID입니다.");
        }

        if (!isValidEmail(guestCreateDto.getGuestEmail())){
            throw new NotValidEmailException("유효하지 않은 이메일 형식입니다.");
        }

        Guest guest = new Guest(
                guestCreateDto.getGuestId(),
                guestCreateDto.getPassword(),
                guestCreateDto.getGuestName(),
                guestCreateDto.getGuestEmail());
        guestRepository.save(guest);
    }

    private boolean isValidEmail(String email) {
        // 이메일 정규 표현식
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }

    public List<ReservationInfoDto> getGuestReservationInfo(String guestId) {
        List<Reservation> reservationList = reservationRepository.findByGuest_GuestId(guestId);
        List<ReservationInfoDto> dtoList = new ArrayList<>();

        for (Reservation reservation : reservationList) {
            dtoList.add(ReservationInfoDto.of(reservation));
        }

        return dtoList;
    }

    public Boolean findGuest(GuestLoginDto guestLoginDto) {
        Guest guest = guestRepository.findById(guestLoginDto.getGuestId()).orElse(null);
        return guest != null && guest.getPassword().equals(guestLoginDto.getPassword());
  }
}