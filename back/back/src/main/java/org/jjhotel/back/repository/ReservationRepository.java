package org.jjhotel.back.repository;

import org.jjhotel.back.domain.dto.ReservationInfoDto;
import org.jjhotel.back.domain.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, String> {
    Optional<Reservation> findByGuest_GuestId(String guestId);
    Optional<Reservation> findByReservationId(String reservationId);
    List<Reservation> findByReservationDate(LocalDate reservationDate);
}
