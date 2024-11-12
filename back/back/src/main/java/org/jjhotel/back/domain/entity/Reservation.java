package org.jjhotel.back.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

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
  @JoinColumn(name = "guest_id")
  private Guest guest;
  private LocalDate checkInDate;
  private LocalDate checkOutDate;
  private LocalDate reservationDate;
  private int guestCount;
  private int totalPrice;
  private int roomCount;
  private boolean isCanceled;
}
