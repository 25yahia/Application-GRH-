package com.Maryem.systressources.entities;

import jakarta.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor



public class Employe extends Utilisateur {
	private String etat; 

}
