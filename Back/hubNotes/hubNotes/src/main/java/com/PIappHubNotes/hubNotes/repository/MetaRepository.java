package com.PIappHubNotes.hubNotes.repository;

import com.PIappHubNotes.hubNotes.model.Meta;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetaRepository extends MongoRepository<Meta, String> {
}