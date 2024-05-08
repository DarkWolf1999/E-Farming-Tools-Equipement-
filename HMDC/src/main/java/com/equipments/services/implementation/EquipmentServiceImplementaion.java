package com.equipments.services.implementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.equipments.daos.EquipmentDao;
import com.equipments.entities.Equipment;
import com.equipments.entities.User;
import com.equipments.services.EquipmentService;
import com.equipments.utils.StorageService;


@Service
@Transactional
public class EquipmentServiceImplementaion implements EquipmentService  {
	
	@Autowired
	private EquipmentDao equipdao;
	
	@Autowired
	private StorageService storageService;
	
	@Override
	public List<Equipment> findAll() {
		return equipdao.findAll();
	}

	@Override
	public Equipment save(Equipment equipEnitity, MultipartFile equipImage) {
		String fileName = storageService.store(equipImage);
		equipEnitity.setEquipImage(fileName);
		return equipdao.save(equipEnitity);
	}

	@Override
	public List<Equipment> findByCompany1(int id) {
		// TODO Auto-generated method stub
		return equipdao.findByCompanyId(id);
	}

	@Override
	public List<Equipment> findEquipsByuser(User u) {
		// TODO Auto-generated method stub
		return equipdao.findByUser(u);
	}

	@Override
	public Equipment deleteEquip(int id) {
		Optional<Equipment> c = equipdao.findById(id);
		Equipment cc=c.orElse(null);
		equipdao.delete(cc);
		return cc;
	}

	@Override
	public Equipment getEquip(int id) {
		Optional<Equipment> c=equipdao.findById(id);
		return c.orElse(null);
	}

}
