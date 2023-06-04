
package com.wordl.tftle.json;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "armor",
    "attackSpeed",
    "critChance",
    "critMultiplier",
    "damage",
    "hp",
    "initialMana",
    "magicResist",
    "mana",
    "range"
})
@Generated("jsonschema2pojo")
public class Stats {

    @JsonProperty("armor")
    private Double armor;
    @JsonProperty("attackSpeed")
    private Double attackSpeed;
    @JsonProperty("critChance")
    private Double critChance;
    @JsonProperty("critMultiplier")
    private Double critMultiplier;
    @JsonProperty("damage")
    private Double damage;
    @JsonProperty("hp")
    private Double hp;
    @JsonProperty("initialMana")
    private Integer initialMana;
    @JsonProperty("magicResist")
    private Double magicResist;
    @JsonProperty("mana")
    private Double mana;
    @JsonProperty("range")
    private Double range;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("armor")
    public Double getArmor() {
        return armor;
    }

    @JsonProperty("armor")
    public void setArmor(Double armor) {
        this.armor = armor;
    }

    @JsonProperty("attackSpeed")
    public Double getAttackSpeed() {
        return attackSpeed;
    }

    @JsonProperty("attackSpeed")
    public void setAttackSpeed(Double attackSpeed) {
        this.attackSpeed = attackSpeed;
    }

    @JsonProperty("critChance")
    public Double getCritChance() {
        return critChance;
    }

    @JsonProperty("critChance")
    public void setCritChance(Double critChance) {
        this.critChance = critChance;
    }

    @JsonProperty("critMultiplier")
    public Double getCritMultiplier() {
        return critMultiplier;
    }

    @JsonProperty("critMultiplier")
    public void setCritMultiplier(Double critMultiplier) {
        this.critMultiplier = critMultiplier;
    }

    @JsonProperty("damage")
    public Double getDamage() {
        return damage;
    }

    @JsonProperty("damage")
    public void setDamage(Double damage) {
        this.damage = damage;
    }

    @JsonProperty("hp")
    public Double getHp() {
        return hp;
    }

    @JsonProperty("hp")
    public void setHp(Double hp) {
        this.hp = hp;
    }

    @JsonProperty("initialMana")
    public Integer getInitialMana() {
        return initialMana;
    }

    @JsonProperty("initialMana")
    public void setInitialMana(Integer initialMana) {
        this.initialMana = initialMana;
    }

    @JsonProperty("magicResist")
    public Double getMagicResist() {
        return magicResist;
    }

    @JsonProperty("magicResist")
    public void setMagicResist(Double magicResist) {
        this.magicResist = magicResist;
    }

    @JsonProperty("mana")
    public Double getMana() {
        return mana;
    }

    @JsonProperty("mana")
    public void setMana(Double mana) {
        this.mana = mana;
    }

    @JsonProperty("range")
    public Double getRange() {
        return range;
    }

    @JsonProperty("range")
    public void setRange(Double range) {
        this.range = range;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
