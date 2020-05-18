package com.fsd.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "company")
public class Company implements Serializable {
	private static final long serialVersionUID = -3629784071225214858L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "company_name", unique = true, nullable = false, length = 64)
	private String companyName;

	@Column(name = "turn_over")
	private String turnOver;

	@Column(name = "ceo")
	private String ceo;

	@Column(name = "directors")
	private String directors;

	@Column(name = "stock_exchanges")
	private String stockExchanges;

	@Column(name = "sector")
	private String sector;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "stock_code")
	private String stockCode;

	public Company() {

	}

	public Company(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getTurnOver() {
		return turnOver;
	}

	public void setTurnOver(String turnOver) {
		this.turnOver = turnOver;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public String getDirectors() {
		return directors;
	}

	public void setDirectors(String directors) {
		this.directors = directors;
	}

	public String getStockExchanges() {
		return stockExchanges;
	}

	public void setStockExchanges(String stockExchanges) {
		this.stockExchanges = stockExchanges;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStockCode() {
		return stockCode;
	}

	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
}
