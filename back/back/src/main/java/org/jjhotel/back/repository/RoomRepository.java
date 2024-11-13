package org.jjhotel.back.repository;

import org.jjhotel.back.domain.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Integer> {
    Optional<Room> findByRoomId(int roomId);
}
