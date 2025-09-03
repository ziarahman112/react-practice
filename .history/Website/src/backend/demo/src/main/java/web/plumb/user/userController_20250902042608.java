package web.plumb.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/users")
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

        public void deleteUser(@PathVariable Long id) {
                userService.deleteUser(id);
        }
}
