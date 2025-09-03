package web.plumb.user;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class userConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {

            UserModel user = new UserModel("John", "Doe", "john.doe@example.com", "password123", 1234567890L,
                    "123 Main St",
                    "12345");
            UserModel user2 = new UserModel("Jane", "Doe", "jane.doe@example.com", "password", 123467890L,
                    "111 Main St",
                    "ub3345");

            if (!userRepository.existsByEmail(user.getEmail())) {
                userRepository.saveAll(List.of(user, user2));
            }
        };
    }
}
