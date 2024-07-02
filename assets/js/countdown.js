simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 7, // required
  day: 7, // required
  hours: 19, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
  enableUtc: false,
});
