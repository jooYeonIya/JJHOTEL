package org.jjhotel.back.service;

import lombok.RequiredArgsConstructor;
import org.jjhotel.back.domain.dto.RoomListDto;
import org.jjhotel.back.domain.entity.Room;
import org.jjhotel.back.repository.RoomRepository;
import org.jjhotel.back.domain.dto.RoomDetailDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RoomService {
  private final RoomRepository roomRepository;

  public List<RoomListDto> getAllRooms() {
    List<Room> roomList = roomRepository.findAll();
    List<RoomListDto> roomListDto = new ArrayList<>();
    for (Room room : roomList) {
      RoomListDto roomDto = RoomListDto.of(room);
      roomListDto.add(roomDto);
    }
    return roomListDto;
  }

    public RoomDetailDto getRoomDetail(int roomId) {
        Room room = roomRepository.findByRoomId(roomId).get();
        RoomDetailDto roomDetailDto = RoomDetailDto.of(room);
        return roomDetailDto;
    }

}
