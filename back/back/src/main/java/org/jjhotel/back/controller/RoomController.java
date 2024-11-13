package org.jjhotel.back.controller;

import lombok.RequiredArgsConstructor;
import org.jjhotel.back.domain.dto.ReservationInfo;
import org.jjhotel.back.domain.dto.RoomFilterOutputDto;
import org.jjhotel.back.domain.dto.RoomListDto;
import org.jjhotel.back.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")   //차후 글로벌 설정으로 변경 필요 (스프링 시큐리티 하면서 해도 될 것 같음)
@RequestMapping("/room")
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
}
