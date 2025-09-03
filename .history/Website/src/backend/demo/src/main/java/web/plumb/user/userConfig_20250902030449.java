package web.plumb.user;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

public class userConfig {
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {

            UserModel user = new UserModel("John", "Doe", "john.doe@example.com", "password123", 1234567890L,
                    "123 Main St",
                    "12345");

            userRepository.save(user);
        };
    }
}
