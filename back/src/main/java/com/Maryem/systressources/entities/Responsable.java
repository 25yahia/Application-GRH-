package com.Maryem.systressources.entities;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Responsable extends Utilisateur {
	private String poste;

}
