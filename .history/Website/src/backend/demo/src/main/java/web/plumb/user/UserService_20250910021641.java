package web.plumb.user;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

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

                if (userRepository.existsById(id)) {
                        System.out.println("Deleting user with ID: " + id);
                        userRepository.deleteById(id);
                } else {
                        System.out.println("User not found with ID: " + id);
                }
        }

        @Transactional
        public void updateUser(Long id, UserModel user) {
                if (userRepository.existsById(id)) {
                        user.setId(id); // make sure the ID is set
                        userRepository.save(user);
                        System.out.println("Updated user with ID: " + id);
                } else {
                        System.out.println("User not found with ID: " + id);
                }
        }

        public UserModel login(UserModel user) throws Exception {

                Optional<UserModel> existingUser = userRepository.findByEmail(user.getEmail());
                if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
                        System.out.println("Login successful for user: " + user.getEmail());
                        return existingUser.get();
                } else {
                        throw new Exception("Invalid email or password");
                }
        }

}