package com.fsd.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "ipo_detail")
public class IpoDetail implements Serializable {
	private static final long serialVersionUID = -3629784071225214858L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "stock_exchange")
	private String stockExchange;

	@Column(name = "share_price")
	private String sharePrice;

	@Column(name = "share_nums")
	private Long shareNums;

	@Temporal(value = TemporalType.TIMESTAMP)
	@Column(name = "open_time")
	private Date openTime;
	
	@Column(name = "remarks")
	private Long remarks;



	@Column(name = "sector")
	private String sector;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "stock_code")
	private String stockCode;

	public IpoDetail() {

	}

	public IpoDetail(long id) {
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

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getSharePrice() {
		return sharePrice;
	}

	public void setSharePrice(String sharePrice) {
		this.sharePrice = sharePrice;
	}

	public Long getShareNums() {
		return shareNums;
	}

	public void setShareNums(Long shareNums) {
		this.shareNums = shareNums;
	}

	public Long getRemarks() {
		return remarks;
	}

	public void setRemarks(Long remarks) {
		this.remarks = remarks;
	}

	public Date getOpenTime() {
		return openTime;
	}

	public void setOpenTime(Date openTime) {
		this.openTime = openTime;
	}
}
