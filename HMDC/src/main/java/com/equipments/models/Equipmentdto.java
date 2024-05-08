package com.equipments.models;
import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.equipments.entities.Equipment;

public class Equipmentdto {
	
	private int userId;
	private String modelName;
	private String companyName;
	private String fuelType;
	private int kmDriven;
	private double price;
	private String color;
	private Date date;
	private String city;
	private String equipImage;
	private String status;
	
	public Equipmentdto() {
	}

	public Equipmentdto(int userId, String modelName, String companyName, String fuelType, int kmDriven, double price,
			String color, Date date, String city, String equipImage, String status) {
		super();
		this.userId = userId;
		this.modelName = modelName;
		this.companyName = companyName;
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
		this.equipImage = equipImage;
		this.status = status;
	}
	
	public Equipmentdto( String fuelType, int kmDriven, double price,String color, Date date, String city) {
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
	}
	
	public int getUserId() {
		return userId;
	}







	public void setUserId(int userId) {
		this.userId = userId;
	}







	public String getModelName() {
		return modelName;
	}



	public void setModelName(String modelName) {
		this.modelName = modelName;
	}



	public String getCompanyName() {
		return companyName;
	}



	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}



	public String getFuelType() {
		return fuelType;
	}



	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}



	public int getKmDriven() {
		return kmDriven;
	}



	public void setKmDriven(int kmDriven) {
		this.kmDriven = kmDriven;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	public String getColor() {
		return color;
	}



	public void setColor(String color) {
		this.color = color;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getEquipImage() {
		return equipImage;
	}



	public void setEquipImage(String equipImage) {
		this.equipImage = equipImage;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public static Equipmentdto ToDto(Equipment c) {
		Equipmentdto equipmentdto=new Equipmentdto();
		int var=c.getStatus();
		
		if (var==1)
			equipmentdto.setStatus("Available");
		else
			equipmentdto.setStatus("Unavailable");
		
		BeanUtils.copyProperties(c, equipmentdto);
		return equipmentdto;
	}







	@Override
	public String toString() {
		return "Equipmentdto [userId=" + userId + ", modelName=" + modelName + ", companyName=" + companyName + ", fuelType="
				+ fuelType + ", kmDriven=" + kmDriven + ", price=" + price + ", color=" + color + ", date=" + date
				+ ", city=" + city + ", equipImage=" + equipImage + ", status=" + status + "]";
	}
	
	
}
