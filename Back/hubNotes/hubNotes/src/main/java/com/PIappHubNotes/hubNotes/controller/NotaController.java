package com.PIappHubNotes.hubNotes.controller;

import com.PIappHubNotes.hubNotes.model.Nota;
import com.PIappHubNotes.hubNotes.repository.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notas")
public class NotaController {

    @Autowired
    private NotaRepository notaRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Nota adicionarNota(@RequestBody Nota nota) {
        return notaRepository.save(nota);
    }
}