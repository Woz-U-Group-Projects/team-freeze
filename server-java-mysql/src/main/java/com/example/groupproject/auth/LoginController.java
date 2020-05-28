package com.example.groupproject.auth;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/home")
public class LoginController {
	
	@Autowired
	LoginRepository loginRepository;

	
}
