package main.java.web.plumb.user;

@RestController
@RequestMapping("/users")
public class userController {

    public List<userModel> getUser() {
        return List.of(
                new userModel("John", "Doe", "john.doe@example.com", "password123", 1234567890, "123 Main St", "12345"),
                new userModel("Jane", "Smith", "jane.smith@example.com", "password456", 987654321, "456 Elm St",
                        "67890"));
    }
}
