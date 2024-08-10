package com.Maryem.systressources.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.Réunion;

public interface RéunionService {
public List<Réunion> getAllRéunions();

Réunion créerRéunion(String titreReunion, String typeReunion,String heureReunion ,Date dateReunion, Set<Long> idsParticipants);
Réunion saveRéunion(Réunion v);
Réunion updateRéunion(Réunion v);
void deleteRéunionById(Long id);
 Réunion findByIdgfd(Long id);
 List<Réunion> findReunionsByParticipant( Long utilisateurId);
 long countRéunion();
 long countReunionsByParticipant(Long utilisateurId); 

}