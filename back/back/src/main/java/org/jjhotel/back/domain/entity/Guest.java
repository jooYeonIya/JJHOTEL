package org.jjhotel.back.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Guest {
  @Id
  @Column(length = 20, unique = true)
  private String guestId;
  @Column(length = 20)
  private String password;
  @Column(length = 20)
  private String guestName;
  @Column(length = 45)
  private String guestEmail;
  private boolean isActive;
}
