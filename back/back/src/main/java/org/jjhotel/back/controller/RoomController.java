package org.jjhotel.back.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jjhotel.back.domain.dto.RoomListDto;
import org.jjhotel.back.domain.dto.RoomDetailDto;
import org.jjhotel.back.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/room")
@Slf4j
public class RoomController {
  private final RoomService roomService;

  //차후 글로벌 설정으로 변경 필요 (스프링 시큐리티 하면서 해도 될 것 같음)
  @CrossOrigin(origins = "http://localhost:5173")
  @GetMapping("/all")
  public List<RoomListDto> getAllRooms() {
    return roomService.getAllRooms();
  }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/detail/{roomId}")
    public RoomDetailDto getRoomDetail(@PathVariable("roomId") int roomId) {
        log.info("Room id: {}", roomId);
        return roomService.getRoomDetail(roomId);
    }
}
