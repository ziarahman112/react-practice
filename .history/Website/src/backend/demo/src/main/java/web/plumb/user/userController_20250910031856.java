package web.plumb.user;

import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Transactional;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
        private UserService userService;

        @Autowired
        public UserController(UserService userService) {
                this.userService = userService;
        }

        @GetMapping
        public List<UserModel> getUser() {
                return userService.getUser();
        }

        @PostMapping
        public void addNewUser(@RequestBody UserModel user) {
                userService.addNewUser(user);
        }

        @DeleteMapping("{id}")
        public void deleteUser(@PathVariable("id") Long id) {
                userService.deleteUser(id);
        }

        @PutMapping(path = "{id}")
        public void updateUser(@PathVariable("id") Long id, @RequestBody UserModel user) {

                userService.updateUser(id, user);
        }

        @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody UserModel user) {
                try {
                        UserModel loggedInUser = userService.login(user);
                        System.out.println("Login successful for user: " + loggedInUser.getEmail());
                        return ResponseEntity.ok(loggedInUser);
                } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
                }

        }

}