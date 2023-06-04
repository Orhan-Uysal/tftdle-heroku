package com.wordl.tftle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TftleApplication {

	public static void main(String[] args) {
		SpringApplication.run(TftleApplication.class, args);
	}

}
