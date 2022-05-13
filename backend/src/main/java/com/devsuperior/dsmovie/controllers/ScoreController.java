package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/movies")
public class ScoreController {

  @PutMapping("/{id}}")
  public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO) {
    return null;
  }


}
