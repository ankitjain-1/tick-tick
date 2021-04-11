setInterval(() => {
  setClock();
}, 1000);



const setClock = () => {
  const hours = new Date().getHours() % 12;
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const secondHand = document.querySelector("#secondHand");
  const minuteHand = document.querySelector("#minuteHand");
  const hourHand = document.querySelector("#hourHand");
  secondAngle = seconds * 6;
  minuteAngle = minutes * 6 + secondAngle / 60;
  hourAngle = hours * 30 + minuteAngle / 12;
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
