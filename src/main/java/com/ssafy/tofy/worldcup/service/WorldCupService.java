package com.ssafy.tofy.worldcup.service;

import com.ssafy.tofy.attraction.dto.AttractionDto;
import com.ssafy.tofy.worldcup.dto.WorldCupResult;

import java.util.List;

public interface WorldCupService {

    public List<AttractionDto> pickRandomAttractions();
    public void saveWorldCupResult(WorldCupResult worldCupResult);
    public void deleteSelectedWorldCup(WorldCupResult[] worldCupResults);
    public void deleteWorldCupByUserId(String userId);

}
