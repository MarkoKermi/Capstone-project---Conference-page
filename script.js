// menu bar
const hamburguerIcon = document.querySelector(".hamburguer-menu-icon");
const floatingMenu = document.querySelector(".floating-menu");
const body = document.querySelector("body");

hamburguerIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
  body.classList.toggle("no-scroll");
  hamburguerIcon.classList.toggle("active-menu");
  floatingMenu.classList.toggle("show-menu");
});

// test

// future speakers

const workCard = (resumeData) => {
  let content = "";
  resumeData.forEach((workData) => {
    content += `
  <div class="speaker" id="bg_img">
  <div class="speaker_box">
    <img class="speaker_appearance image" src="${workData.image}" alt="speaker image ">
  </div>
  <div class="speaker_info">
    <p class="name">${workData.name}</p>
    <p class="job">${workData.job}</p>
    <div class="line"></div>
    <p class="subject">${workData.subject}</p>
    </div>
      </div>`;
  });

  return content;
};

// WINDOWS ON LOAD
window.addEventListener("load", () => {
  const workData = [
    {
      id: "1",
      image: "Images/VasilSarevski.jpg",
      name: "Vasko Sharevski",
      job: "Professor at Mechanical Faculty",
      subject:
        "Energy efficient facilities and systems for heating, ventilation and air conditioning",
    },
    {
      id: "2",
      image: "Images/zoran_randjelovic.jpeg",
      name: "Zoran Randjelovic",
      job: "Mechanical Engineer at HCE",
      subject: "Daikin VRV solution and selection presentation",
    },
    {
      id: "3",
      image: "Images/ljubomir_ilkov.jpeg",
      name: "Ljubomir Ilkov",
      job: "CEO of ICS Group Macedonia",
      subject: "Managing and growing heating and cooling busines",
    },
    {
      id: "4",
      image: "Images/besni_ademi-eco.jpeg",
      name: "Besnik Ademi",
      job: "CEO of Eco Vent",
      subject: "Managing and growing heating and cooling busines",
    },
  ];
  // function to load portfolio sections dynamically when page loads
  function loadResume(callBack = () => null) {
    const workSectionElemnt = document.querySelector("#resume");
    workSectionElemnt.innerHTML = workCard(workData);
    return callBack();
  }

  loadResume(() => {
    const resumeButton = document.querySelectorAll(".resumeButton");
    Array.from(resumeButton).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = element.getAttribute("data-id");
        const filter = workData.filter((data) => data.id === id);

        // show modal
        showModal(filter[0], closeModal);
      });
    });
  });
});
