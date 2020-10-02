package e.com.task.Task.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import e.com.task.Task.models.Role;
import e.com.task.Task.repos.RoleRepos;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("role")
public class RoleController {
	
	@Autowired
	RoleRepos roleRepos;
	
	@GetMapping
	public List<Role> roleList(){
		return roleRepos.findAll();
	}
}
