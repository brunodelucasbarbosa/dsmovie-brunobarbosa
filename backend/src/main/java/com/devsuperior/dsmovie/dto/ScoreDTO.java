package com.devsuperior.dsmovie.dto;

public class ScoreDTO {

  private Long movieId;
  private String email;
  private Double score;

  public ScoreDTO() {}

  public ScoreDTO(Long movieId, String email, Double score) {
    this.movieId = movieId;
    this.email = email;
    this.score = score;
  }
}
