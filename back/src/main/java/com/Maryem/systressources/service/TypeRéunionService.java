package com.Maryem.systressources.service;

import java.util.List;

import com.Maryem.systressources.entities.TypeReunion;

public interface TypeRéunionService {
	public List<TypeReunion> getAllTypeReunion();
	TypeReunion getTypeReunionById(Long id);
	TypeReunion saveTypeReunion(TypeReunion tr);
	TypeReunion updateTypeReunion(TypeReunion tr);
	void deleteTypeReunionById(Long id);
	long countTypeReunion();
}
