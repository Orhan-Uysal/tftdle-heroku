package com.wordl.tftle.champion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ChampionService {

    @Autowired
    ChampionRepository championRepository;
    private List<Integer> availableChamps = new ArrayList<>();
    private long winner;

    private int dayCount = 0;


    public ChampionService(){
        generateShuffledChamps();
        generateNewWinner();
    }
    private void generateShuffledChamps(){
        this.availableChamps = new ArrayList<Integer>();
        for (int i=1; i<60; i++) availableChamps.add(i);
        Collections.shuffle(availableChamps);
    }

    public void generateNewWinner(){
        if(availableChamps.isEmpty()){
            generateShuffledChamps();
        }

        winner = availableChamps.get(0);
        availableChamps.remove(0);
        dayCount++;
    }

    public Champion getWinner() {
        return championRepository.findById(winner);
    }

    public int getDayCount() {
        return dayCount;
    }

}
