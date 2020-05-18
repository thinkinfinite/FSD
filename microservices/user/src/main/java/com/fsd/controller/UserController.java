package com.fsd.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fsd.data.UserDtls;
import com.fsd.entity.User;
import com.fsd.service.UserService;

@Controller
public class UserController {
	
    @Autowired
    private UserService userService;

    /**
     * @param username
     * @param password
     * @return
     */
    @RequestMapping(value = "/login")
    @ResponseBody
	public String login(String username,
                        String password,
                        HttpServletRequest request,
                        ModelMap model) {
        String result = userService.login(username, password);
        
        if(result.equals("success")) {
        	request.getSession().setAttribute("SESSIONID", username);
        }
        
        return result;
	}
    
    @RequestMapping("/users")
    @ResponseBody
    private List<User> getAllPersons() {
      List<User> users = userService.getAllUsers();
      return users;
    }

}