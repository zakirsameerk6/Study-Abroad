function toggleNavbar() {
    var navLinks = document.getElementById('nav-links');
    var menuIcon = document.getElementById('menu-icon');
    
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
    
    if (menuIcon.classList.contains('active')) {
        menuIcon.innerHTML = '<i class="bx bx-x"></i>';
    } else {
        menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
    }
}


//home section---------------------------------------------
function toggleAbout() {
    var aboutSection = document.getElementById("know_more_section");
    var button = document.querySelector('.btn');
  
    if (know_more_section.style.display === "none") {
      // If the "About" section is hidden, show it
      know_more_section.style.display = "block";
      button.textContent = "Learn Less"; // Change button text to "Learn Less"
      button.style.position = "absolute";
      button.style.top = aboutSection.offsetTop + aboutSection.offsetHeight + 10 + "px"; // Add 20px margin
      button.style.left = "50%";
      button.style.transform = "translateX(-50%)";
    } else {
      // If the "About" section is visible, hide it
      know_more_section.style.display = "none";
      button.textContent = "Learn More"; // Change button text back to "Learn More"
      button.style.position = "static"; // Reset button position
      button.style.left = "auto"; // Reset left position
      button.style.transform = "none"; // Reset transform property
    }
}

//--------------TOP-UNIVERSITY--------------------------------------------------------
let moreUniversitiesLoaded = false;

function toggleViewMore() {
  const viewMoreBtn = document.getElementById('view-more-btn');
  const universitiesRow = document.getElementById('universities-row');

  if (!moreUniversitiesLoaded) {
    const moreUniversities = [
      {
        img: 'images/universities/10004.jpg',
        name: 'Shaheed Monsur Ali Medical College,Dhaka',
        description: 'TOTAL FEE (Rs.) 3,520,000.00 <br>TOTAL FEE ($) 44,000.00'
      },
      {
        img: 'images/universities/10005.jpg',
        name: 'International Medical College & Hospital,Dhaka',
        description: 'TOTAL FEE (Rs.) 3,680,000.00 <br>TOTAL FEE ($)46,000.00'
      },
      {
        img: 'images/universities/10006.png',
        name: 'Z H Sikder Women Medical College,Dhaka',
        description: 'TOTAL FEE (Rs.) ₹3,360,000.00 <br>TOTAL FEE ($)42,000.00'
      }
    ];

    moreUniversities.forEach(university => {
      const universityCard = document.createElement('div');
      universityCard.className = 'university-card';
      universityCard.innerHTML = `
        <img src="${university.img}" alt="${university.name}">
        <h3>${university.name}</h3>
        <p>${university.description}</p>
        <div class="more-content">
          <p>Additional content for ${university.name}.</p>
        </div>
        <a href="javascript:void(0);" class="learn-more-btn" onclick="toggleLearnMore(this)">Learn More</a>
      `;
      universitiesRow.appendChild(universityCard);
    });

    viewMoreBtn.textContent = "View Less";
    moreUniversitiesLoaded = true;
  } else {
    const universityCards = document.querySelectorAll('.university-card');
    universityCards.forEach((card, index) => {
      if (index >= 3) {
        card.remove();
      }
    });

    viewMoreBtn.textContent = "View More";
    moreUniversitiesLoaded = false;
  }
}

function toggleLearnMore(button) {
  const moreContent = button.previousElementSibling;
  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block";
    button.textContent = "Show Less";
  } else {
    moreContent.style.display = "none";
    button.textContent = "Learn More";
  }
}
//////-///////////----contect us--////////////////////////////////////////------------------------
