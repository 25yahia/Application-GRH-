package com.Maryem.systressources.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

@Table(name="departement",
uniqueConstraints = { 
@UniqueConstraint(columnNames = "nomDepartement")

})

public class Departement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long idDepartement;
	private String descriptionDepartement;
	private String nomDepartement;
	@JsonIgnore
	@OneToMany(mappedBy = "departement")
	private List<Utilisateur> utilisateurs;
	
	@JsonIgnore
	@OneToMany(mappedBy = "departement")
	private List<Réunion> réunion;
}
