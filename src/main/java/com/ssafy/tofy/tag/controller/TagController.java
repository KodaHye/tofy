package com.ssafy.tofy.tag.controller;

import com.ssafy.tofy.tag.service.TagService;
import com.ssafy.tofy.util.Response;
import com.ssafy.tofy.util.Status;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@Log4j2
@RestController
public class TagController {

    TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping("/tag")
    public ResponseEntity<Object> getAllTags() {
        Response res = Response.builder()
                .status(Status.SUCCESS.getStatus())
                .message("success all tag get")
                .data(new HashMap<>())
                .build();
        try {
            res.getData().put("tags", tagService.getAllTags());
            log.info("태그의 모든 정보 조회 ");
        } catch (Exception e) {
            log.error("태그 목록 조회 중 에러 {}", e.getMessage());
            res.setStatus(Status.ERROR.getStatus());
            res.setMessage("error all tag get");
        }

        return ResponseEntity.ok()
                .body(res);
    }
    
}
