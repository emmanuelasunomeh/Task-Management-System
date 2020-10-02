package e.com.task.Task.controllers;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import e.com.task.Task.models.User;
import e.com.task.Task.repos.UserRepos;
import e.com.task.Task.services.UserService;

 
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("member")
public class UserController {
	
	@Autowired
	private UserRepos userRepos;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/allUsers")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.findAll();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<User>> getUserId(@PathVariable("id") Long id) {
		Optional<User> userId = userService.findById(id);
		return new ResponseEntity<Optional<User>>(userId, HttpStatus.OK);
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<User> memberList(Principal  principal){
		User user = userService.getUserByEmail(principal.getName());
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@GetMapping("/email/{email}")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Optional<User>> findByEmail(@PathVariable("email") String email) {
		Optional<User> emailId = userService.findByEmail(email);
		return new ResponseEntity<Optional<User>>(emailId, HttpStatus.OK);
	}
	
	@PostMapping
	public User createMember(@RequestBody User user) {
		return userRepos.save(user);
	}
	
	@PutMapping("/update")
	public User editMember(@RequestBody User user) {
		return userRepos.save(user);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteMember(@PathVariable("id") Long id) {
		userRepos.deleteById(id);
	}
}
