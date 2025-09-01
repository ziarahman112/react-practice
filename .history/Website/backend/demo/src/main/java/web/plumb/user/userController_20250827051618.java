package web.plumb.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
        private UserService userService;

        public UserController(UserService userService) {
                this.userService = userService;
        }

        @GetMapping
        public List<UserModel> getUser() {
                return userService.getUser();
        }
}
