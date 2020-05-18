package com.fsd.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "stock_exchange")
public class StockExchange implements Serializable {
	private static final long serialVersionUID = -3629784071225214858L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "stock_exchange", unique = true, nullable = false, length = 64)
	private String stockExchange;

	@Column(name = "brief")
	private String brief;

	@Column(name = "contact_address")
	private String contactAddress;

	@Column(name = "remarks")
	private String remarks;

	public StockExchange() {

	}

	public StockExchange(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getContactAddress() {
		return contactAddress;
	}

	public void setContactAddress(String contactAddress) {
		this.contactAddress = contactAddress;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
}
