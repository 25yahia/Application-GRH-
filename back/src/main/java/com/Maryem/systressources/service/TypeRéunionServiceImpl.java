package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.TypeReunion;
import com.Maryem.systressources.repos.TypeRéunionRepos;

@Service
public class TypeRéunionServiceImpl implements TypeRéunionService {
	@Autowired
	private TypeRéunionRepos typeRéunionRepos;

	@Override
	public List<TypeReunion> getAllTypeReunion() {
	
		return typeRéunionRepos.findAll();
	}

	@Override
	public TypeReunion getTypeReunionById(Long id) {
		
		return typeRéunionRepos.findById(id).get();
	}

	@Override
	public TypeReunion saveTypeReunion(TypeReunion tr) {
		
		return typeRéunionRepos.save(tr);
	}

	@Override
	public TypeReunion updateTypeReunion(TypeReunion tr) {
		
		return typeRéunionRepos.save(tr);
	}

	@Override
	public void deleteTypeReunionById(Long id) {
		typeRéunionRepos.deleteById(id);	
		
	}

	@Override
	public long countTypeReunion() {
	
		return typeRéunionRepos.count();
	}
}
