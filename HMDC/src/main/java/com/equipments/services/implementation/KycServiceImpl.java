package com.equipments.services.implementation;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.equipments.daos.KycDao;
import com.equipments.entities.Kyc;
import com.equipments.models.KycDto;
import com.equipments.services.KycService;
import com.equipments.utils.StorageService;

@Service
@Transactional
public class KycServiceImpl implements KycService{
	
	@Autowired
	private KycDao kdao;


	@Autowired
	private StorageService storageService;
	
	@Override
	public Kyc postKyc(KycDto k) {
		String idcard = storageService.store(k.getIdcard());
		String rcbook =	storageService.store(k.getRcbook());
		String carinsurance = storageService.store(k.getCarinsurance());
		String drivinglicense = storageService.store(k.getDrivinglicense());
		Kyc kk=new Kyc(idcard,rcbook,carinsurance,drivinglicense,k.getCarnumber());
		return kdao.save(kk);
	}

	@Override
	public int getKyc() {
		// TODO Auto-generated method stub
		return 0;
	}


}
