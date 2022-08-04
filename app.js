window.onscroll = () => {
    if ((document.body.scrollHeight > 100) || (document.documentElement.scrollHeight > 100)) {
        document.getElementById("header").style.boxShadow = "0 1px 4px rgba(0,0,0,.2)";
    }
};

function toggleNav() {
    document.getElementById('menu').classList.toggle('show');
}

function toggleMode() {
    if (localStorage.getItem("theme") == "light_theme" || localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "dark_theme");
    }
    else {
        localStorage.setItem("theme", "light_theme");
    }

    document.documentElement.classList.toggle("dark_theme");

    if (localStorage.getItem("theme") == "light_theme" || localStorage.getItem("theme") == null) {
        document.querySelector("#them_icon").classList.add("fa-sun");
        document.querySelector("#them_icon").classList.remove("fa-moon");
        document.querySelector(".nav_logo").innerHTML = '<img src="./assets/img/logo.png" alt="SkillHub">';
    }
    else {
        document.querySelector("#them_icon").classList.remove("fa-sun");
        document.querySelector("#them_icon").classList.add("fa-moon");
        document.querySelector(".nav_logo").innerHTML = '<h2><i class="far fa-bookmark"></i> Skill<span>hub</span></h2>';
    }

    //console.log(localStorage.getItem("theme"));
}

document.documentElement.classList.add(localStorage.getItem("theme"));


//

const courseRow = document.querySelector(".course_row");
courseData = [...courses];

nextItem = () => {
    courseRow.scrollLeft -= 270;
};

prevItem = () => {
    courseRow.scrollLeft += 270;
};

function showItem(item) {

    courseData.map((course) => {
        const { img, title } = course;

        courseRow.innerHTML += `
      <div class="course_item">
        <img src="${img}" alt="">
         <b>${title}</b>
      <div>
        <p>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </p>
        <p><small>$<span>119.99</span></small></p>
       </div>
        <p><small><i class="fas fa-uses"></i> 25k+ Students</small></p>
   </div>`;
    });
}

showItem();