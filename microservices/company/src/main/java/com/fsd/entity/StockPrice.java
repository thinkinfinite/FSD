package com.fsd.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;

@Entity
@Table(name = "stock_price")
public class StockPrice implements Serializable {
	private static final long serialVersionUID = -3629784071225214858L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "company_code")
	private String companyCode;

	@Column(name = "stock_exchange")
	private String stockExchange;

	@Column(name = "current_price")
	private String currentPrice;

	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name = "date")
	private String date;

	@JsonFormat(pattern="HH:mm:ss")
	@Column(name = "time")
	private int time;
	

	public StockPrice() {

	}

	public StockPrice(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getCurrentPrice() {
		return currentPrice;
	}

	public void setCurrentPrice(String currentPrice) {
		this.currentPrice = currentPrice;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}
}
