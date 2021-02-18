setInterval(() => {
  setClock();
}, 1000);
const hours = new Date().getHours() % 12;
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
console.log(hours);
console.log(minutes);
console.log(seconds);

const setClock = () => {
  const hours = new Date().getHours() % 12;
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const secondHand = document.querySelector("#secondHand");
  const minuteHand = document.querySelector("#minuteHand");
  const hourHand = document.querySelector("#hourHand");
  secondAngle = seconds * 6 - 180;
  minuteAngle = minutes * 6 + 270;
  hourAngle = hours * 30 + minuteAngle / 60;
  setRotation(secondHand, secondAngle);
  setRotation(minuteHand, minuteAngle);
  setRotation(hourHand, hourAngle);
  // console.log(hours, minutes, seconds);
};

const setRotation = (element, angle) => {
  // console.log(element.style.transform)
  element.style.transform = `rotate(${angle}deg)`;
};

const secondHand = document.querySelector("#secondHand");
// secondHand.style.transform = "rotate(deg)"

setClock();
