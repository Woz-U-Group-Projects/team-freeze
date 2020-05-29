package com.example.groupproject.auth;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private MySQLUserDetailsService userService;
  UserRepository userRepository;
  
  @GetMapping()
  public List<User> getUsers() {  
    return userRepository.findAll();
  }

  @PostMapping("/register")
  public void register(@RequestBody User newUser) {
    userService.Save(newUser);
  }
}
