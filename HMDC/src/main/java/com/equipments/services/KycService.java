package com.equipments.services;

import com.equipments.entities.Kyc;
import com.equipments.models.KycDto;

public interface KycService {
	Kyc postKyc(KycDto kdto);

	int getKyc();
}
