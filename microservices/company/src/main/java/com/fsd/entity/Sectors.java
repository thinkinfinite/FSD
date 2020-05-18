package com.fsd.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "sectors")
public class Sectors implements Serializable {
	private static final long serialVersionUID = -3629784071225214858L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "sector_name", unique = true, nullable = false, length = 64)
	private String sectorName;

	@Column(name = "brief")
	private String brief;
	

	public Sectors() {

	}

	public Sectors(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSectorName() {
		return sectorName;
	}

	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}
}
