package com.equipments.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.equipments.entities.User;

public interface UserDao extends JpaRepository<User,Integer>  {
	User findByEmail(String email);
}
