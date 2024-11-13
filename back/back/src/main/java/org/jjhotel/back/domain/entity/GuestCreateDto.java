package org.jjhotel.back.domain.entity;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GuestCreateDto {
    private String guestId;
    private String password;
    private String guestName;
    private String guestEmail;

    public static GuestCreateDto of(Guest guest) {
        // Guest 객체를 바탕으로 GuestCreateDto 객체를 생성하고 반환
        GuestCreateDto dto = new GuestCreateDto();
        dto.setGuestId(guest.getGuestId());
        dto.setPassword(guest.getPassword());
        dto.setGuestName(guest.getGuestName());
        dto.setGuestEmail(guest.getGuestEmail());
        return dto;  // 반환문 추가
    }
}
