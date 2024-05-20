package com.neochat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NeoChatApplication {

    public static void main(String[] args) {
        System.out.println("localhost:8000");
        SpringApplication.run(NeoChatApplication.class, args);
    }

}
