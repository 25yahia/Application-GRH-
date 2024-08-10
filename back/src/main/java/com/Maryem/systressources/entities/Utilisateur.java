package com.Maryem.systressources.entities;



import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;




@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@Entity

@Table(name="utilisateur",
uniqueConstraints = { 
@UniqueConstraint(columnNames = "motdepasse"),@UniqueConstraint(columnNames = "email"),@UniqueConstraint(columnNames = "CIN"),@UniqueConstraint(columnNames = "repassword")

})

public class Utilisateur {
	public Set<Réunion> getListeréunion() {
		return listeréunion;
	}

	public void setListeréunion(Set<Réunion> listeréunion) {
		this.listeréunion = listeréunion;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Departement getDepartement() {
		return departement;
	}

	public void setDepartement(Departement departement) {
		this.departement = departement;
	}

	public List<Contrat> getContrat() {
		return contrat;
	}

	public void setContrat(List<Contrat> contrat) {
		this.contrat = contrat;
	}

	public List<Congé> getCongé() {
		return congé;
	}

	public void setCongé(List<Congé> congé) {
		this.congé = congé;
	}

	public List<Présence> getPrésence() {
		return présence;
	}

	public void setPrésence(List<Présence> présence) {
		this.présence = présence;
	}

	public List<DemandeAdministrative> getDemandeadministrative() {
		return demandeadministrative;
	}

	public void setDemandeadministrative(List<DemandeAdministrative> demandeadministrative) {
		this.demandeadministrative = demandeadministrative;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)

	private Long id;
  
	private String nom;

	private String UserNName;
	
	private String prenom;

	private String adresse;
	 
	private String motdepasse;

	private String email;

	private String image;
	private String ImagePath;
	private double salaire;

	private double solde;

	private String ville;
	
	private double joursConge;

	private boolean statut=true;
	
	private Date d;
	
	private String CIN;
	
	private String repassword;
	
	 
	     
    private String  genre;
	
	
	private int archive = 0;
	
	private float maladie = 5;
	
	private Date dateEntree;
	
	
	
	private String roles;
	
	
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getMotdepasse() {
		return motdepasse;
	}

	public void setMotdepasse(String motdepasse) {
		this.motdepasse = motdepasse;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public double getSalaire() {
		return salaire;
	}

	public void setSalaire(double salaire) {
		this.salaire = salaire;
	}

	public double getSolde() {
		return solde;
	}

	public void setSolde(double solde) {
		this.solde = solde;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public double getJoursConge() {
		return joursConge;
	}

	public void setJoursConge(double joursConge) {
		this.joursConge = joursConge;
	}

	public boolean isStatut() {
		return statut;
	}

	public void setStatut(boolean statut) {
		this.statut = statut;
	}

	public Date getD() {
		return d;
	}

	public void setD(Date d) {
		this.d = d;
	}


	public String getCIN() {
		return CIN;
	}

	public void setCIN(String cIN) {
		CIN = cIN;
	}

	public String getRepassword() {
		return repassword;
	}

	public void setRepassword(String repassword) {
		this.repassword = repassword;
	}

	public String  getGenre() {
		return genre;
	}

	public void setGenre(String  genre) {
		this.genre = genre;
	}

	public int getArchive() {
		return archive;
	}

	public void setArchive(int archive) {
		this.archive = archive;
	}

	public float getMaladie() {
		return maladie;
	}

	public void setMaladie(float maladie) {
		this.maladie = maladie;
	}

	public Date getDateEntree() {
		return dateEntree;
	}

	public void setDateEntree(Date dateEntree) {
		this.dateEntree = dateEntree;
	}

public String getUserNName() {
		return UserNName;
	}

	public void setUserNName(String userNName) {
		UserNName = userNName;
	}

public TypeContrat getTypeContrat() {
		return typeContrat;
	}

	public void setTypeContrat(TypeContrat typeContrat) {
		this.typeContrat = typeContrat;
	}

public String getImagePath() {
		return ImagePath;
	}

	public void setImagePath(String imagePath) {
		ImagePath = imagePath;
	}
	@JsonIgnore
@ManyToMany(mappedBy = "Participants")
  private Set<Réunion> listeréunion=new HashSet<>();
	


	@ManyToOne
	private Role role;
	@ManyToOne
	private Departement departement;
	@ManyToOne
	private TypeContrat typeContrat;
	@JsonIgnore
	@OneToMany(mappedBy = "utilisateur")
	private List<Contrat> contrat;
	@JsonIgnore
	@OneToMany(mappedBy = "utilisateur")
	private List<Congé> congé;
	@JsonIgnore
	@OneToMany(mappedBy = "utilisateur")
	private List<Présence> présence;
	@JsonIgnore
	@OneToMany(mappedBy = "utilisateur")
	private List<DemandeAdministrative> demandeadministrative;
	
	@OneToOne
   private Image images;









	public Image getImages() {
		return images;
	}

	public void setImages(Image images) {
		this.images = images;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}
}


