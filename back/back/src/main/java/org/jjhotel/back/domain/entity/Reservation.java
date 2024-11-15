package org.jjhotel.back.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jjhotel.back.domain.dto.RoomReservationDto;

import java.time.LocalDate;
import java.util.Optional;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
  @Id
  @Column(length = 45)
  private String reservationId;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "room_id")
  private Room room;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "guest_id", nullable = true)
  private Guest guest;
  private LocalDate checkInDate;
  private LocalDate checkOutDate;
  private LocalDate reservationDate;
  private int guestCount;
  private int totalPrice;
  private int roomCount;
  private boolean isCanceled;

  public static Reservation createReservation(RoomReservationDto dto, Room room, Guest guest) {
    Reservation reservation = new Reservation();
    reservation.setRoom(room);
    reservation.setGuest(guest);
    reservation.setGuestCount(dto.getGuestCount());
    reservation.setTotalPrice(dto.getTotalPrice());
    reservation.setRoomCount(dto.getRoomCount());
    reservation.setCanceled(false);
    return reservation;
  }
}
