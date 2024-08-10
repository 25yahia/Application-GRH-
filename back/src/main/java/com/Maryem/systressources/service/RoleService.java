package com.Maryem.systressources.service;

import java.util.List;

import com.Maryem.systressources.entities.Role;

public interface RoleService {
	public List<Role> getAllRoles();
    Role saveRole(Role r);
    Role updateRole(Role r);
    void deleteRoleById(Long id);
    Role getRole(Long id);
    List<Role> findBynomRole(String nomRole);
    List<Role> findBynomRoleContains(String nomRole);
    List<Role> findByOrderBynomRoleAsc();
    long countRole();
    List<Role> trierRolenomrole();
}
