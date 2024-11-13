package org.jjhotel.back.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Room {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int roomId;
  @Column(length = 45)
  private String roomName;
  private int maxGuests;
  private int roomPrice;
  private int roomSize;
  @Column(length = 500)
  private String description;
  @Column(length = 100)
  private String imageURL1;
  @Column(length = 100)
  private String imageURL2;
  @Column(length = 100)
  private String imageURL3;
  @Column(length = 100)
  private String imageURL4;
  private int roomCount;
  @OneToMany(mappedBy = "room")
  private List<Reservation> reservations;
}
