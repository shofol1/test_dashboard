//vue js for dynamic data
const { createApp } = Vue;
createApp({
  data() {
    return {
      makeActive: false,
      user: {
        name: "John Deo",
      },
      totalInfos: [
        {
          title: "Total revenue",
          total: 5468.37,
          iconClass: "logo-euro",
        },
        {
          title: "Total user",
          total: 5636,
          iconClass: "people-outline",
        },
        {
          title: "Active user",
          total: 1736,
          iconClass: "person-add-outline",
        },
        {
          title: "In room",
          total: 720,
          iconClass: "videocam-outline",
        },
      ],
      userActivity: {
        total: 1736,
        iconClass: "fa-solid fa-circle-up",
        percentage: 0.8,
      },
      topDiamonds: [
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          diamond: 5000,
        },
        {
          img: "./assets/user2.jpg",
          name: "Benny Chager",
          diamond: 4000,
        },
        {
          img: "./assets/user3.jpg",
          name: "Benny Chager",
          diamond: 3500,
        },
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          diamond: 6000,
        },
      ],
      mostActive: [
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          active: 18,
        },
        {
          img: "./assets/user2.jpg",
          name: "Benny Chager",
          active: 15,
        },
        {
          img: "./assets/user3.jpg",
          name: "Benny Chager",
          active: 12,
        },
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          active: 6,
        },
      ],
      topLevels: [
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          level: 22,
        },
        {
          img: "./assets/user2.jpg",
          name: "Benny Chager",
          level: 21,
        },
        {
          img: "./assets/user3.jpg",
          name: "Benny Chager",
          level: 22,
        },
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          level: 24,
        },
      ],
      topBeans: [
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          bean: 2200,
        },
        {
          img: "./assets/user2.jpg",
          name: "Benny Chager",
          bean: 2100,
        },
        {
          img: "./assets/user3.jpg",
          name: "Benny Chager",
          bean: 2200,
        },
        {
          img: "./assets/user.jpg",
          name: "Benny Chager",
          bean: 2400,
        },
      ],
      chartData: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
    };
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
      // some code to filter users
    },
  },
}).mount("#app");

//chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        data: [0, 1500, 1700, 500, 600, 1500],
        label: "active",
      },
      {
        data: [0, 1500, 1700, 500, 600, 1500],
        label: "Revenue",
      },
      {
        data: [0, 1500, 1700, 500, 600, 1500],
        label: "Room",
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  },
});
// labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],

// datasets: [
//     {
//       data: [0, 1500, 1700, 500, 600, 1500],
//       label: "active",
//     },
//     {
//       data: [0, 1500, 1700, 500, 600, 1500],
//       label: "Revenue",
//     },
//     {
//       data: [0, 1500, 1700, 500, 600, 1500],
//       label: "Room",
//     },
//   ],
