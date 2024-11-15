package org.jjhotel.back.controller;

import lombok.RequiredArgsConstructor;
import org.jjhotel.back.domain.dto.ReservationInfo;
import org.jjhotel.back.domain.dto.RoomFilterOutputDto;
import lombok.extern.slf4j.Slf4j;
import org.jjhotel.back.domain.dto.RoomListDto;
import org.jjhotel.back.domain.dto.RoomDetailDto;
import org.jjhotel.back.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://3.35.14.52", "http://www.jjhotel.kro.kr"}) //차후 글로벌 설정으로 변경 필요 (스프링 시큐리티 하면서 해도 될 것 같음)
@RequestMapping("/room")
@Slf4j
public class RoomController {
  private final RoomService roomService;

  @GetMapping("/all")
  public List<RoomListDto> getAllRooms() {
    return roomService.getAllRooms();
  }

  @PostMapping("/filtered")
  public List<RoomFilterOutputDto> getFilterdRooms(@RequestBody ReservationInfo reservationInfo) {
    return roomService.getFilterdRooms(reservationInfo);
  }

  @GetMapping("/detail/{roomId}")
  public RoomDetailDto getRoomDetail(@PathVariable("roomId") int roomId) {
    log.info("Room id: {}", roomId);
    return roomService.getRoomDetail(roomId);
  }
}
