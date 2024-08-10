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
public class TypeContrat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomContrat;
	private String descriptionContrat;
	@JsonIgnore
	@OneToMany(mappedBy = "typeContrat")
	private List<Contrat> contrat;
	@JsonIgnore
	@OneToMany(mappedBy = "typeContrat")
	private List<Utilisateur> utilisateur;
}
