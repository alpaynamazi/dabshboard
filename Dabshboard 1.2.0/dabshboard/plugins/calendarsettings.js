new Calendar({
  id: "#color-calendar",
  calendarSize: "large",
  eventsData: [
    {
      start: "2021-04-15T06:00:00",
      end: "2021-04-15T20:30:00",
      name: "Event 1",
      url: "https://www.cssscript.com",
    },
    {
      start: "2021-04-16T06:00:00",
      end: "2021-04-16T20:30:00",
      name: "Event 2",
      url: "https://www.cssscript.com",
    },
    {
      start: "2021-04-16T06:00:00",
      end: "2021-04-17T20:30:00",
      name: "Event 3",
      url: "https://www.cssscript.com",
    },
  ],
  theme: "glass",
  primaryColor: "var(--asphalt)",
  headerBackgroundColor: "var(--asphalt)",
  weekdayType: "long-lower",
});
