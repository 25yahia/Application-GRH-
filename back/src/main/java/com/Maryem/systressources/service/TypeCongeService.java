package com.Maryem.systressources.service;

import java.util.List;


import com.Maryem.systressources.entities.TypedeCongé;

public interface TypeCongeService {
	public List<TypedeCongé> getAllTypedeCongés();
	TypedeCongé getTypedeCongé(Long id);
	TypedeCongé saveTypedeCongé(TypedeCongé c);
	TypedeCongé updateTypedeCongé(TypedeCongé c);
	void deleteTypedeCongéById(Long id);
	long countTypedeCongé();
	List<TypedeCongé> findByNomConge(String nomConge);	


}
