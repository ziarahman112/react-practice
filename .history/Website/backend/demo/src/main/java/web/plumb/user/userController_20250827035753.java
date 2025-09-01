package main.java.web.plumb.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public List<UserModel> getUser() {
        return List.of(
                new UserModel("John", "Doe", "john.doe@example.com", "password123", 1234567890L, "123 Main St", "12345"),
                new UserModel("Jane", "Smith", "jane.smith@example.com", "password456", 987654321L, "456 Elm St",
                        "67890"));
    }
}
