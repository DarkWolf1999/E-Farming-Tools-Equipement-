package com.equipments.services;


import java.util.List;

import com.equipments.entities.User;

public interface UserService {
	User findByEmail(String email); 
	User save(User customer);
	User authenticate(String email , String password);
	User forgotPassword(String email, String password, String security);
	User findUser(int userId);
	List<User> finAllUsers();
	User deleteUser(int id);
}
