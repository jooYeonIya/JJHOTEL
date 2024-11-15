package org.jjhotel.back.utilities.email;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

  private final JavaMailSender javaMailSender;

  @Async
  public void sendMail(EmailMessage emailMessage) {

    MimeMessage mimeMessage = javaMailSender.createMimeMessage();

    try {
      MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
      mimeMessageHelper.setTo(emailMessage.getTo()); // 메일 수신자
      mimeMessageHelper.setSubject(emailMessage.getTitle()); // 메일 제목
      mimeMessageHelper.setText(emailMessage.getMessage(), true); // 메일 본문 내용, HTML 여부
      javaMailSender.send(mimeMessage);
    } catch (MessagingException e) {
      throw new RuntimeException(e);
    }
  }
}