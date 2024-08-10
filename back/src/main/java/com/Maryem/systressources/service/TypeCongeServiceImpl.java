package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.TypedeCongé;
import com.Maryem.systressources.repos.TypeCongeRepos;
@Service
public class TypeCongeServiceImpl implements TypeCongeService {
	@Autowired
	private TypeCongeRepos typeCongeRepos;

	@Override
	public List<TypedeCongé> getAllTypedeCongés() {
		
		return typeCongeRepos.findAll();
	}

	@Override
	public TypedeCongé getTypedeCongé(Long id) {
		
		return typeCongeRepos.findById(id).get();
	}

	@Override
	public TypedeCongé saveTypedeCongé(TypedeCongé c) {
		// TODO Auto-generated method stub
		return typeCongeRepos.save(c);
	}

	@Override
	public TypedeCongé updateTypedeCongé(TypedeCongé c) {
		
		return typeCongeRepos.save(c);
	}

	@Override
	public void deleteTypedeCongéById(Long id) {
		typeCongeRepos.deleteById(id);
	}

	@Override
	public long countTypedeCongé() {
		
		return typeCongeRepos.count();
	}

	@Override
	public List<TypedeCongé> findByNomConge(String nomConge) {
		return typeCongeRepos.findByNomConge(nomConge) ;
	}



}
