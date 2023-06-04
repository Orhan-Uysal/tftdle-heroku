package com.wordl.tftle.champion;

import org.springframework.data.repository.CrudRepository;

public interface ChampionRepository extends CrudRepository<Champion, Integer> {
    Champion findByName(String name);
    Champion findById(Long id);

}

