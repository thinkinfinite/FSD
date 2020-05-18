package com.fsd.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.fsd.service.CompanyService;


@Service
@Transactional(readOnly = true)
public class CompanyServiceImpl implements CompanyService {


}
