package com.neochat.entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Message {
    private String type;
    private String content;
    private String senderId;
    private LocalDateTime timestamp;
}
