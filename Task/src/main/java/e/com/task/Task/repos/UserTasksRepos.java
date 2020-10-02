package e.com.task.Task.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import e.com.task.Task.models.UserTasks;


@RepositoryRestResource(collectionResourceRel="userTasks",
path = "userTasks")
public interface UserTasksRepos extends JpaRepository<UserTasks, Long> {

	List<UserTasks> findByUser_Id(@Param(value = "id") Long id);
	
	List<UserTasks> findByTask_Id(@Param(value = "id") Long id);
	
}
