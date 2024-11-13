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
public class RoomListDto {
  private int roomId;
  private String roomName;
  private String imageURL1;

  public static RoomListDto of(Room room) {
    RoomListDto dto = new RoomListDto();
    dto.setRoomId(room.getRoomId());
    dto.setRoomName(room.getRoomName());
    dto.setImageURL1(room.getImageURL1());
    return dto;
  }
}
