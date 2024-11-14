package org.jjhotel.back.domain.dto;

import lombok.*;
import org.jjhotel.back.domain.entity.Reservation;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RoomReservationDto {
  private int roomId;
  private String guestEmail;
  private String checkInDate;
  private String checkOutDate;
  private int guestCount;
  private String reservationDate;
  private int totalPrice;
  private int roomCount;
}
