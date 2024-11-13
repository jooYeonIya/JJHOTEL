package org.jjhotel.back.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jjhotel.back.domain.entity.Room;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomFilterOutputDto {
  private int roomId;
  private String roomName;
  private int maxGuests;
  private int price;
  private String imageURL1;

  public static RoomFilterOutputDto of(Room room) {
    RoomFilterOutputDto dto = new RoomFilterOutputDto();
    dto.roomId = room.getRoomId();
    dto.roomName = room.getRoomName();
    dto.maxGuests = room.getMaxGuests();
    dto.price = room.getRoomPrice();
    dto.imageURL1 = room.getImageURL1();
    return dto;
  }
}
