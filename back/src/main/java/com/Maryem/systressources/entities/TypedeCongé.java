package com.Maryem.systressources.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class TypedeCongé {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomConge;
	private String descriptionConge;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNomConge() {
		return nomConge;
	}
	public void setNomConge(String nomConge) {
		this.nomConge = nomConge;
	}
	public String getDescriptionConge() {
		return descriptionConge;
	}
	public void setDescriptionConge(String descriptionConge) {
		this.descriptionConge = descriptionConge;
	}
	@JsonIgnore
	@OneToMany(mappedBy = "typedeConge")
	private List <Congé> congé;

}
