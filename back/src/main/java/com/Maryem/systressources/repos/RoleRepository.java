package com.Maryem.systressources.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Role;
@RepositoryRestResource(path = "reste")
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	
	
	
	List<Role> findBynomRole(String nomrole);
	List<Role> findBynomRoleContains(String nomRole);
	  
	
	@Query("select r from Role r order by r.nomRole ASC")
	List<Role> findByOrderBynomRoleAsc();
	@Query("select r from Role r order by r.nomRole ASC")
	List<Role> trierRolenomrole();

}
