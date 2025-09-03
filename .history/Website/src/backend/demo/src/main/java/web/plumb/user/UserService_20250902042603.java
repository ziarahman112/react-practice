package web.plumb.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

        private UserRepository userRepository;

        @Autowired
        public UserService(UserRepository userRepository) {
                this.userRepository = userRepository;
        }

        public List<UserModel> getUser() {
                return userRepository.findAll();

        }

        public void addNewUser(UserModel user) {
                System.out.println("Adding new user: " + user.getEmail());

                if (!userRepository.existsByEmail(user.getEmail())) {
                        userRepository.save(user);
                } else {
                        System.out.println("User already exists: " + user.getEmail());
                }
        }

        public void deleteUser(Long id) {
                System.out.println("Deleting user with ID: " + id);
                userRepository.deleteById(id);
        }
}