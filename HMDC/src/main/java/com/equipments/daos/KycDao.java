package com.equipments.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.equipments.entities.Kyc;
import com.equipments.models.KycDto;

public interface KycDao extends JpaRepository<Kyc,Integer> {
}
