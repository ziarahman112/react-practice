package web.plumb.user;

import java.util.List;

public class UserService {

    public List<UserModel> getUser() {
        return List.of(
                new UserModel("John", "Doe", "john.doe@example.com", "password123", 1234567890L,
                        "123 Main St",
                        "12345"),
                new UserModel("Jane", "Smith", "jane.smith@example.com", "password456", 987654321L,
                        "456 Elm St",
                        "67890"));
    }
}
