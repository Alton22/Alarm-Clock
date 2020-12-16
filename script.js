// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");

// function My_Alarm ("7:00"){
//   console.log("Hey Alton, wake up! It's 7:30");
// };
//
// function Mom_Alarm("7:00") {
//   console.log("Hey, Mom, wake up! It's 7:30");
// };
//
// function Family_Alarm("My_Alarm, Mom_Alarm") {
//   console.log("Hey, wake up! It's 7:30")
// }

function My_Alarm (time){
  return time;

};
console.log("Hey Alton, wake up! Its" + My_Alarm("7:30"));

function Mom_Alarm (time){
  return time;

};
console.log("Hey Mom, wake up! Its" + Mom_Alarm("7:30"));

function Family_Alarm(time, name){

  console.log("Hey"  + (name) + ", wake up! Its " + (time));
}
Family_Alarm("7:00", "Alton");

function Important_Alarm(numPeople){
  for(let p = 0; p<numPeople; p = p +1){
    console.log("WAKE UP!")
  }
  Important_Alarm(6);
}
function Snooze_Alarm(time){
  let alarmtime = time + 10;
  return ( "The Alarm for"  +  (time)  + "has been changed to" + (alarmtime))
}




// function Mom_Alarm("7:00") {
//   console.log("Hey, Mom, wake up! It's 7:30");
// };
//
// function Family_Alarm("My_Alarm, Mom_Alarm") {
//   console.log("Hey, wake up! It's 7:30")
// }
