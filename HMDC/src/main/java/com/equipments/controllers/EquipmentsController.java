package com.equipments.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equipments.entities.Equipment;
import com.equipments.entities.Company;
import com.equipments.entities.Kyc;
import com.equipments.entities.Model;
import com.equipments.entities.User;
import com.equipments.models.Equipmentdto;
import com.equipments.models.Equipmentdto2;
import com.equipments.models.Companydto;
import com.equipments.models.KycDto;
import com.equipments.models.Modeldto;
import com.equipments.models.NewEquipmentdto;
import com.equipments.models.Response;
import com.equipments.services.EquipmentService;
import com.equipments.services.CompanyService;
import com.equipments.services.KycService;
import com.equipments.services.ModelService;
import com.equipments.services.UserService;


@CrossOrigin 	
@RestController
@RequestMapping("/")
public class EquipmentsController {
	@Autowired
	private EquipmentService equipservice;
	
	@Autowired
	private CompanyService companyservice;
	
	@Autowired 
	private ModelService modelservice;
	
	@Autowired
	private UserService userservice;
	
	@Autowired
	private KycService kservice;
	
	@GetMapping("/getcars")
	public ResponseEntity<?> getEquips(){
		List<Equipment> list=equipservice.findAll();
		List<Equipmentdto> result = new ArrayList<Equipmentdto>();
		for (Equipment c : list) {
			Equipmentdto dto=Equipmentdto.ToDto(c);
			dto.setCompanyName(c.getCompany().getName());
			dto.setUserId(c.getUser().getUserId());
			Model model = modelservice.getByModelId(c.getModelId());
			dto.setModelName(model.getModelName());
			result.add( dto );
			System.out.println(dto);
		}
		return Response.success(result);	
	}



	
	
	//this is post equip by id 
	@PostMapping("/postequip")
	public ResponseEntity<?> registerEquip(NewEquipmentdto cdto){
		System.out.println(cdto);
		
		Equipment equipEnitity=NewEquipmentdto.toEquipEntity(cdto);
		
		Company company=companyservice.getByCompanyId(cdto.getCompanyId());
		Model model=modelservice.getByModelId(cdto.getModelId());
		User user=userservice.findUser(cdto.getUserId());
		
		System.out.println(company);
		System.out.println(model);
		System.out.println(cdto.getUserId());
		
		equipEnitity.setCompany(company);
		equipEnitity.setModelId(model.getModelId());
		equipEnitity.setUser(user);
		
		Equipment equipResponse = equipservice.save(equipEnitity,cdto.getEquipImage());
		HashMap<String, Object> map = new HashMap<>();
		//if company and response is not found then show error msg
		if(company == null && equipResponse == null) {
			map.put("status", "error");
			ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
			return ResponseEntity.ok(map);
		}else {
			map.put("status", "success");
			return ResponseEntity.ok(map);
		}
		
	}
	
		
	@GetMapping("/getequip/{id}")
	public ResponseEntity<?> getAllEquips(@PathVariable("id") int id){
		List<Equipment> list=equipservice.findByCompany1(id);
		list.forEach(System.out::println);
		return Response.success(list);
	}
	
	

	@GetMapping("/getequipbyuserid/{id}")
	public ResponseEntity<?> getAllEquipsOfUser(@PathVariable("id") int id){
		User u=userservice.findUser(id);
		List<Equipment> list=equipservice.findEquipsByuser(u);
		List<Equipmentdto2> equiplist=new ArrayList<Equipmentdto2>();
		for(Equipment c:list) {
			Equipmentdto2 equip=new Equipmentdto2(c.getEquipId(),c.getFuelType(),c.getKmDriven(),c.getPrice(),c.getColor(),c.getDate(),c.getCity());
			equip.setCompanyName(c.getCompany().getName());
			Model m=modelservice.getByModelId(c.getModelId());
			equip.setModelName(m.getModelName());
			equiplist.add(equip);
		}
		return Response.success(equiplist);
	}
	
//	
//	@GetMapping("/getequipbyuserid/{id}")
//	public ResponseEntity<?> getAllEquipsOfUser(@PathVariable("id") int id){
//		User u=userservice.findUser(id);
//		List<Equipment> list=equipservice.findEquipsByuser(u);
//		List<Equipmentdto> equiplist=new ArrayList<Equipmentdto>();
//		for(Equipment c:list) {
//			Equipmentdto equip=new Equipmentdto(c.getFuelType(),c.getKmDriven(),c.getPrice(),c.getColor(),c.getDate(),c.getCity());
//			equip.setCompanyName(c.getCompany().getName());
//			Model m=modelservice.getByModelId(c.getModelId());
//			equip.setModelName(m.getModelName());
//			equiplist.add(equip);
//		}
//		return Response.success(equiplist);
//	}
	
	@PostMapping("/postcompany")
	public ResponseEntity<?> registerCompany(Company cdto){
//		System.out.println(cdto);
//		Company cEntity=Companydto.toCompanyEntity(cdto);
		Company c=companyservice.save(cdto);
		return Response.success(c);
	}
	
	@PostMapping("/postmodel")
	public ResponseEntity<?> registerModel(Modeldto mdto){
		Model m=new Model();
		m.setCompany(companyservice.findById(mdto.getCompanyId()));
		m.setModelName(mdto.getModelname());
		return Response.success(modelservice.save(m));
	}
	
	
	@GetMapping("/getcompanies")
	public ResponseEntity<?> getAllCompanies(){
		List<Company> list=companyservice.findAllCompanies();
		List<Companydto> companylist=new ArrayList<Companydto>();
		for(Company c:list) {
			companylist.add(new Companydto(c.getId(),c.getName()));
		}
		return Response.success(companylist);
	}
	
	@GetMapping("/getmodels/{id}")
	public ResponseEntity<?> getAllModels(@PathVariable("id") int id){
		List<Model> list=modelservice.findAllModels(id);
		list.forEach(System.out::println);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/getmodels")
	public ResponseEntity<?> allModels(){
		List<Model> list=modelservice.getAllModels();
		List<Modeldto> modellist=new ArrayList<Modeldto>();
		for(Model m:list) {
			Modeldto MM = new Modeldto(m.getModelId(),m.getModelName(),m.getCompany().getId());
			modellist.add(MM);
			System.out.println(MM);
		}
		return Response.success(modellist);
	}
	
	@DeleteMapping("/deleteequip/{id}")
	public ResponseEntity<?> deleteEquip(@PathVariable("id") int id){
		Equipment equipment=equipservice.deleteEquip(id);
		System.out.println(equipment);
		return Response.success(equipment);
	}
	
//	@PostMapping("/postkyc")
//	public ResponseEntity<?> postKyc(KycDto kdto){
//		Kyc k=kservice.postKyc(kdto);
//		return Response.success(k);
//	} 
	
//	@GetMapping("/getAllKyc")
//	public ResponseEntity<?> getKyc(){
//		List<Kyc>=kservice.getKyc();
//		System.out.println(equip);
//		return Response.success(equip);
//	} 
	
}
