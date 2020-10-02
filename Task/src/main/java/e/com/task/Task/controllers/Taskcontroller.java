package e.com.task.Task.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import e.com.task.Task.models.Task;
import e.com.task.Task.models.UserTasks;
import e.com.task.Task.repos.TaskRepos;
import e.com.task.Task.repos.UserTasksRepos;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/allTasks")
public class Taskcontroller {
	
	@Autowired
	TaskRepos taskRepos; 
	
	@Autowired
	UserTasksRepos userTaskRepos;
	
	@GetMapping
	public List<Task> list(){
		return taskRepos.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Task> oneTask(@PathVariable("id") Long id) {
		return taskRepos.findById(id);
	}
	
	@PostMapping
	public Task createTask(@RequestBody Task task) {
		
		Task savedTask = taskRepos.save(task);
		addTaskToUserTasks(task);
		return savedTask;
	}
	
	private void addTaskToUserTasks(Task task) {
		UserTasks t = new UserTasks();
		t.setTask(task);
		userTaskRepos.save(t);
		
	}

	@PutMapping("/{id}")
	public Task editTask(@PathVariable("id") @RequestBody Task task) {
		return taskRepos.save(task);
	}
	
	@DeleteMapping
	public void deleteTask(Long id) {
		 taskRepos.deleteById(id);
	}
	

}
