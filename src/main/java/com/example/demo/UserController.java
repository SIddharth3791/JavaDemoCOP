package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

	
	@GetMapping("/user")
	public List<User> getUserList(){
		
		ArrayList<User> userList = new ArrayList<>();
		
		User user1 = new User("Siddharth", 26);
		User user2 = new User("Atif", 25);
		User user3 = new User("Rajan", 27);
		User user4 = new User("VD", 26);
		
		userList.add(user1);
		userList.add(user2);
		userList.add(user3);
		userList.add(user4);
		
		return userList;
	}
	
}
