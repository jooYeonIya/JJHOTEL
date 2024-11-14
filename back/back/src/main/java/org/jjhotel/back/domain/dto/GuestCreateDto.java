package org.jjhotel.back.domain.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jjhotel.back.domain.entity.Guest;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GuestCreateDto {
    private String guestId;
    private String password;
    private String guestName;
    private String guestEmail;
}
