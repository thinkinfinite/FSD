package com.fsd.service;

import java.util.List;

import com.fsd.entity.User;

public interface UserService {

	/**
	 * @param username
	 * @param password
	 * @return
	 */
	String login(String username, String password);
	
	List<User> getAllUsers();

	User getUser(Long id);
}
