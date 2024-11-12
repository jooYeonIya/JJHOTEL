package org.jjhotel.back.repository;

import org.jjhotel.back.domain.entity.Reservation;
import org.jjhotel.back.domain.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, String> {
}
