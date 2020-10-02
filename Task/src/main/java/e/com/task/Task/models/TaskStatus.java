package e.com.task.Task.models;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name= "task_status")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TaskStatus {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="completed")
	private Boolean completed;
	
	@OneToMany(mappedBy = "ts", cascade = {CascadeType.ALL})
	private List<Task> task;

	public TaskStatus() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean getCompleted() {
		return completed;
	}
	

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
}
