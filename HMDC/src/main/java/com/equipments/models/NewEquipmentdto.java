package com.equipments.models;

import java.util.Date;
import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import com.equipments.entities.Equipment;

public class NewEquipmentdto {
	
//	private String companyName;
	private int modelId;
	private int companyId;
	private int userId;
	private String fuelType;
	private int kmDriven;
	private double price;
	private String color;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date date;
	private String city;
	private MultipartFile equipImage;
	
	public NewEquipmentdto() {
	}

	public NewEquipmentdto(int userId,int modelId, int companyId, String fuelType, int kmDriven, double price, String color, Date date,
			String city, MultipartFile equipImage) {
		super();
		this.userId=userId;
		this.modelId = modelId;
		this.companyId = companyId;
		this.fuelType = fuelType;
		this.kmDriven = kmDriven;
		this.price = price;
		this.color = color;
		this.date = date;
		this.city = city;
		this.equipImage = equipImage;
	}
	
	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
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

	public MultipartFile getEquipImage() {
		return equipImage;
	}

	public void setEquipImage(MultipartFile equipImage) {
		this.equipImage = equipImage;
	}
	
	public int getModelId() {
		return modelId;
	}

	public void setModelId(int modelId) {
		this.modelId = modelId;
	}

	
	@Override
	public String toString() {
		return "NewEquipmentdto [modelId=" + modelId + ", companyId=" + companyId + ", userId=" + userId + ", fuelType="
				+ fuelType + ", kmDriven=" + kmDriven + ", price=" + price + ", color=" + color + ", date=" + date
				+ ", city=" + city + ", equipImage=" + equipImage + "]";
	}

	public static Equipment toEquipEntity(NewEquipmentdto equipdto) {
		Equipment c=new Equipment();
		BeanUtils.copyProperties(equipdto, c ,"equipImage");
		return c;
	}



}
