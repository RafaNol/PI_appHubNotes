package com.PIappHubNotes.hubNotes.repository;

import com.PIappHubNotes.hubNotes.model.Nota;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotaRepository extends MongoRepository<Nota, String> {
}