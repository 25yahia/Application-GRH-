package com.Maryem.systressources.service;


import java.util.List;


import com.Maryem.systressources.entities.RH;

public interface RHService {
	public List<RH> getAllRHs();
	RH saveRH(RH h);
	RH updateRH(RH h);
	 void deleteRHById(Long id);
	 public Long countRH();
	 long countRHActive();
	 List<RH> findByemail(String email);
}
