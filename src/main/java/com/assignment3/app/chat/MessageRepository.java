package com.assignment3.app.chat;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface MessageRepository extends CrudRepository<Message, UUID> {

    List<Message> findMessagesByRoomId(UUID id);

}
