package com.Maryem.systressources.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Présence {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String heureEntree;
	private String heureSortie;
	private String nombreHeures;
	private Date datepresence;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getheureEntree() {
		return heureEntree;
	}
	public void setheureEntree(String heureEntree) {
		this.heureEntree = heureEntree;
	}
	public String getHeureSortie() {
		return heureSortie;
	}
	public void setHeureSortie(String heureSortie) {
		this.heureSortie = heureSortie;
	}
	public String getNombreHeures() {
		return nombreHeures;
	}
	public void setNombreHeures(String nombreHeures) {
		this.nombreHeures = nombreHeures;
	}
	public Date getdatepresence() {
		return datepresence;
	}
	public void setdatepresence(Date datepresence) {
		this.datepresence = datepresence;
	}
	@ManyToOne 
	private Utilisateur utilisateur;

}
