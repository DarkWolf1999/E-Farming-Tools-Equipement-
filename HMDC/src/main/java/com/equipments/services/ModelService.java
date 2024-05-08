package com.equipments.services;

import java.util.List;

import com.equipments.entities.Model;

public interface ModelService {
	Model getByModelId(int modelId);
	List<Model> findAllModels(int id);
	List<Model> getAllModels();
	Model save(Model modelEntity);
}
