package e.com.task.Task.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import e.com.task.Task.models.Role;

@Repository
public interface RoleRepos extends JpaRepository<Role, Long> {
	
	Optional <Role> findByRolename(Role rolename);
	
}
