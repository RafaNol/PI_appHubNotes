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

    @GetMapping
    public List<Nota> listarNotas() {
        return notaRepository.findAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Nota> atualizarNota(@PathVariable String id, @RequestBody Nota nota) {
        Nota updatedNota = notaRepository.findById(id)
                .map(n -> {
                    n.setTitle(nota.getTitle());
                    n.setBody(nota.getBody());
                    return notaRepository.save(n);
                })
                .orElseGet(() -> {
                    nota.setId(id);
                    return notaRepository.save(nota);
                });
        return new ResponseEntity<>(updatedNota, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirNota(@PathVariable String id) {
        notaRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}