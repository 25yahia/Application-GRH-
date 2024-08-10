package com.Maryem.systressources.service;

import java.util.List;


import com.Maryem.systressources.entities.TypeDemandeAdministrative;

public interface TypeDemandeService {
	public List<TypeDemandeAdministrative> getAllDemandeAdministratives();
	TypeDemandeAdministrative getTypeDemandeAdministrative(Long id);
	TypeDemandeAdministrative saveTypeDemandeAdministrative(TypeDemandeAdministrative m);
	TypeDemandeAdministrative updateTypeDemandeAdministrative(TypeDemandeAdministrative m);
	void deleteTypeDemandeAdministrativeById(Long id);
	long countTypeDemandeAdministrative();


}
