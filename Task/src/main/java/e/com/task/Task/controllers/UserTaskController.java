package e.com.task.Task.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import e.com.task.Task.models.UserTasks;
import e.com.task.Task.repos.UserTasksRepos;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("userTasks")
public class UserTaskController {
	
	@Autowired
	UserTasksRepos userTaskRepos;
	
	@GetMapping("tasks")
	public ResponseEntity<List<UserTasks>> userTasks(Long id){
		List<UserTasks> userTask = userTaskRepos.findAll();
		return new ResponseEntity<List<UserTasks>>(userTask, HttpStatus.OK);
	}
	@GetMapping("user/{id}")
	public List<UserTasks> userTask(@PathVariable("id") Long id){
		return userTaskRepos.findByUser_Id(id);
	}
	
	@GetMapping("task/{id}")
	public List<UserTasks> oneTask(@PathVariable("id") Long id){
		return userTaskRepos.findByTask_Id(id);
	}
	
	//Modify UserTask from an assigned ID
	@PutMapping("task")
	public UserTasks editTask(@RequestBody UserTasks userTask) {
		return userTaskRepos.save(userTask);
	}
	
	@DeleteMapping
	public void deleteTask(@PathVariable("id") @RequestBody Long id) {
		 userTaskRepos.deleteById(id);
	}

}
