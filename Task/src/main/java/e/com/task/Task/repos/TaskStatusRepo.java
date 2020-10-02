package e.com.task.Task.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import e.com.task.Task.models.TaskStatus;


@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel="taskStatus",
path = "taskStatus")
public interface TaskStatusRepo extends JpaRepository<TaskStatus, Long> {
	
}
