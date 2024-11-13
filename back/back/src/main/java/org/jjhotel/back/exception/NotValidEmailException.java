package org.jjhotel.back.exception;

public class NotValidEmailException extends RuntimeException {
    public NotValidEmailException() {
        super();
    }

    public NotValidEmailException(String message) {
        super(message);
    }
}
