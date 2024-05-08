package com.equipments.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="equip_company")
public class Company {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="companyId")
	private int id;
	
	@JsonManagedReference
	@OneToMany(mappedBy="company", cascade = CascadeType.ALL)
	private List<Equipment> equipList;
	
	@JsonManagedReference
	@OneToMany(mappedBy="company", cascade = CascadeType.ALL)
	private List<Model> modelList;
	
	@Column(name="name",length=200)
	private String name;
	
	public Company() {
		this.equipList=new ArrayList<Equipment>();
		this.modelList=new ArrayList<Model>();
	}

	public Company(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Equipment> getEquipList() {
		return equipList;
	}

	public void setEquipList(List<Equipment> equipList) {
		this.equipList = equipList;
	}

	public List<Model> getModelList() {
		return modelList;
	}

	public void setModelList(List<Model> modelList) {
		this.modelList = modelList;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + "]";
	}

	
}
