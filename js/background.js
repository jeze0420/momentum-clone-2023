const images = [
  "00.jpg",
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.insertBefore(bgImage, clock);
// (추가할 노드, 참조될 노드) insertBefore() 를 이용하면 참조될 노드 앞에 위치를 지정하여 노드를 추가할 수 있음
// appendChild()는 넣는 시점 마지막 위치에 삽입함
