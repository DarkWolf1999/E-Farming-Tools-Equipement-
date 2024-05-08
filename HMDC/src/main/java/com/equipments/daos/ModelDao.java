package com.equipments.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.equipments.entities.Model;

public interface ModelDao extends JpaRepository<Model, Integer> {

	List<Model> findByCompanyId(int id);

	Model findByCompanyIdAndModelId(int id, int modelId);
	
}
