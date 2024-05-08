package com.equipments.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.equipments.entities.Equipment;
import com.equipments.entities.Kyc;
import com.equipments.entities.User;
import com.equipments.models.KycDto;

public interface EquipmentService {
	List<Equipment> findAll();
	Equipment save(Equipment equipEnitity, MultipartFile equipImage);
	List<Equipment> findByCompany1(int id);
	List<Equipment> findEquipsByuser(User u);
	Equipment deleteEquip(int id);
	//Equipment findEquip()
	Equipment getEquip(int id);
	
}
