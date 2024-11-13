package org.jjhotel.back.repository;

import org.jjhotel.back.domain.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Integer> {
  List<Room> findRoomsByMaxGuestsGreaterThanEqual(int maxGuests);
}
