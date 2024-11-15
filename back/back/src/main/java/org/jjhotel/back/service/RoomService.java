package org.jjhotel.back.service;

import lombok.RequiredArgsConstructor;
import org.jjhotel.back.domain.dto.DoReservationInfoDto;
import org.jjhotel.back.domain.dto.RoomFilterOutputDto;
import org.jjhotel.back.domain.dto.RoomListDto;
import org.jjhotel.back.domain.entity.Reservation;
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

  public List<RoomFilterOutputDto> getFilterdRooms(DoReservationInfoDto info) {
    // 1. 최대 인원 수 조건에 맞는 방 목록
    List<Room> rooms = roomRepository.findRoomsByMaxGuestsGreaterThanEqual(info.getGuestCount());

    List<RoomFilterOutputDto> availableRooms = new ArrayList<>();

    for (Room room : rooms) {
      // 2. 방의 예약 리스트에서 특정 기간 동안의 예약을 확인
      int reservedCount = 0;
      for (Reservation reservation : room.getReservations()) {
        if (reservation.getCheckInDate().isBefore(info.getCheckOutDate()) && reservation.getCheckOutDate().isAfter(info.getCheckInDate())) {
          reservedCount += reservation.getRoomCount();
        }
      }

      // 3. 예약 가능 방 수 계산
      int availableRoomCount = room.getRoomCount() - reservedCount;

      // 4. 객실 수보다 많은지 확인
      if (availableRoomCount >= info.getRoomCount()) {
        RoomFilterOutputDto.of(room);
        availableRooms.add(RoomFilterOutputDto.of(room));
      }
    }

    return availableRooms;
  }
  
  public RoomDetailDto getRoomDetail(int roomId) {
      Room room = roomRepository.findByRoomId(roomId).get();
      RoomDetailDto roomDetailDto = RoomDetailDto.of(room);
      return roomDetailDto;
  }
}
