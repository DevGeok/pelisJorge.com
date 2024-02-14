import { tryFetchVideo } from "./tryFetchVideo.js";
import { handleVideoData } from "./handleVideoData.js";

export function makeVideoRequest(url, movieId, languages, index) {
    $.ajax({
      url: url,
      method: "GET",
      headers: {
        "accept": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI5MDJjOTNhM2EzZjc1MmNiYzQ1MzMzMDU1M2U4YyIsInN1YiI6IjY1Y2EyZWFjNDM1MDExMDE4M2ViMWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYiUyh8VEHIV-uN868CbUPFSM_O3I3hOhRjMjtemKTE'
        },
      success: data => handleVideoData(data, movieId, languages, index),
      error: () => tryFetchVideo(movieId, languages, index + 1)
    });
  }