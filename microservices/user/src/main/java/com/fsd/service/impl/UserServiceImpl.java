package com.fsd.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import com.fsd.entity.User;
import com.fsd.repository.UserRepository;
import com.fsd.service.UserService;


@Service
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public String login(String username, String password) {
    	String result = "success";
        User po = userRepository.findByUserName(username);

        if (null == po) {
            return "user not exist";
        }
        Assert.state(StringUtils.equals(po.getPassword(), password), "密码错误"); 

        return result;
    }
    
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<User>();
        this.userRepository.findAll().forEach(user -> users.add(user));
        return users;
    }

    public User getUser(Long id) {
        return this.userRepository.findById(id).orElse(null);
    }

}
