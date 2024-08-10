package com.Maryem.systressources.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.repos.EmployeRepository;
import com.Maryem.systressources.service.EmployeService;

@RestController
@RequestMapping("/Employes")
@CrossOrigin(origins ="http://localhost:4200")
public class EmployeController {
	
	@Autowired
	private EmployeService employeService;
	@Autowired
	private EmployeRepository employeRepository;
	
	
	
	@RequestMapping(method = RequestMethod.POST)
    public Employe createEmploye(@RequestBody Employe employe) {

	return employeService.saveEmploye(employe);
}
	@RequestMapping(method = RequestMethod.GET)
	public List<Employe> getAllEmployes(){
		return employeService.getAllEmployes();
	}
	@RequestMapping(method = RequestMethod.PUT)
	public Employe updateEmploye(@RequestBody Employe employe) {
		return employeService.saveEmploye(employe);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteEmploye(@PathVariable("id") Long id)
	{
		employeService.deleteEmployeById(id);
	}
	@GetMapping("/count")
public Long countEmploye() {
	return employeService.countEmploye();
}
	
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Optional<Employe> findByIdEmpl(@PathVariable("id") Long id)
	{
		return employeService.findByIdEmpl(id);
	}
	
	@GetMapping("/departement/{IDdepartementdeResponsable}")
	public List<Employe> findByResponsableId(@PathVariable("IDdepartementdeResponsable") Long IDdepartementdeResponsable) {
	    return employeRepository.findByResponsableId(IDdepartementdeResponsable);
	}

	
	
	@GetMapping("/employeactif")
	public List<Employe> getEmployeActive(){
		return employeRepository.getactive();
	}
	@GetMapping("/employearchive")
	public List<Employe> getEmployeArchive(){
		return employeRepository.getarchive();
	}
	@GetMapping("/archiveemploye/{id}")
	public void archiverEmploye(@PathVariable("id") Long id) {
		employeService.archiverEmploye(id);
	}
	@GetMapping("/activeemploye/{id}")
	public void activerEmploye(@PathVariable("id") Long id) {
		employeService.activerEmploye(id);
	}
	
	@GetMapping("/countArchiver")
	public Long countEmployeArchiver() {
	    return employeService.countEmployeArchiver();
	}
	@GetMapping("/countActive")
	public Long countEmployeActive() {
	    return employeService.countEmployeActive();
	}
	
	@GetMapping("/countHomme")
	public Long countHommesActifs() {
	    return employeService.countHommesActifs();
	}
	
	@GetMapping("/countFemme")
	public Long countFemmesActives() {
	    return employeService.countFemmesActives();
	}
	
	
	
	
	
	
	
	
	@GetMapping("/joinInJanuary")
	public Long countEmployeesJoinedInJanuary() {
	    return employeService.countEmployeesJoinedInJanuary();
	}
	
	
	@GetMapping("/joinInFebruary")
	public Long countEmployeesJoinedInFebruary() {
	    return employeService.countEmployeesJoinedInFebruary();
	}
	
	@GetMapping("/joinInMarch")
	public Long countEmployeesJoinedInMarch() {
	    return employeService.countEmployeesJoinedInMarch();
	}
	
	
	@GetMapping("/joinInApril")
	public Long countEmployeesJoinedInApril() {
	    return employeService.countEmployeesJoinedInApril();
	}
	
	
	@GetMapping("/joinInMay")
	public Long countEmployeesJoinedInMay() {
	    return employeService.countEmployeesJoinedInMay();
	}
	
	
	@GetMapping("/joinInSeptember")
	public Long countEmployeesJoinedInSeptember() {
	    return employeService.countEmployeesJoinedInSeptember();
	}
	
	
	@GetMapping("/joinInOctober")
	public Long countEmployeesJoinedInOctober() {
	    return employeService.countEmployeesJoinedInOctober();
	}
	
	@GetMapping("/joinInNovember")
	public Long countEmployeesJoinedInNovember() {
	    return employeService.countEmployeesJoinedInNovember();
	}
	
	
	
	
	
	
	
	
}