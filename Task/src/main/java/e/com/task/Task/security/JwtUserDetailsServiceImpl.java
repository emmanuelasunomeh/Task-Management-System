package e.com.task.Task.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import e.com.task.Task.models.User;
import e.com.task.Task.repos.UserRepos;

@Service
public class JwtUserDetailsServiceImpl  implements UserDetailsService{

	@Autowired private UserRepos userRepos;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepos.findByEmailIgnoreCase(username);
		if(user == null) {
			throw new UsernameNotFoundException(String.format("No User found with Username {%s} ", username));
		}else {
			return JwtuserFactory.create(user);
			
			
		}
	}
	
	
}