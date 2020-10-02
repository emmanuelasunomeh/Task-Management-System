package e.com.task.Task.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import e.com.task.Task.models.User;
import e.com.task.Task.repos.UserRepos;
import e.com.task.Task.util.PasswordUtil;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired UserRepos userRepos; 

	@Override
	public User save(User user) {
		String password = PasswordUtil.getPasswordHash(user.getPassword());
		user.setPassword(password);
		return userRepos.save(user);
	}

	@Override
	public List<User> findAll() {
		return (List<User>) userRepos.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
		return userRepos.findByEmailIgnoreCase(email);
	}

	@Override
	public Optional<User> findById(Long id) {
		return userRepos.findById(id);
	}

	@Override
	public Optional<User> findByEmail(String email) {
		return userRepos.findByEmail(email);
	}

}
