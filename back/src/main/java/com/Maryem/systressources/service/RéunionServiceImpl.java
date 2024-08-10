package com.Maryem.systressources.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Réunion;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.repos.RéunionRepository;
import com.Maryem.systressources.repos.UtilisateurRepository;
@Service
public class RéunionServiceImpl implements RéunionService {
@Autowired
RéunionRepository réunionRepository;
@Autowired
private UtilisateurRepository  utilisateurRepos;

@Override
public List<Réunion> getAllRéunions() {

return réunionRepository.findAll();
}






@Override
public Réunion updateRéunion(Réunion v) {

return réunionRepository.save(v);
}

@Override
public void deleteRéunionById(Long id) {
réunionRepository.deleteById(id);

}

@Override
public Réunion findByIdgfd(Long id) {
// TODO Auto-generated method stub
return réunionRepository.findById(id).get();
}



@Override
public long countRéunion() {

return réunionRepository.count();
}





@Override
public Réunion saveRéunion(Réunion v) {
return réunionRepository.save(v);
}


public Réunion créerRéunion(String titreReunion, String typeReunion,String heureReunion ,Date dateReunion, Set<Long> idsParticipants)
{ Réunion reunion = new Réunion();
reunion.settitreReunion(titreReunion);
reunion.setHeureReunion(heureReunion);
reunion.setDateReunion(dateReunion);
Set<Utilisateur> participants = new HashSet<>();
for (Long id : idsParticipants)
{ Utilisateur utilisateur = utilisateurRepos.findById(id).orElseThrow(() -> new IllegalArgumentException("Utilisateur non trouvé avec l'ID: " + id));
participants.add(utilisateur); } reunion.setParticipants(participants);
return réunionRepository.save(reunion); }









@Override
public long countReunionsByParticipant(Long utilisateurId) {
	return réunionRepository.countReunionsByParticipant(utilisateurId);
}






@Override
public List<Réunion> findReunionsByParticipant(Long utilisateurId) {
    Optional<Utilisateur> user = utilisateurRepos.findById(utilisateurId);
    if (user.isPresent()) {
        return new ArrayList<>(user.get().getListeréunion());
    } else {
        throw new IllegalArgumentException("Utilisateur non trouvé avec l'ID: " + utilisateurId);
    }
}



}