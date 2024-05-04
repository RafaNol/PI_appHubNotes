package com.PIappHubNotes.hubNotes.model;

import com.fasterxml.jackson.annotation.JsonInclude;
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

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Boolean metaFeita = false;
    private int diasSeguidos;
    private int totalDias;

    @CreatedDate
    private LocalDateTime created_at;

    @LastModifiedDate
    private LocalDateTime updated_at;

    //FAZ A CONTAGEM DO TOTAL DOS DIAS EM QUE O USUÁRIO REALISOU A META SEJAM DIAS SEGUIDOS OU NÃO
    public void diasTotaisDaMeta() {

        if (updated_at != created_at && metaFeita == true) {
            totalDias += 1;
        }
    }

    //FAZ A CONTAGEM DOS DIAS SEGUIDOS, CASO A SEGUÊNCIA SEJA INTERROMPIDA O CONTADOR É ZERADO E RECOMEÇA A CONTAGEM
    public int diasTotaisSeguidos() {

        if(null != metaFeita && metaFeita == true) {
            diasSeguidos += 1;
        } else if(null != metaFeita && metaFeita == false) {
            diasSeguidos = 0;
        }
        return diasSeguidos;
    }
}