const sparksContainer = document.querySelector('.sparks');

function createSpark() {
  const spark = document.createElement('div');
  spark.classList.add('spark');
  spark.style.left = `${Math.random() * 50}px`;
  spark.style.top = `${Math.random() * 20}px`;
  sparksContainer.appendChild(spark);

  setTimeout(() => spark.remove(), 500);
}

setInterval(createSpark, 200);
