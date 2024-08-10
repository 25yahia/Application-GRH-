package com.Maryem.systressources.service;



import java.util.List;


import com.Maryem.systressources.entities.Responsable;

public interface ResponsableService {
    long countResponsableActive();
    Responsable saveResponsable(Responsable resp);
    Responsable updateResponsable(Responsable resp);
    public List<Responsable> getAllResponsable();
    void deleteResponsableById(Long id);
  
}
