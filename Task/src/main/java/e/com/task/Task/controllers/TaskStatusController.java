package e.com.task.Task.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import e.com.task.Task.models.TaskStatus;
import e.com.task.Task.repos.TaskStatusRepo;

@RestController
@RequestMapping("taskStatus")
public class TaskStatusController {
	
	@Autowired
	TaskStatusRepo taskStatusRepos;
	
	@GetMapping
	public List<TaskStatus> allTaskStatus() {
		return taskStatusRepos.findAll();
	}
	
	//@GetMapping("/{id}")
	//public List<TaskStatus> userTasks(@PathVariable("id") Long id ) {
	//	return usertaskRepos.findByUser_Id(id);
	//}
	
	//@PutMapping("/{id}")
	//public UserTasks editTask(@PathVariable("id") @RequestBody UserTasks usertask) {
	//	return usertaskRepos.save(usertask);
	//}
	

}
