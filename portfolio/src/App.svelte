<script>
  import { onMount } from 'svelte';

function fetchComicData() {
  document.addEventListener("DOMContentLoaded", () => {
    const email = "m.chugaeva@innopolis.university";
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${email}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const comicId = data;
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => response.json())
        .then(comic => {
            const comicTitle = document.getElementById("IDtitle");
            const comicImg = document.getElementById("IDimage");
            const comicDate = document.getElementById("IDdata");

            comicTitle.textContent = comic.safe_title;
            comicImg.src = comic.img;
            comicImg.alt = comic.alt;
            const date = new Date(comic.year, comic.month - 1, comic.day);
            comicDate.textContent = date.toLocaleDateString();
        })
});
}

onMount(() => {
    fetchComicData();
});
</script>

<body>
<header class="header">
  <h1>About me</h1>
  <div class="discription">
    <img src="/jaba.gif" class="foto">
    <p>
      I'm a first-year bachelor's student at Innopolis University. I love programming and enjoy social events. Currently, I participate in "front-end web development" and "reading skills for IT specialists" elective courses.
    </p>
  </div>
</header>

<div class="achievements">
    <div class="item item1">
      <h2>Programming languages I know</h2>
      <ul>  
        <li>C;</li>
        <li>C++;</li>
        <li>Python;</li>
        <li>Java.</li>
      </ul>
    </div>
    <div class="item item2">
      <h2>Courses I successfully passed</h2>
      <ul>  
        <li>Fundamentals of Computer Architecture;</li>
        <li>Analytical Geometry and Linear Algebra;</li>
        <li>Mathematical Analysis;</li>
        <li>Logic and Discrete Mathematics;</li>
        <li>Introduction To Programming;</li>
        <li>English for academic purposes;</li>
        <li>Software Systems Analysis and Design;</li>
        <li>Data Structures and Algorithms;</li>
        <li>Theoretical Computer Science.</li>
      </ul>
    </div>
    <div class="item item3">
      <h2>My areas of interest in IT</h2>
      <ul>  
        <li>Artificial intelligence;</li>
        <li>Robotics;</li>
        <li>Game development;</li>
        <li>Olympiad programming.</li>
      </ul>
    </div>
    <div class="item item4">
      <h2>My hobbies</h2>
      <ul>  
        <li>Drawing;</li>
        <li>Reading;</li>
        <li>Playing video games;</li>
        <li>Playing the kalimba.</li>
      </ul>
    </div>
</div>

<footer>
  <div class="details">
    <ul class="links">
      <li class="li">
        <a href= "https://vk.com/id519015179"><img src="/icons8-vk.svg" alt=""></a>
      </li>
      <li class="li">
        <a href="https://github.com/MariiaChugaeva"><img src="/icons8-github.svg" alt=""></a>
      </li>
      <li class="li">
        <a href="https://t.me/mariiachugaeva"><img src="icons8-telegram.svg" alt=""></a>
      </li>
      <li class="li">
        <a href="mailto:m.chugaeva@innopolis.university"><img src="icons8-mail.svg" alt=""></a>
      </li>
    </ul>
  </div>
  <div>
    <h1>Comic</h1>
    <div class="learntlang">
        <h2 id="IDtitle"></h2>
        <img id="IDimage" src="" alt="" class="comicpic"> 
        <p id="IDdata" class="Idtext"></p>
    </div>
    <script src="dist/fetch.bundle.js"></script>
  </div>
</footer> 
</body>