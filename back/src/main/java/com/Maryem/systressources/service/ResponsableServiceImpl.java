package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Responsable;
import com.Maryem.systressources.repos.ResponsableRepository;



@Service

public class ResponsableServiceImpl implements ResponsableService {
	@Autowired
	ResponsableRepository responsableRepository;
	@Override
	public long countResponsableActive() {
		return responsableRepository.countResponsableActive() ;
	}
	@Override
	public Responsable updateResponsable(Responsable resp) {
		return responsableRepository.save(resp);
	}
	@Override
	public Responsable saveResponsable(Responsable resp) {
	
		return responsableRepository.save(resp);
	}
	@Override
	public List<Responsable> getAllResponsable() {
		
		return responsableRepository.findAll();
	}
	@Override
	public void deleteResponsableById(Long id) {
		responsableRepository.deleteById(id);
		
	}

}
