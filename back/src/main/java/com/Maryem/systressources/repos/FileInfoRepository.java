package com.Maryem.systressources.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Candidat;
import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.entities.FileInfo;



import java.util.List;

@RepositoryRestResource(path = "rest7500")
public interface FileInfoRepository extends JpaRepository<FileInfo, Long> {
	
	
    
    
   /* @Query("select e from FileInfo e where e.candidat.id=:idcandidat ")
    FileInfo findByCandidat(Long idcandidat);*/
	 @Query("select e from FileInfo e where e.candidat.id = :idcandidat")
	    List<FileInfo> findAllByCandidatId(Long idcandidat);
}
