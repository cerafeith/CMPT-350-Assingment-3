package com.assignment3.app.chat;

import com.assignment3.app.testing.Testing;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface MessageRepository extends CrudRepository<Message, UUID> {

}
