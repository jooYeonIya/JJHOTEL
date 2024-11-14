package org.jjhotel.back.service;

import lombok.RequiredArgsConstructor;

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

    public GuestCreateDto createGuest(GuestCreateDto guestCreateDto) {

        if (guestRepository.existsById(guestCreateDto.getGuestId())) {
            throw new NotUniqueGuestIdException("이미 존재하는 ID입니다.");
        }

        Guest guest = new Guest(
                guestCreateDto.getGuestId(),
                guestCreateDto.getPassword(),
                guestCreateDto.getGuestName(),
                guestCreateDto.getGuestEmail());
        guestRepository.save(guest);
        return guestCreateDto;
    }

    public ReservationInfoDto getGuestReservationInfo(String guestId) {
        // 예약 정보를 조회: guestId에 해당하는 예약을 찾음
        Optional<Reservation> reservationOpt = reservationRepository.findByGuest_GuestId(guestId);
        if (reservationOpt.isEmpty()) {
            throw new RuntimeException("게스트Id로 예약정보를 찾지 못햇습니다.: " + guestId);
        }

        // 예약 정보가 있으면 ReservationInfoDto로 변환하여 반환
        Reservation reservation = reservationOpt.get();
        return new ReservationInfoDto(
                reservation.getCheckInDate(),
                reservation.getCheckOutDate(),
                (int) ChronoUnit.DAYS.between(reservation.getCheckInDate(), reservation.getCheckOutDate()), // totalNights
                reservation.getRoom().getRoomName(), // 방 이름
                reservation.getGuestCount(),
                reservation.getReservationId()
        );
    }
}
