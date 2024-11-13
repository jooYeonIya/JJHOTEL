package org.jjhotel.back.exception;

public class NotUniqueGuestIdException extends RuntimeException {
    public NotUniqueGuestIdException() {
        super();
    }

    public NotUniqueGuestIdException(String message) {
        super(message);
    }
}
