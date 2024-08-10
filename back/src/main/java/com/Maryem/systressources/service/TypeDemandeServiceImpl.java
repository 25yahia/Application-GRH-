package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.TypeDemandeAdministrative;
import com.Maryem.systressources.repos.TypeDemandeAdminRepos;
@Service
public class TypeDemandeServiceImpl implements TypeDemandeService {
	@Autowired
	private TypeDemandeAdminRepos typedemandeadminrepos;
	

	@Override
	public List<TypeDemandeAdministrative> getAllDemandeAdministratives() {
		// TODO Auto-generated method stub
		return typedemandeadminrepos.findAll();
	}

	@Override
	public TypeDemandeAdministrative getTypeDemandeAdministrative(Long id) {
		// TODO Auto-generated method stub
		return typedemandeadminrepos.findById(id).get();
	}

	@Override
	public TypeDemandeAdministrative saveTypeDemandeAdministrative(TypeDemandeAdministrative m) {
		
		return typedemandeadminrepos.save(m);
	}

	@Override
	public TypeDemandeAdministrative updateTypeDemandeAdministrative(TypeDemandeAdministrative m) {
		
		return typedemandeadminrepos.save(m);
	}

	@Override
	public void deleteTypeDemandeAdministrativeById(Long id) {
		typedemandeadminrepos.deleteById(id);
		
	}

	@Override
	public long countTypeDemandeAdministrative() {
		// TODO Auto-generated method stub
		return typedemandeadminrepos.count();
	}

}
