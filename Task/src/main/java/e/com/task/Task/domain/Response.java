package e.com.task.Task.domain;

import java.io.Serializable;

public class Response implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6708656047492208285L;
	private String message;
	
	public Response(String message) {
		super();
		this.message = message;
	}
	public String getMessage() {
		return message;
	}
	
	public void setMesage (String message) {
		this.message = message;
	}

}
