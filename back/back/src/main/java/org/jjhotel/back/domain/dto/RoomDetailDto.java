package org.jjhotel.back.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jjhotel.back.domain.entity.Room;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoomDetailDto {
    private String roomName;
    private String description;
    private String imageURL1;
    private String imageURL2;
    private String imageURL3;
    private String imageURL4;
    private int maxGuests;
    private int roomPrice;
    private int roomSize;

    public static RoomDetailDto of(Room room) {
        RoomDetailDto dto = new RoomDetailDto(
                room.getRoomName(),
                room.getDescription(),
                room.getImageURL1(),
                room.getImageURL2(),
                room.getImageURL3(),
                room.getImageURL4(),
                room.getMaxGuests(),
                room.getRoomPrice(),
                room.getRoomSize()
        );
        return dto;
    }

}
