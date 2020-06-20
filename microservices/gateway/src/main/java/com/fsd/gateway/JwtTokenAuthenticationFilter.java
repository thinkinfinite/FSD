package com.fsd.gateway;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import com.fsd.gateway.models.UserDtls;

public class JwtTokenAuthenticationFilter extends  OncePerRequestFilter {
  Logger logger = LoggerFactory.getLogger(JwtTokenAuthenticationFilter.class);
    
	private final JwtConfig jwtConfig;
	
	public JwtTokenAuthenticationFilter(JwtConfig jwtConfig) {
		this.jwtConfig = jwtConfig;
  }
  
  private final ObjectMapper mapper = new ObjectMapper();

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		
		// 1. get the authentication header. Tokens are supposed to be passed in the authentication header
		String header = request.getHeader(jwtConfig.getHeader());
		
		// 2. validate the header and check the prefix
		if(header == null || !header.startsWith(jwtConfig.getPrefix())) {
			chain.doFilter(request, response);  		// If not valid, go to the next filter.
			return;
		}
		
		// If there is no token provided and hence the user won't be authenticated. 
		// It's Ok. Maybe the user accessing a public path or asking for a token.
		
		// All secured paths that needs a token are already defined and secured in config class.
		// And If user tried to access without access token, then he won't be authenticated and an exception will be thrown.
		
		// 3. Get the token
		String token = header.replace(jwtConfig.getPrefix(), "");
		
		try {	// exceptions might be thrown in creating the claims if for example the token is expired
			// 4. Validate the token
      // the parseClaimsJws method does all validation
      Claims claims = Jwts.parser().setSigningKey(jwtConfig.getSecret())
        .parseClaimsJws(token).getBody();
			Map<?, ?> data = claims.get("data", HashMap.class);
			UserDtls user = mapper.convertValue(data, UserDtls.class);
			
			if(user != null) {
        List<String> authorities = new ArrayList<String>();
        authorities.add(user.getRole());
				
				// 5. Create auth object
				// UsernamePasswordAuthenticationToken: A built-in object, used by spring to represent the current authenticated / being authenticated user.
				// It needs a list of authorities, which has type of GrantedAuthority interface, where SimpleGrantedAuthority is an implementation of that interface
				 UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
								 user.getUserName(), null, authorities.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));
				 
				 // 6. Authenticate the user
				 // Now, user is authenticated
				 SecurityContextHolder.getContext().setAuthentication(auth);
			}
			
		} catch (Exception e) {
			// In case of failure. Make sure it's clear; so guarantee user won't be authenticated
      SecurityContextHolder.clearContext();
      logger.warn("Auth failed! ", e);
		}
		
		// go to the next filter in the filter chain
		chain.doFilter(request, response);
	}

}