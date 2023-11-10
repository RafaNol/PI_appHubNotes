package com.PIappHubNotes.hubNotes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class HubNotesApplication {

	public static void main(String[] args) {
		SpringApplication.run(HubNotesApplication.class, args);
	}
}