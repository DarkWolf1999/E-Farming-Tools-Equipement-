package com.equipments.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.equipments.entities.Company;

public interface CompanyDao extends JpaRepository<Company, Integer> {

}
