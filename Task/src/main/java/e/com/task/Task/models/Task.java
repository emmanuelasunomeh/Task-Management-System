package e.com.task.Task.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "task")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="title")
	@NotNull
	private String title;
	
	@Column(name="description")
	@NotNull
	private String description;

	@Column(name="creation_date")
	@NotNull
	private Date creationDate;

	@Column(name="finish_date")
	private Date finishDate;
	
	@ManyToOne
	@JoinColumn(name="task_status_id")
	private TaskStatus ts ;
	
	@OneToOne(mappedBy = "task", cascade = CascadeType.ALL)
	private UserTasks usertask;

	public Task() {
		//Nothing is expected here
	}
	

	public Task(Long id, @NotNull String title, @NotNull String description, @NotNull Date creationDate,
			Date finishDate, TaskStatus ts) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.creationDate = creationDate;
		this.finishDate = finishDate;
		this.ts = ts;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public Date getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

	public TaskStatus getTs() {
		return ts;
	}

	public void setTs(TaskStatus ts) {
		this.ts = ts;
	}


	
}
