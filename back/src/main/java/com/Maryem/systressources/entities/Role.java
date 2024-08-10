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


@Table(name="role",
uniqueConstraints = { 
@UniqueConstraint(columnNames = "nomRole")

})

public class Role {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idRole;
	private String descriptionRole;
	private String nomRole;
 
	
	@JsonIgnore
	@OneToMany(mappedBy = "role")
	private List<Utilisateur> utilisateurs;
}
