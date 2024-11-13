package org.jjhotel.back.domain.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GuestCreateDto {
    private String guestId;
    private String password;
    private String guestName;
    private String guestEmail;
}
