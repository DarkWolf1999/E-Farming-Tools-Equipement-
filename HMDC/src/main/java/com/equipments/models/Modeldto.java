package com.equipments.models;

import org.springframework.beans.BeanUtils;

import com.equipments.entities.Equipment;
import com.equipments.entities.Model;

public class Modeldto {
	private int modelId;
	private String modelname;
	private int companyId;
	
	
	
	public Modeldto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Modeldto(int modelId, String modelname, int companyId) {
		super();
		this.modelId = modelId;
		this.modelname = modelname;
		this.companyId = companyId;
	}
	


	public int getModelId() {
		return modelId;
	}

	public void setModelId(int modelId) {
		this.modelId = modelId;
	}

	public String getModelname() {
		return modelname;
	}

	public void setModelname(String modelname) {
		this.modelname = modelname;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	public static Modeldto toDto(Model m) {
		Modeldto d=new Modeldto();
		BeanUtils.copyProperties(m,d);
		return d;
	}
	
	public static Equipment toequipEntity(NewEquipmentdto equipdto) {
		Equipment c=new Equipment();
		BeanUtils.copyProperties(equipdto, c ,"equipImage");
		return c;
	}

	@Override
	public String toString() {
		return "Modeldto [modelId=" + modelId + ", modelname=" + modelname + ", companyId=" + companyId + "]";
	}

	public static Model toModelEntity(Modeldto mdto) {
		Model m=new Model();
		BeanUtils.copyProperties(mdto, m);
		return m;
	}
	
	
}
