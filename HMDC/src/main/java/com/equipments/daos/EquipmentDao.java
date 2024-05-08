package com.equipments.daos;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.equipments.entities.Equipment;
import com.equipments.entities.User;
public interface EquipmentDao extends JpaRepository<Equipment,Integer>   {
	List<Equipment> findByCompanyId(int id);
	List<Equipment> findByUser(User u);
}
