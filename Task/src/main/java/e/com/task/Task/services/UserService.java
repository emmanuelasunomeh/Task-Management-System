package e.com.task.Task.services;

import java.util.List;
import java.util.Optional;

import e.com.task.Task.models.User;

public interface UserService {
	
	User save(User user);

	List<User> findAll();

	User getUserByEmail(String email);

	Optional<User> findById(Long id);

	Optional<User> findByEmail(String email);
}