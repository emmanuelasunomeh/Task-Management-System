package e.com.task.Task.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import e.com.task.Task.domain.Response;
import e.com.task.Task.models.User;
import e.com.task.Task.services.UserService;


@RestController
public class PreLoginController {
	
	@Autowired private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<Response> registration(@RequestBody User user) {
		
		User dbUser  = userService.save(user);
		if(dbUser!=null) { 
			return new ResponseEntity<Response>(new Response("User is saved Succesfully"), HttpStatus.OK);
		}
		return null;
	}

} 
