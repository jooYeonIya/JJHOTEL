package org.jjhotel.back.service;

import lombok.RequiredArgsConstructor;
import org.jjhotel.back.domain.entity.Guest;
import org.jjhotel.back.domain.entity.GuestCreateDto;
import org.jjhotel.back.exception.NotUniqueGuestIdException;
import org.jjhotel.back.exception.NotValidEmailException;
import org.jjhotel.back.repository.GuestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
@Transactional
public class GuestService {
    private final GuestRepository guestRepository;

    public GuestCreateDto createGuest(GuestCreateDto guestCreateDto) {

        if (guestRepository.existsById(guestCreateDto.getGuestId())) {
            throw new NotUniqueGuestIdException("이미 존재하는 ID입니다.");
        }

        if (!isValidEmail(guestCreateDto.getGuestEmail())){
            throw new NotValidEmailException("유효하지 않은 이메일 형식입니다.");
        }

        Guest guest = new Guest(
                guestCreateDto.getGuestId(),
                guestCreateDto.getPassword(),
                guestCreateDto.getGuestName(),
                guestCreateDto.getGuestEmail());
        Guest saved = guestRepository.save(guest);

        return GuestCreateDto.of(saved);
    }

    private boolean isValidEmail(String email) {
        // 이메일 정규 표현식
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }
}
