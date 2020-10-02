package e.com.task.Task.security;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import e.com.task.Task.models.User;

public class JwtuserFactory {

	private static final String PREFIX = "ROLE_";
	public static JwtUser create(User user) {
		return new JwtUser(user.getId(), user.getEmail(), user.getPassword(), user, maptoGrantedAuthorities(new ArrayList<String>(Arrays.asList(PREFIX+user.getRole().getRolename().name().toUpperCase()))), true);
	}

	private static Collection<? extends GrantedAuthority> maptoGrantedAuthorities(ArrayList<String> authorities) {
		return authorities.stream().map(Authority -> new SimpleGrantedAuthority(Authority)).collect(Collectors.toList());
	}
}
