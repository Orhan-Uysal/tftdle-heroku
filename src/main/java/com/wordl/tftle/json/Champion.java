
package com.wordl.tftle.json;

import java.util.HashMap;
import java.util.List;
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
    "ability",
    "apiName",
    "cost",
    "icon",
    "name",
    "stats",
    "traits"
})
@Generated("jsonschema2pojo")
public class Champion {

    @JsonProperty("ability")
    private Ability ability;
    @JsonProperty("apiName")
    private String apiName;
    @JsonProperty("cost")
    private Integer cost;
    @JsonProperty("icon")
    private String icon;
    @JsonProperty("name")
    private String name;
    @JsonProperty("stats")
    private Stats stats;
    @JsonProperty("traits")
    private List<String> traits = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("ability")
    public Ability getAbility() {
        return ability;
    }

    @JsonProperty("ability")
    public void setAbility(Ability ability) {
        this.ability = ability;
    }

    @JsonProperty("apiName")
    public String getApiName() {
        return apiName;
    }

    @JsonProperty("apiName")
    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    @JsonProperty("cost")
    public Integer getCost() {
        return cost;
    }

    @JsonProperty("cost")
    public void setCost(Integer cost) {
        this.cost = cost;
    }

    @JsonProperty("icon")
    public String getIcon() {
        return icon;
    }

    @JsonProperty("icon")
    public void setIcon(String icon) {
        this.icon = icon;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("stats")
    public Stats getStats() {
        return stats;
    }

    @JsonProperty("stats")
    public void setStats(Stats stats) {
        this.stats = stats;
    }

    @JsonProperty("traits")
    public List<String> getTraits() {
        return traits;
    }

    @JsonProperty("traits")
    public void setTraits(List<String> traits) {
        this.traits = traits;
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
