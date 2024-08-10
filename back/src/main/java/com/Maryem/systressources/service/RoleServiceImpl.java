package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Role;
import com.Maryem.systressources.repos.RoleRepository;
@Service
public class RoleServiceImpl implements RoleService {
	
	@Autowired
	RoleRepository roleRepository;

	@Override
	public List<Role> getAllRoles() {
		
		return roleRepository.findAll();
	}

	@Override
	public Role saveRole(Role r) {
		
		return roleRepository.save(r);
	}

	@Override
	public Role updateRole(Role r) {
		
		return roleRepository.save(r);
	}

	@Override
	public void deleteRoleById(Long id) {
		roleRepository.deleteById(id);
		
	}

	@Override
	public Role getRole(Long id) {
	
		return roleRepository.findById(id).get();
	}

	@Override
	public List<Role> findBynomRole(String nomRole) {
		
		return roleRepository.findBynomRole(nomRole);
	}

	@Override
	public List<Role> findBynomRoleContains(String nomRole) {
		
		return roleRepository.findBynomRoleContains(nomRole);
	}

	@Override
	public List<Role> findByOrderBynomRoleAsc() {
		
		return roleRepository.findByOrderBynomRoleAsc();
	}

	@Override
	public long countRole() {
		// TODO Auto-generated method stub
		return roleRepository.count();
	}

	@Override
	public List<Role> trierRolenomrole() {
		
		return roleRepository.trierRolenomrole();
	}




	

}


	


