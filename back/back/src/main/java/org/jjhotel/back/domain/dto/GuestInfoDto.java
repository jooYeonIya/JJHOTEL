package org.jjhotel.back.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jjhotel.back.domain.entity.Guest;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GuestInfoDto {
    private String guestId;
    private String guestName;
    private String guestEmail;

    public static GuestInfoDto of(Guest guest) {
        GuestInfoDto guestInfoDto = new GuestInfoDto(
                guest.getGuestId(),
                guest.getGuestName(),
                guest.getGuestEmail()
        );
        return guestInfoDto;
    }
}
