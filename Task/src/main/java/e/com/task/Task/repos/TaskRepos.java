package e.com.task.Task.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import e.com.task.Task.models.Task;

public interface TaskRepos extends JpaRepository<Task, Long> {
	
	@RestResource(path = "taskid")
	List<Task> findByTs_Id(@Param("id") Long id);
	
}
