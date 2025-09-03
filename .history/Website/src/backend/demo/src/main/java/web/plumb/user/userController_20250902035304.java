package web.plumb.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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
        public void addNewUser(UserModel user) {
     userService.addNewUser(user);
}
