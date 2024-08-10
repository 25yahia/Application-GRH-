package com.Maryem.systressources.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class FicheDePaie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Informations sur l'entreprise
    private String nomEntreprise = "MWS Engineering";
    private String adresseEntreprise= "Ariana";
    private String telephoneEntreprise = "92603723";
    private String siretEntreprise = "85296";

    // Informations sur l'employé
    private String nomEmploye;
    private String adresseEmploye;
    private String numeroSecuriteSocialeEmploye;
    private String idEmploye;
    private String posteEmploye;
    private LocalDate dateEmbauche;
    private String typeContrat;

    // Période de paie
    private LocalDate debutPeriodePaie;
    private LocalDate finPeriodePaie;
    private LocalDate datePaiement;

    // Informations sur le salaire
    private Double salaireDeBase;
    private Double heuresSupplementaires;
    private Double payeHeuresSupplementaires;
    private Double primes;
    private Double indemnites;

    // Retenues
    private Double cotisationsSecuriteSociale;
    private Double cotisationsAssuranceSante;
    private Double cotisationsRetraite;
    private Double impotsRevenus;
    private Double autresRetenues;

    // Contributions de l'employeur
    private Double contributionsSecuriteSocialeEmployeur;
    private Double contributionsAssuranceSanteEmployeur;
    private Double contributionsRetraiteEmployeur;

    // Salaire net
    private Double salaireNet;

    // Informations supplémentaires
    private Integer joursCongesRestants;
    private Integer heuresTravaillees;

    // Commentaires
    private String commentaires;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomEntreprise() {
		return nomEntreprise;
	}

	public void setNomEntreprise(String nomEntreprise) {
		this.nomEntreprise = nomEntreprise;
	}

	public String getAdresseEntreprise() {
		return adresseEntreprise;
	}

	public void setAdresseEntreprise(String adresseEntreprise) {
		this.adresseEntreprise = adresseEntreprise;
	}

	public String getTelephoneEntreprise() {
		return telephoneEntreprise;
	}

	public void setTelephoneEntreprise(String telephoneEntreprise) {
		this.telephoneEntreprise = telephoneEntreprise;
	}

	public String getSiretEntreprise() {
		return siretEntreprise;
	}

	public void setSiretEntreprise(String siretEntreprise) {
		this.siretEntreprise = siretEntreprise;
	}

	public String getNomEmploye() {
		return nomEmploye;
	}

	public void setNomEmploye(String nomEmploye) {
		this.nomEmploye = nomEmploye;
	}

	public String getAdresseEmploye() {
		return adresseEmploye;
	}

	public void setAdresseEmploye(String adresseEmploye) {
		this.adresseEmploye = adresseEmploye;
	}

	public String getNumeroSecuriteSocialeEmploye() {
		return numeroSecuriteSocialeEmploye;
	}

	public void setNumeroSecuriteSocialeEmploye(String numeroSecuriteSocialeEmploye) {
		this.numeroSecuriteSocialeEmploye = numeroSecuriteSocialeEmploye;
	}

	public String getIdEmploye() {
		return idEmploye;
	}

	public void setIdEmploye(String idEmploye) {
		this.idEmploye = idEmploye;
	}

	public String getPosteEmploye() {
		return posteEmploye;
	}

	public void setPosteEmploye(String posteEmploye) {
		this.posteEmploye = posteEmploye;
	}

	public LocalDate getDateEmbauche() {
		return dateEmbauche;
	}

	public void setDateEmbauche(LocalDate dateEmbauche) {
		this.dateEmbauche = dateEmbauche;
	}

	public String getTypeContrat() {
		return typeContrat;
	}

	public void setTypeContrat(String typeContrat) {
		this.typeContrat = typeContrat;
	}

	public LocalDate getDebutPeriodePaie() {
		return debutPeriodePaie;
	}

	public void setDebutPeriodePaie(LocalDate debutPeriodePaie) {
		this.debutPeriodePaie = debutPeriodePaie;
	}

	public LocalDate getFinPeriodePaie() {
		return finPeriodePaie;
	}

	public void setFinPeriodePaie(LocalDate finPeriodePaie) {
		this.finPeriodePaie = finPeriodePaie;
	}

	public LocalDate getDatePaiement() {
		return datePaiement;
	}

	public void setDatePaiement(LocalDate datePaiement) {
		this.datePaiement = datePaiement;
	}

	public Double getSalaireDeBase() {
		return salaireDeBase;
	}

	public void setSalaireDeBase(Double salaireDeBase) {
		this.salaireDeBase = salaireDeBase;
	}

	public Double getHeuresSupplementaires() {
		return heuresSupplementaires;
	}

	public void setHeuresSupplementaires(Double heuresSupplementaires) {
		this.heuresSupplementaires = heuresSupplementaires;
	}

	public Double getPayeHeuresSupplementaires() {
		return payeHeuresSupplementaires;
	}

	public void setPayeHeuresSupplementaires(Double payeHeuresSupplementaires) {
		this.payeHeuresSupplementaires = payeHeuresSupplementaires;
	}

	public Double getPrimes() {
		return primes;
	}

	public void setPrimes(Double primes) {
		this.primes = primes;
	}

	public Double getIndemnites() {
		return indemnites;
	}

	public void setIndemnites(Double indemnites) {
		this.indemnites = indemnites;
	}

	public Double getCotisationsSecuriteSociale() {
		return cotisationsSecuriteSociale;
	}

	public void setCotisationsSecuriteSociale(Double cotisationsSecuriteSociale) {
		this.cotisationsSecuriteSociale = cotisationsSecuriteSociale;
	}

	public Double getCotisationsAssuranceSante() {
		return cotisationsAssuranceSante;
	}

	public void setCotisationsAssuranceSante(Double cotisationsAssuranceSante) {
		this.cotisationsAssuranceSante = cotisationsAssuranceSante;
	}

	public Double getCotisationsRetraite() {
		return cotisationsRetraite;
	}

	public void setCotisationsRetraite(Double cotisationsRetraite) {
		this.cotisationsRetraite = cotisationsRetraite;
	}

	public Double getImpotsRevenus() {
		return impotsRevenus;
	}

	public void setImpotsRevenus(Double impotsRevenus) {
		this.impotsRevenus = impotsRevenus;
	}

	public Double getAutresRetenues() {
		return autresRetenues;
	}

	public void setAutresRetenues(Double autresRetenues) {
		this.autresRetenues = autresRetenues;
	}

	public Double getContributionsSecuriteSocialeEmployeur() {
		return contributionsSecuriteSocialeEmployeur;
	}

	public void setContributionsSecuriteSocialeEmployeur(Double contributionsSecuriteSocialeEmployeur) {
		this.contributionsSecuriteSocialeEmployeur = contributionsSecuriteSocialeEmployeur;
	}

	public Double getContributionsAssuranceSanteEmployeur() {
		return contributionsAssuranceSanteEmployeur;
	}

	public void setContributionsAssuranceSanteEmployeur(Double contributionsAssuranceSanteEmployeur) {
		this.contributionsAssuranceSanteEmployeur = contributionsAssuranceSanteEmployeur;
	}

	public Double getContributionsRetraiteEmployeur() {
		return contributionsRetraiteEmployeur;
	}

	public void setContributionsRetraiteEmployeur(Double contributionsRetraiteEmployeur) {
		this.contributionsRetraiteEmployeur = contributionsRetraiteEmployeur;
	}

	public Double getSalaireNet() {
		return salaireNet;
	}

	public void setSalaireNet(Double salaireNet) {
		this.salaireNet = salaireNet;
	}

	public Integer getJoursCongesRestants() {
		return joursCongesRestants;
	}

	public void setJoursCongesRestants(Integer joursCongesRestants) {
		this.joursCongesRestants = joursCongesRestants;
	}

	public Integer getHeuresTravaillees() {
		return heuresTravaillees;
	}

	public void setHeuresTravaillees(Integer heuresTravaillees) {
		this.heuresTravaillees = heuresTravaillees;
	}

	public String getCommentaires() {
		return commentaires;
	}

	public void setCommentaires(String commentaires) {
		this.commentaires = commentaires;
	}

}
