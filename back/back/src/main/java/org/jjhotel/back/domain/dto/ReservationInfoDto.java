package org.jjhotel.back.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationInfoDto {
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String totalNights;
    private String roomName;
    private int guestCount;
}
