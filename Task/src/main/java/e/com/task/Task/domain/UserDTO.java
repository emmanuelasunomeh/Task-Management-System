package e.com.task.Task.domain;

import java.io.Serializable;

import e.com.task.Task.models.User;

public class UserDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8155566129413539372L;
	
	private User user;
	private String token;
	
	public UserDTO(User user , String token) {
		super();
		this.user = user;
		this.token = token;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	

}
