doorImage1 = document.getElementById('door1');
doorImage2 = document.getElementById('door2');
doorImage3 = document.getElementById('door3');
botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
spaceDoorPath ="https://content.codecademy.com/projects/chore-door/images/space.svg";
closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
numClosedDoors =3;
let startButton = document.getElementById('start');
let openDoor1;
let openDoor2;
let opendDoor3;
let currentlyPlaying = true;

isBot = (door) => {
  if(door.src===botDoorPath){
    return true;
  }
  else{
    return false;
  }
}
isClicked = (door) => {
if(door.src === closedDoorPath){
  return false;
}
else
{
  return true;
}
}
playDoor = (door) => {
  numClosedDoors--;

  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver();
  }
  else{

  }
}
randomChoreDoorGenerator = () => {
 choreDoor = Math.floor(Math.random() * numClosedDoors);

 if(choreDoor === 0){
   openDoor1 = botDoorPath;
   openDoor2 = beachDoorPath;
   openDoor3 = spaceDoorPath;
 }
 else if(choreDoor ==1)
 {
   openDoor2 = botDoorPath;
   openDoor3 = beachDoorPath;
   openDoor1 = spaceDoorPath;
 }
 else
 {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
 }
}
doorImage1.onclick = () =>{

  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
  playDoor(doorImage1);}}


doorImage2.onclick = () =>{

  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
  playDoor(doorImage2);}}

doorImage3.onclick = () =>{

  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
  playDoor(doorImage3);

}}

startButton.onclick = () =>
{
  if(!currentlyPlaying){
  startRound();
}

}


startRound = () => {
  
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;

  numClosedDoors = 3;
  
  startButton.innerHTML = "Good luck!";

  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
gameOver = (status) => {
if(status === 'win'){
  startButton.innerHTML = 'You win! Play again?';
}
else{
  startButton.innerHTML = 'Game over! Play again?';
}

currentlyPlaying = false;
}
startRound();