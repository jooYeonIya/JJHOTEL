package org.jjhotel.back.repository;

import org.jjhotel.back.domain.entity.Guest;
import org.jjhotel.back.domain.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestRepository extends JpaRepository<Guest, String> {
}
