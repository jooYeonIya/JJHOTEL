# OpenJDK 17을 기반으로 하는 경량화 스프링 부트 이미지
FROM openjdk:17-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 빌드된 JAR 파일을 컨테이너에 복사
COPY build/libs/*.jar app.jar

# 컨테이너의 8080 포트를 외부에 노출
EXPOSE 8080

# JAR 파일 실행
ENTRYPOINT ["java", "-jar", "app.jar"]