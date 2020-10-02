package e.com.task.Task.repos;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import e.com.task.Task.models.User;

@Repository
public interface UserRepos extends JpaRepository<User, Long> {
	
	Optional <User> findByUsername(String username);

	User findByEmailIgnoreCase(String username);
	
	Boolean existsByUsername(String username);
	
	Boolean existsByEmail(String email);

	Optional<User> findByEmail(String email);
}
