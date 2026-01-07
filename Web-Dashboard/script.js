document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const container = document.querySelector(".containers");
  const icon = btn.querySelector("i");
  const moon = document.querySelector(".moon");
  const ctx = document.getElementById("myChart");
  const monthYear = document.querySelector(".month-year");
  const dayContainer = document.getElementById("days");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  //   Btn Navbar
  btn.addEventListener("click", () => {
    container.classList.toggle("collapse");

    if (container.classList.contains("collapse")) {
      icon.classList.add("bx-chevron-right");
      icon.classList.remove("bx-chevron-left");
    } else {
      icon.classList.add("bx-chevron-left");
      icon.classList.remove("bx-chevron-right");
    }
  });

  //   LigthDark
  moon.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  //   Chart Js
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octeber",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "# Total Project",
          data: [12, 19, 13, 15, 12, 13, 12, 19, 13, 15, 12, 13],
          borderWidth: 1,
          backgroundColor: "green",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            color: "green",
          },
          beginAtZero: true,
        },
        y: {
          grid: {
            color: "green",
          },
          beginAtZero: true,
        },
      },
    },
  });

  //   Calendar
  let currenDate = new Date();
  let today = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octeber",
    "November",
    "December",
  ];

  function returnCurrentDate(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${months[month]} ${year}`;

    dayContainer.innerHTML = "";

    //PrevDate
    prevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDay; i > 0; i--) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = prevMonth - i + 1;
      dayDiv.classList.add("fade");
      dayContainer.appendChild(dayDiv);
    }

    // CurrentDate
    for (let i = 1; i <= lastDay; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;
      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayDiv.classList.add("active");
      }
      dayContainer.appendChild(dayDiv);
    }

    // NextDate
    const totalCurrent = firstDay + lastDay;
    const nextDate = 42 - totalCurrent;

    for (let i = 1; i <= nextDate; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;
      dayDiv.classList.add("fade");
      dayContainer.appendChild(dayDiv);
    }
  }
  //   Prev
  prev.addEventListener("click", () => {
    currenDate.setDate(1);
    currenDate.setMonth(currenDate.getMonth() - 1);
    returnCurrentDate(currenDate);
  });
  //   Next
  next.addEventListener("click", () => {
    currenDate.setDate(1);
    currenDate.setMonth(currenDate.getMonth() + 1);
    returnCurrentDate(currenDate);
  });
  returnCurrentDate(currenDate);
});
