package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.TypeContrat;
import com.Maryem.systressources.repos.TypeContratRepos;
@Service
public class TypeContratServiceImpl implements TypeContratService {
	@Autowired
	private TypeContratRepos typeContratRepos;

	@Override
	public List<TypeContrat> getAllTypeContrats() {
		
		return typeContratRepos.findAll();
	}

	@Override
	public TypeContrat getTypeContratById(Long id) {
		
		return typeContratRepos.findById(id).get();
	}

	@Override
	public TypeContrat saveTypeContrat(TypeContrat t) {
		
		return typeContratRepos.save(t);
	}

	@Override
	public TypeContrat updateTypeContrat(TypeContrat t) {
		
		return typeContratRepos.save(t);
	}

	@Override
	public void deleteTypeContratById(Long id) {
		typeContratRepos.deleteById(id);
		
	}

	@Override
	public long countTypeContrat() {
		
		return typeContratRepos.count();
	}

}
