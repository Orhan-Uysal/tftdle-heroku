package com.wordl.tftle.champion;

import javax.persistence.*;

@Entity
@Table(name="Champions")
public class Champion {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="ChampionName", length=50, nullable=false, unique=false)
    private String name;
    @Column(nullable = false)
    private String ImgUrl;
    @Column(nullable = false)
    private Long Cost;
    @Column(nullable = false)
    private String Gender;
    @Column(nullable = false)
    private String OriginTrait;
    @Column(nullable = false)
    private String ClassTrait;
    @Column(nullable = false)
    private String RangeType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return ImgUrl;
    }

    public void setImgUrl(String imgUrl) {
        ImgUrl = imgUrl;
    }

    public Long getCost() {
        return Cost;
    }

    public void setCost(Long cost) {
        Cost = cost;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getOriginTrait() {
        return OriginTrait;
    }

    public void setOriginTrait(String originTrait) {
        OriginTrait = originTrait;
    }

    public String getClassTrait() {
        return ClassTrait;
    }

    public void setClassTrait(String classTrait) {
        ClassTrait = classTrait;
    }

    public String getRangeType() {
        return RangeType;
    }

    public void setRangeType(String rangeType) {
        RangeType = rangeType;
    }
}
