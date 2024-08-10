package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.RH;

import com.Maryem.systressources.repos.RHRepository;
@Service
public class RHServiceImpl implements RHService {
	
	@Autowired
	RHRepository rhRepository;

	@Override
	public List<RH> getAllRHs() {
		
		return rhRepository.findAll();
	}

	@Override
	public RH saveRH(RH h) {
	
		return rhRepository.save(h);
	}

	@Override
	public RH updateRH(RH h) {
		
		return rhRepository.save(h);
	}

	@Override
	public void deleteRHById(Long id) {
		rhRepository.deleteById(id);
		
	}

	@Override
	public Long countRH() {
		
		return rhRepository.count();
	}

	@Override
	public List<RH> findByemail(String email) {
		
		return rhRepository.findByemail(email);
	}

	@Override
	public long countRHActive() {
		return rhRepository.countRHActive();
	}



	



	







}
