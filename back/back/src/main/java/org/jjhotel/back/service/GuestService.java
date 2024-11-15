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

    public GuestCreateDto createGuest(GuestCreateDto guestCreateDto) {

        if (guestRepository.existsById(guestCreateDto.getGuestId())) {
            throw new NotUniqueGuestIdException("이미 존재하는 ID입니다.");
        }

        Guest guest = new Guest(
                guestCreateDto.getGuestId(),
                guestCreateDto.getPassword(),
                guestCreateDto.getGuestName(),
                guestCreateDto.getGuestEmail(),
                true);
        guestRepository.save(guest);
        return guestCreateDto;
    }

    public List<ReservationInfoDto> getGuestReservationInfo(String guestId, boolean isCanceled) {
        List<Reservation> reservationList = isCanceled
            ? reservationRepository.findByGuest_GuestIdAndIsCanceledIsTrue(guestId)
            : reservationRepository.findByGuest_GuestIdAndIsCanceledIsFalse(guestId);
        List<ReservationInfoDto> dtoList = new ArrayList<>();

        for (Reservation reservation : reservationList) {
            dtoList.add(ReservationInfoDto.of(reservation));
        }

        return dtoList;
    }

    public Guest findGuest(GuestLoginDto guestLoginDto) {
        return guestRepository.findByGuestIdAndIsActiveIsTrue(guestLoginDto.getGuestId()).orElse(null);
  }

    public void deleteGuest(String guestId) {
        Guest guest = guestRepository.findById(guestId).orElse(null);
        guest.setActive(false);
        guestRepository.save(guest);
    }
}