package com.wordl.tftle.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wordl.tftle.json.Champions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class HomePageController {
//
//    @Value("classpath:static/data/champions.json")
//    Resource resourceFile;
//
//    @GetMapping(path="/")
//    public String getHome(Model model) throws IOException {
//
//        ObjectMapper mapper = new ObjectMapper();
//        Champions e = mapper.readValue(resourceFile.getFile(), Champions.class);
//
//        model.addAttribute("champions", e.getChampions().stream().map(c -> c.getName()).collect(Collectors.toList()));
//
//        // System.out.println(e.getChampions().get(0).getName());
//        return "Home";
//    }
//
//    @PostMapping(path="/")
//    public String guessChampionName(@RequestParam("championName") final String championName){
//        return "Home";
//    }
}
