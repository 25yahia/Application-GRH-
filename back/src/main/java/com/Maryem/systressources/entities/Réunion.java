package com.Maryem.systressources.entities;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Réunion {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String titreReunion;
private Date dateReunion;
private String heureReunion;
@ManyToOne
private TypeReunion typeReunion;
@ManyToOne
private Departement departement;
public Long getId() {
return id;
}
public void setId(Long id) {
this.id = id;
}
public String gettitreReunion() {
return titreReunion;
}
public void settitreReunion(String titreReunion) {
this.titreReunion = titreReunion;
}

public Date getDateReunion() {
return dateReunion;
}
public void setDateReunion(Date dateReunion) {
this.dateReunion = dateReunion;
}
public String getHeureReunion() {
return heureReunion;
}
public void setHeureReunion(String heureReunion) {
this.heureReunion = heureReunion;
}





@ManyToMany
@JoinTable(name = "Réunion_participants",joinColumns = @JoinColumn(name= "réunionId"),inverseJoinColumns = @JoinColumn(name="utilisateurId"))
private Set<Utilisateur> Participants= new HashSet<>();



public Departement getDepartement() {
return departement;
}
public void setDepartement(Departement departement) {
this.departement = departement;
}





public Set<Utilisateur> getParticipants() {
return Participants;
}
public void setParticipants(Set<Utilisateur> participants) {
Participants = participants;
}
public List<String> getExterne() {
return externe;
}
public void setExterne(List<String> externe) {
this.externe = externe;
}
public void addUtilisateur(Utilisateur utilisateur) {
   this.Participants.add(utilisateur);
   utilisateur.getListeréunion().add(this);
 }









public TypeReunion getTypeReunion() {
	return typeReunion;
}
public void setTypeReunion(TypeReunion typeReunion) {
	this.typeReunion = typeReunion;
}





@ElementCollection
private List<String> externe;






}