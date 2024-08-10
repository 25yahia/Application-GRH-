package com.Maryem.systressources.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.NoArgsConstructor;

@Entity

@NoArgsConstructor
public class FileInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	 private String name;
	  private String url;
	  @JsonIgnore
	  @ManyToOne
	    @JoinColumn(name = "candidat_id")
	    private Candidat candidat;
	  public FileInfo(String name, String url) {
		    this.name = name;
		    this.url = url;
		  }
	  public String getName() {
		    return this.name;
		  }
	  
	  public void setName(String name) {
		    this.name = name;
		  }
	  public String getUrl() {
		    return this.url;
		  }
	  
	  
	  public void setUrl(String url) {
		    this.url = url;
		  }
	  
	  public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	


	public Candidat getCandidat() {
		return candidat;
	}
	public void setCandidat(Candidat candidat) {
		this.candidat = candidat;
	}
}
