package com.Maryem.systressources.entities;





import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class Contrat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private Date datesignature;
	
	@ManyToOne
	private Utilisateur utilisateur;

	@ManyToOne
	private TypeContrat typeContrat;
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDatesignature() {
		return datesignature;
	}

	public void setDatesignature(Date datesignature) {
		this.datesignature = datesignature;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public TypeContrat getTypeContrat() {
		return typeContrat;
	}

	public void setTypeContrat(TypeContrat typeContrat) {
		this.typeContrat = typeContrat;
	}

	
}
