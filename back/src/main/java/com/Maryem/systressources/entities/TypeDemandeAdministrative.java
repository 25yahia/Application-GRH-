package com.Maryem.systressources.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class TypeDemandeAdministrative {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomDemande;
	private String descriptionTypeDemande;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNomDemande() {
		return nomDemande;
	}
	public void setNomDemande(String nomDemande) {
		this.nomDemande = nomDemande;
	}
	
	public String getDescriptionTypeDemande() {
		return descriptionTypeDemande;
	}
	public void setDescriptionTypeDemande(String descriptionTypeDemande) {
		this.descriptionTypeDemande = descriptionTypeDemande;
	}
	@JsonIgnore
@OneToMany(mappedBy = "typedemandeadministrative")
private List <DemandeAdministrative> demandeadministrative;
}
