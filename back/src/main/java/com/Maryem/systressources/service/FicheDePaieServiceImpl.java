package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.FicheDePaie;
import com.Maryem.systressources.repos.FicheDePaieRepository;
@Service
public class FicheDePaieServiceImpl implements FicheDePaieService {
	@Autowired
	private FicheDePaieRepository fichedepaierepos;

	@Override
	public List<FicheDePaie> getAllFicheDePaies() {
		
		return fichedepaierepos.findAll();
	}

	@Override
	public FicheDePaie saveFicheDePaie(FicheDePaie f) {
		
		return fichedepaierepos.save(f);
	}

	@Override
	public FicheDePaie getFicheDePaie(Long id) {
		// TODO Auto-generated method stub
		return fichedepaierepos.findById(id).get();
	}

	@Override
	public long countFicheDePaie() {
		// TODO Auto-generated method stub
		return fichedepaierepos.count();	}

}
