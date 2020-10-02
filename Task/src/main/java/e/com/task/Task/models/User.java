package e.com.task.Task.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "user")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String f_name;
	private String l_name;
	private String m_name;
	
	@Column(name="user_name")
	private String username;
	
	private String email;
	private String password;
	
	@ManyToOne
	@JoinColumn(name="role_id", referencedColumnName="id")
	private Role role; 
	
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private Set<UserTasks> usertask;


	public User() {
		super();
	}
	
	

	public User(Long id, String f_name, String l_name, String m_name, String username, String email, String password,
			Role role) {
		this.id = id;
		this.f_name = f_name;
		this.l_name = l_name;
		this.m_name = m_name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	
	public User(User user) {
		this.f_name = user.getF_name();
		this.l_name = user.getL_name();
		this.m_name = user.getM_name();
		this.username = user.getUsername();
		this.email = user.getEmail();
		this.password = user.getPassword();
		this.role = user.getRole();
	}



	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getF_name() {
		return f_name;
	}


	public void setF_name(String f_name) {
		this.f_name = f_name;
	}


	public String getL_name() {
		return l_name;
	}


	public void setL_name(String l_name) {
		this.l_name = l_name;
	}


	public String getM_name() {
		return m_name;
	}


	public void setM_name(String m_name) {
		this.m_name = m_name;
	}


	public String getUsername() {
		return username;
	}


	public void setUser_name(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", f_name=" + f_name + ", l_name=" + l_name + ", m_name=" + m_name + ", username="
				+ username + ", email=" + email + ", password=" + password + ", role_id=" + role + ", usertask="
				+ usertask + "]";
	}



}
