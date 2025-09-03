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

            userRepository.saveAll(List.of(user));
        };
    }
}
