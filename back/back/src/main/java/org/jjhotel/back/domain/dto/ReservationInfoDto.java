package org.jjhotel.back.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jjhotel.back.domain.entity.Reservation;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationInfoDto {
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private int totalNights;
    private String roomName;
    private int guestCount;
    private String reservationId;

    public static ReservationInfoDto of(Reservation reservation) {
        LocalDate checkInDate = reservation.getCheckInDate();
        LocalDate checkOutDate = reservation.getCheckOutDate();
        int totalNights = (int) ChronoUnit.DAYS.between(checkInDate, checkOutDate);

        ReservationInfoDto reservationInfoDto = new ReservationInfoDto(
                reservation.getCheckInDate(),
                reservation.getCheckOutDate(),
                totalNights,
                reservation.getRoom().getRoomName(),
                reservation.getGuestCount(),
                reservation.getReservationId()
        );
        return reservationInfoDto;
    }
}
