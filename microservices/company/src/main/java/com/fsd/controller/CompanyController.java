package com.fsd.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fsd.entity.Company;
import com.fsd.repository.CompanyRepository;

@Controller
@RequestMapping("/company")
public class CompanyController {
	
    @Autowired
    private CompanyRepository companyRepository;

    @RequestMapping(value = "/list")
    @ResponseBody
	public List<Company> getCompany() {
    	List<Company> lCompany = new ArrayList<Company>();
    	lCompany = companyRepository.findAll();

        return lCompany;
	}
    
    /**
     * @param username
     * @param password
     * @return
     */
    @PostMapping(value = "/create")
    @ResponseBody
	public String createCompany(@RequestBody Company company) {
    	String result = "success";
    	Assert.notNull(company, "param data is not correct");
    	Assert.state(StringUtils.isNotBlank(company.getCompanyName()), "name can not be empty");
    	
    	try {
			companyRepository.save(company);
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail:"+e.getCause();
		}
        return result;
	}

}