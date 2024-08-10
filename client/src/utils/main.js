// eventListeners.js

export function setupEventListeners() {
  const btnSearch = document.querySelector(".header__bottom-search button");
  btnSearch.addEventListener("mouseover", function () {
    btnSearch.style.backgroundColor = "#a07a61";
  });
  btnSearch.addEventListener("mouseout", function () {
    btnSearch.style.backgroundColor = "#C89979";
  });

  const headerBottomA = document.querySelectorAll(".header__bottom-right a");
  headerBottomA.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.color = "#a07a61";
    });
    item.addEventListener("mouseout", function () {
      item.style.color = "#fff";
    });
  });

  const headerMenu = document.querySelectorAll(".header__menu a");
  headerMenu.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.color = "#a07a61";
      item.style.borderBottom = "2px solid #a07a61";
    });
    item.addEventListener("mouseout", function () {
      item.style.color = "#fff";
      item.style.border = "none";
    });
  });

  const registerBtn = document.querySelector(".register-search button");
  registerBtn.addEventListener("mouseover", function () {
    registerBtn.style.backgroundColor = "#a07a61";
  });
  registerBtn.addEventListener("mouseout", function () {
    registerBtn.style.backgroundColor = "#C89979";
  });

  const newspaperImg = document.querySelectorAll(".newspaper-box img");
  newspaperImg.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.transform = "scale(1.2)";
    });
    item.addEventListener("mouseout", function () {
      item.style.transform = "scale(1)";
    });
  });

  const newspaperH = document.querySelectorAll(".newspaper-box h3");
  newspaperH.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.color = "#C89979";
    });
    item.addEventListener("mouseout", function () {
      item.style.color = "#333";
    });
  });

  // Add more event listeners as needed...

  return () => {
    // Cleanup event listeners
    btnSearch.removeEventListener("mouseover", function () {
      btnSearch.style.backgroundColor = "#a07a61";
    });
    btnSearch.removeEventListener("mouseout", function () {
      btnSearch.style.backgroundColor = "#C89979";
    });

    headerBottomA.forEach((item) => {
      item.removeEventListener("mouseover", function () {
        item.style.color = "#a07a61";
      });
      item.removeEventListener("mouseout", function () {
        item.style.color = "#fff";
      });
    });

    headerMenu.forEach((item) => {
      item.removeEventListener("mouseover", function () {
        item.style.color = "#a07a61";
        item.style.borderBottom = "2px solid #a07a61";
      });
      item.removeEventListener("mouseout", function () {
        item.style.color = "#fff";
        item.style.border = "none";
      });
    });

    registerBtn.removeEventListener("mouseover", function () {
      registerBtn.style.backgroundColor = "#a07a61";
    });
    registerBtn.removeEventListener("mouseout", function () {
      registerBtn.style.backgroundColor = "#C89979";
    });

    newspaperImg.forEach((item) => {
      item.removeEventListener("mouseover", function () {
        item.style.transform = "scale(1.2)";
      });
      item.removeEventListener("mouseout", function () {
        item.style.transform = "scale(1)";
      });
    });

    newspaperH.forEach((item) => {
      item.removeEventListener("mouseover", function () {
        item.style.color = "#C89979";
      });
      item.removeEventListener("mouseout", function () {
        item.style.color = "#333";
      });
    });
  };
}
