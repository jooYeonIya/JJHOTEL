package org.jjhotel.back.service;

import lombok.RequiredArgsConstructor;
import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.dto.ReservationWithGuestInfoDto;
import org.jjhotel.back.domain.entity.Reservation;
import org.jjhotel.back.repository.ReservationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ReservationService {
    private final ReservationRepository reservationRepository;

    public ReservationInfoDto getReservationInfo(ReservationWithGuestInfoDto reservationWithGuestInfoDto) {
        Reservation reservation = reservationRepository.findByReservationIdAndGuest_GuestName(
                reservationWithGuestInfoDto.getReservationId(),
                reservationWithGuestInfoDto.getGuestName()).get();
        ReservationInfoDto reservationInfoDto = ReservationInfoDto.of(reservation);
        return reservation.isCanceled() ? null : reservationInfoDto;
    }

    public void deleteReservation(String reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId).get();
        reservation.setCanceled(true);
        reservationRepository.save(reservation);
    }

}
