package com.Maryem.systressources.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.Maryem.systressources.entities.RH;

import com.Maryem.systressources.service.RHService;



@RestController
@RequestMapping("/RHs")
@CrossOrigin
public class RHController {
	@Autowired
	private RHService rhService;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<RH> getAllRHs(){
		return rhService.getAllRHs();
	}
	@RequestMapping(method = RequestMethod.POST)
public RH createRH(@RequestBody RH rh) {
	return rhService.saveRH(rh);
}
	@RequestMapping(method = RequestMethod.PUT)
	public RH updateRH(@RequestBody RH rh) {
		return rhService.saveRH(rh);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteRH(@PathVariable("id") Long id)
	{
		rhService.deleteRHById(id);
	}
	
	@GetMapping("/count")
	public Long countRH() {
	    return rhService.countRH();
	}

	@GetMapping("/countActiveRH")
	public Long countRHActive() {
	    return rhService.countRHActive();
	}
	
	
	
}
