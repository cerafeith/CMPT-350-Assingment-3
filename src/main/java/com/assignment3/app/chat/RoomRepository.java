package com.assignment3.app.chat;

import com.assignment3.app.testing.Testing;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface RoomRepository extends CrudRepository<Room, UUID> {
    Optional<Room> findByName(String name);
    List<Room> findAllById(Iterable id);
}
