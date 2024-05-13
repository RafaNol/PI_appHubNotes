package com.PIappHubNotes.hubNotes.controller;

import com.PIappHubNotes.hubNotes.model.Meta;
import com.PIappHubNotes.hubNotes.repository.MetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/metas")
public class MetaController {

    @Autowired
    private MetaRepository metaRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Meta adicionarMeta(@RequestBody Meta meta) {
        LocalDateTime currentDateTime = LocalDateTime.now();
        meta.setDiasSeguidos(0);
        meta.setCreated_at(currentDateTime);
        meta.setTotalDias(0);
        meta.setUpdated_at(null);
        return metaRepository.save(meta);
    }

    @GetMapping
    public List<Meta> listarMetas() {
        return metaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Meta> getMeta(@PathVariable String id){
        return metaRepository.findById(id)
                .map(meta -> new ResponseEntity<>(meta, HttpStatus.OK))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Meta não encontrada"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Meta> atualizarMeta(@PathVariable String id, @RequestBody Meta meta) {

        Meta updatedMeta = metaRepository.findById(id)
                .map(m -> {
                    m.setTitle(meta.getTitle());
                    m.setTotalDias(m.getTotalDias() + 1);
                    LocalDateTime currentDate = LocalDateTime.now();
                    if (m.getUpdated_at() == null) {
                        m.setDiasSeguidos(1);
                    } else if (m.getUpdated_at().toLocalDate().plusDays(1).isEqual(currentDate.toLocalDate())) {
                        m.setDiasSeguidos(m.getDiasSeguidos() + 1);
                    } else {
                        m.setDiasSeguidos(0);
                    }
                    m.setUpdated_at(currentDate);
                    return metaRepository.save(m);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Meta não encontrada"));
        return new ResponseEntity<>(updatedMeta, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirMeta(@PathVariable String id) {
        metaRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}