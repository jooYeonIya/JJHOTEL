package org.jjhotel.back.domain.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ReservationInfo {
  private LocalDate checkInDate;
  private LocalDate checkOutDate;
  private LocalDate reservationDate;
  private int guestCount;
  private int roomCount;
}
