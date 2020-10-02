package e.com.task.Task.services;

import org.springframework.beans.factory.annotation.Autowired;

import e.com.task.Task.models.Task;
import e.com.task.Task.repos.TaskRepos;

public class TaskServiceImpl implements TaskService {
	
	@Autowired TaskRepos taskRepos;

	@Override
	public Task save(Task task) {
		return taskRepos.save(task);
	}
	

}
