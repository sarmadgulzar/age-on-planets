const app = Vue.createApp({
  data() {
    return {
      date: new Date().toLocaleDateString("en-ZA"),
      planets: [
        { name: "Mercury", orbital_period: 87.9691, age: 0 },
        { name: "Venus", orbital_period: 224.7, age: 0 },
        { name: "Earth", orbital_period: 365.25636, age: 0 },
        { name: "Mars", orbital_period: 687, age: 0 },
        { name: "Jupiter", orbital_period: 4331, age: 0 },
        { name: "Saturn", orbital_period: 10747, age: 0 },
        { name: "Uranus", orbital_period: 30589, age: 0 },
        { name: "Neptune", orbital_period: 59800, age: 0 },
      ],
    }
  },
  watch: {
    date(newDate, oldDate) {
      if (newDate === null) {
        this.date = new Date(oldDate).toLocaleDateString("en-ZA")
      }
      this.planets.forEach((element) => {
        element.age = (this.diff / element.orbital_period).toFixed(2)
      })
    },
  },
  methods: {
    pastDates(date) {
      return date <= new Date().toLocaleDateString("en-ZA")
    },
  },
  computed: {
    diff() {
      return moment(
        new Date().toLocaleDateString("en-ZA").replaceAll("/", "-")
      ).diff(moment(this.date.replaceAll("/", "-")), "days")
    },
  },
})

app.use(Quasar)
app.mount("#q-app")
