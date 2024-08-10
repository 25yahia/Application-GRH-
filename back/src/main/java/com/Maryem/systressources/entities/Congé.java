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
@NoArgsConstructor
@AllArgsConstructor
public class Congé {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	private String descriptionconge;
	private  String etatdedemande="en attente";
	private float duree;
	private Date debutconge;
	private Date finConge;
	@ManyToOne
	private TypedeCongé typedeConge;
	@ManyToOne
	private Utilisateur utilisateur;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getdescriptionconge() {
		return descriptionconge;
	}
	public void setdescriptionconge(String descriptionconge) {
		this.descriptionconge = descriptionconge;
	}
	public String getetatdedemande() {
		return etatdedemande;
	}
	public void setetatdedemande(String etatdedemande) {
		this.etatdedemande = etatdedemande;
	}
	public float getduree() {
		return duree;
	}
	public void setduree(float duree) {
		this.duree = duree;
	}
	public Date getdebutconge() {
		return debutconge;
	}
	public void setdebutconge(Date debutconge) {
		this.debutconge = debutconge;
	}
	public Date getfinConge() {
		return finConge;
	}
	public void setfinConge(Date finConge) {
		this.finConge = finConge;
	}
	
	
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
	public TypedeCongé getTypedeConge() {
		return typedeConge;
	}
	public void setTypedeConge(TypedeCongé typedeConge) {
		this.typedeConge = typedeConge;
	}
	

}
