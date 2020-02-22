package com.assignment3.app.chat;

import com.assignment3.app.chat.dto.UserRooms;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/chat")
public class ChatController {
    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/save-user")
    @ResponseStatus(code = HttpStatus.OK)
    public void saveUser(@RequestBody User user) {
        this.chatService.saveUser(user);
    }

    @PostMapping("/save-room")
    @ResponseStatus(code = HttpStatus.OK)
    public void saveRoom(@RequestBody Room room) {
        this.chatService.saveRoom(room);
    }

    @PostMapping("/join-room")
    @ResponseStatus(code = HttpStatus.OK)
    public void joinRoom(@RequestBody UserRooms user) {
        this.chatService.joinOrLeaveRoom(user, true);
    }

    @PostMapping("/leave-room")
    @ResponseStatus(code = HttpStatus.OK)
    public void leaveRoom(@RequestBody UserRooms userRooms) {
        this.chatService.joinOrLeaveRoom(userRooms, false);
    }

    @PostMapping("/save-message")
    @ResponseStatus(code = HttpStatus.OK)
    public void saveMessage(@RequestBody Message message) {
        this.chatService.saveMessage(message);
    }

    @GetMapping("/get-user/{username}")
    @ResponseBody
    public User getUser(@PathVariable String username) {
        return this.chatService.getUserByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"User does not exist"));
    }

}