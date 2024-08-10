package com.Maryem.systressources.entities;

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
public class DemandeAdministrative {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titreDemande;
	private String descriptionDemande ;
	private String etatdeDemandeAdmin="en attente";
	private String fichierdemande;
	private String Reponse="";

public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitreDemande() {
		return titreDemande;
	}
	public void setTitreDemande(String titreDemande) {
		this.titreDemande = titreDemande;
	}
	public String getDescriptionDemande() {
		return descriptionDemande;
	}
	public void setDescriptionDemande(String descriptionDemande) {
		this.descriptionDemande = descriptionDemande;
	}
	public String getEtatdeDemandeAdmin() {
		return etatdeDemandeAdmin;
	}
	public void setEtatdeDemandeAdmin(String etatdeDemandeAdmin) {
		this.etatdeDemandeAdmin = etatdeDemandeAdmin;
	}

public TypeDemandeAdministrative getTypedemandeadministrative() {
		return typedemandeadministrative;
	}
	public void setTypedemandeadministrative(TypeDemandeAdministrative typedemandeadministrative) {
		this.typedemandeadministrative = typedemandeadministrative;
	}
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

public String getFichierdemande() {
		return fichierdemande;
	}
	public void setFichierdemande(String fichierdemande) {
		this.fichierdemande = fichierdemande;
	}

public String getReponse() {
		return Reponse;
	}
	public void setReponse(String reponse) {
		Reponse = reponse;
	}

@ManyToOne
private TypeDemandeAdministrative typedemandeadministrative;
@ManyToOne
private Utilisateur utilisateur;
}
