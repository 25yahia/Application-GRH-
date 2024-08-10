package com.Maryem.systressources.service;

import java.util.List;


import com.Maryem.systressources.entities.TypeContrat;

public interface TypeContratService {
	public List<TypeContrat> getAllTypeContrats();
	TypeContrat getTypeContratById(Long id);
	TypeContrat saveTypeContrat(TypeContrat t);
	TypeContrat updateTypeContrat(TypeContrat t);
	void deleteTypeContratById(Long id);
	long countTypeContrat();

}
