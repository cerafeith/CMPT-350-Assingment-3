package com.assignment3.app.chat;

import com.assignment3.app.chat.dto.UserRooms;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
public class ChatService {
    private final UserRepository userRepository;
    private final MessageRepository messageRepository;
    private final RoomRepository roomRepository;

    public ChatService(UserRepository userRepository, MessageRepository messageRepository, RoomRepository roomRepository) {
        this.userRepository = userRepository;
        this.messageRepository = messageRepository;
        this.roomRepository = roomRepository;
    }

    void saveUser(User user) {
        if(this.userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw  new IllegalArgumentException("User already exists");
        }

        this.userRepository.save(user);
    }

    void saveRoom(Room room) {
        if(this.roomRepository.findByName(room.getName()).isPresent()) {
            throw new IllegalArgumentException("Room Name already exists");
        }
        this.roomRepository.save(room);
    }

    List<Room> getAllRooms() {
        return this.roomRepository.findAll();
    }

    void saveMessage(Message message) {
        this.messageRepository.save(message);
    }

    List<Message> getMessagesByRoomId(UUID id) {
        return this.messageRepository.findMessagesByRoomId(id);
    }

    Optional<User> getUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    void joinOrLeaveRoom(UserRooms userRooms, boolean shouldJoin) {
        this.userRepository
                .findById(userRooms.getUserId())
                .ifPresent((targetUser) -> {
                    Set<Room> newRooms = targetUser.getRooms();
                    List<Room> targetRoom = this.roomRepository.findAllById(userRooms.getRoomId());

                    if (shouldJoin) {
                        newRooms.addAll(targetRoom);
                    } else {
                        newRooms.removeAll(targetRoom);
                    }

                    this.userRepository.save(targetUser.toBuilder().rooms(newRooms).build());
                });
    }
}
