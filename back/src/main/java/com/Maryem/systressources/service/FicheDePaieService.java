package com.Maryem.systressources.service;

import java.util.List;

import com.Maryem.systressources.entities.Departement;
import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.entities.FicheDePaie;

public interface FicheDePaieService {
	public List<FicheDePaie> getAllFicheDePaies();
	FicheDePaie saveFicheDePaie(FicheDePaie f);
	FicheDePaie getFicheDePaie(Long id);
	long countFicheDePaie();

}
