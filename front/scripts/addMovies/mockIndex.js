import { moviesFer } from "../index/tempData.js";
import { emptyForm } from "./emptyForm.js";

let mockIndex = 0;
export function mockFormInfo(){
  emptyForm();
  const movieInfo = Object.values(moviesFer[mockIndex++]);
  const formInput = document.getElementsByClassName("form-control")
  
  for (let i = 0; i < movieInfo.length; i++) {
    formInput[i].value = movieInfo[i]
  }
  if (mockIndex === 11) mockIndex = 0;
};