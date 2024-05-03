package com.PIappHubNotes.hubNotes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Meta {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String title;
    private int diasSeguidos;
    private int totalDias;

    @CreatedDate
    private LocalDateTime created_at;

    @LastModifiedDate
    private LocalDateTime updated_at;

    public int diasTotaisDaMeta(int contador) {

        for (int i = 0; i >= 1; i++) {
            contador++;
        }
        return contador;
    }

    public int diasTotaisSeguidos(int diasSeguidos) {


        return diasSeguidos;
    }
}