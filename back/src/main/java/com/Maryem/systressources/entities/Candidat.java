package com.Maryem.systressources.entities;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Candidat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomCandidat;
	private String prenomCandidat;
	private Date dateNaissanceCandidat;
	private String numeroTelephoneCandidat;
	private String emailCandidat;
	private String adresseCandidat;
	private String pathCV;
	private String pathLettreDeMotivation;
	private String niveauEtudes;
	private String titreDiplome;
	private String universite;
	private String experience;
	private String etatdeDemandeCandidat="en attente";
	@Lob
	private byte[] CV;
	@Lob
	private byte[] Lettre;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNomCandidat() {
		return nomCandidat;
	}
	public void setNomCandidat(String nomCandidat) {
		this.nomCandidat = nomCandidat;
	}
	public String getPrenomCandidat() {
		return prenomCandidat;
	}
	public void setPrenomCandidat(String prenomCandidat) {
		this.prenomCandidat = prenomCandidat;
	}
	public Date getDateNaissanceCandidat() {
		return dateNaissanceCandidat;
	}
	public void setDateNaissanceCandidat(Date dateNaissanceCandidat) {
		this.dateNaissanceCandidat = dateNaissanceCandidat;
	}
	public String getNumeroTelephoneCandidat() {
		return numeroTelephoneCandidat;
	}
	public void setNumeroTelephoneCandidat(String numeroTelephoneCandidat) {
		this.numeroTelephoneCandidat = numeroTelephoneCandidat;
	}
	public String getEmailCandidat() {
		return emailCandidat;
	}
	public void setEmailCandidat(String emailCandidat) {
		this.emailCandidat = emailCandidat;
	}
	public String getAdresseCandidat() {
		return adresseCandidat;
	}
	public void setAdresseCandidat(String adresseCandidat) {
		this.adresseCandidat = adresseCandidat;
	}
	public String getPathCV() {
		return pathCV;
	}
	public void setPathCV(String pathCV) {
		this.pathCV = pathCV;
	}
	public String getPathLettreDeMotivation() {
		return pathLettreDeMotivation;
	}
	public void setPathLettreDeMotivation(String pathLettreDeMotivation) {
		this.pathLettreDeMotivation = pathLettreDeMotivation;
	}
	public String getNiveauEtudes() {
		return niveauEtudes;
	}
	public void setNiveauEtudes(String niveauEtudes) {
		this.niveauEtudes = niveauEtudes;
	}
	public String getTitreDiplome() {
		return titreDiplome;
	}
	public void setTitreDiplome(String titreDiplome) {
		this.titreDiplome = titreDiplome;
	}
	public String getUniversite() {
		return universite;
	}
	public void setUniversite(String universite) {
		this.universite = universite;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getEtatdeDemandeCandidat() {
		return etatdeDemandeCandidat;
	}
	public void setEtatdeDemandeCandidat(String etatdeDemandeCandidat) {
		this.etatdeDemandeCandidat = etatdeDemandeCandidat;
	}
	public byte[] getCV() {
		return CV;
	}
	public void setCV(byte[] cV) {
		CV = cV;
	}
	public byte[] getLettre() {
		return Lettre;
	}
	public void setLettre(byte[] lettre) {
		Lettre = lettre;
	}
	
	@OneToMany(mappedBy = "candidat", cascade = CascadeType.ALL)
	 private List <FileInfo> files;
	
	
	
	
	
	
	}





















