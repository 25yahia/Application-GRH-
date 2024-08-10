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


import com.Maryem.systressources.entities.TypedeCongé;
import com.Maryem.systressources.service.TypeCongeService;

@RestController
@CrossOrigin
@RequestMapping("/TypeConges")
public class TypeCongeController {
	@Autowired
	private TypeCongeService typeCongeService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<TypedeCongé> getAllTypedeCongés(){
		return typeCongeService.getAllTypedeCongés();
	}
	@GetMapping("/{id}")
	public TypedeCongé getTypedeCongéById(@PathVariable("id") Long id) {	
		return typeCongeService.getTypedeCongé(id);
    }
	@RequestMapping(method = RequestMethod.POST)
public TypedeCongé createTypedeCongé(@RequestBody TypedeCongé typedeCongé) {
	return typeCongeService.saveTypedeCongé(typedeCongé);
}
	@RequestMapping(method = RequestMethod.PUT)
	public TypedeCongé updateTypedeCongé(@RequestBody TypedeCongé typedeCongé) {
		return typeCongeService.saveTypedeCongé(typedeCongé);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteTypedeCongé(@PathVariable("id") Long id)
	{
		typeCongeService.deleteTypedeCongéById(id);
	}
	@GetMapping("/count")
	public Long countTypedeCongé() {
		return typeCongeService.countTypedeCongé();
	}


}
