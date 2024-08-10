package com.Maryem.systressources.controllers;

import java.sql.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Maryem.systressources.entities.DemandeAdministrative;
import com.Maryem.systressources.entities.Réunion;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.repos.RéunionRepository;
import com.Maryem.systressources.repos.UtilisateurRepository;
import com.Maryem.systressources.service.RéunionServiceImpl;

@RestController
@RequestMapping("/Réunions")
@CrossOrigin
public class RéunionController {
@Autowired
private RéunionServiceImpl réunionServiceImpl;

@Autowired
private RéunionRepository réunionRepository;

@Autowired
private UtilisateurRepository utilisateurRepository ;
@RequestMapping(method = RequestMethod.GET)
public List<Réunion> getAllRéunions(){
return réunionServiceImpl.getAllRéunions();

}

/*@RequestMapping(method = RequestMethod.POST)

public Réunion créerRéunion(@RequestParam String titreReunion,

@RequestParam String typeReunion,

@RequestParam String heureReunion,

@RequestParam Date dateReunion,

@RequestParam  Set<Long> idsParticipants ) {

Réunion reunion = réunionServiceImpl.créerRéunion(titreReunion,typeReunion , heureReunion, dateReunion, idsParticipants);

return reunion;
}*/


@RequestMapping(method = RequestMethod.POST)
public Réunion saveReunion(@RequestBody Réunion re) {
return réunionServiceImpl.saveRéunion(re);}


@RequestMapping(method = RequestMethod.PUT)
public Réunion  updateRéunion (@RequestBody Réunion réunion ) {
return réunionServiceImpl.saveRéunion(réunion);
}
@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
public void deleteRéunion(@PathVariable("id") Long id)
{
réunionServiceImpl.deleteRéunionById(id);
}
@RequestMapping(value="/{id}",method = RequestMethod.GET)
public Réunion findByIdgfd(@PathVariable("id") Long id)
{
return réunionServiceImpl.findByIdgfd(id);
}
@GetMapping("/count")
public Long countReunion() {
return réunionServiceImpl.countRéunion();
}









@GetMapping("/ReunionbyUtilisateur/{utilisateurId}")
public List<Réunion> findReunionsByParticipant(@PathVariable Long utilisateurId) {
    return réunionServiceImpl.findReunionsByParticipant(utilisateurId);
}





@GetMapping("/countReunion/{utilisateurId}")
public Long countReunionsByParticipant(@PathVariable("utilisateurId") Long utilisateurId) {
    return réunionServiceImpl.countReunionsByParticipant(utilisateurId);
}

@PutMapping("/{id_meet}/utilisateurs/{id_user}")
public Réunion addUsertoReuinin(@PathVariable Long id_meet, @PathVariable Long id_user) {

Réunion reunion=réunionRepository.findById(id_meet).get();
Utilisateur user= utilisateurRepository.findById(id_user).get();

reunion.getParticipants().add(user);

//TODO: process PUT request

return réunionRepository.save(reunion);
}


}