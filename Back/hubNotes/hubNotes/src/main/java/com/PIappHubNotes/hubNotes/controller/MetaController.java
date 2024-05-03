package com.PIappHubNotes.hubNotes.controller;

import com.PIappHubNotes.hubNotes.model.Meta;
import com.PIappHubNotes.hubNotes.repository.MetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/metas")
public class MetaController {

    @Autowired
    private MetaRepository metaRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Meta adicionarMeta(@RequestBody Meta meta) {
        return metaRepository.save(meta);
    }

    @GetMapping
    public List<Meta> listarMetas() {
        Meta meta = new Meta();
        meta.getTotalDias();
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
//                    m.diasTotaisDaMeta(meta.diasTotaisDaMeta(m.getDiasSeguidos()));
//                    m.diasTotaisDaMeta(meta.diasTotaisDaMeta(m.getTotalDias()));
//                    m.diasTotaisSeguidos(meta.diasTotaisSeguidos(m.getDiasSeguidos()));
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