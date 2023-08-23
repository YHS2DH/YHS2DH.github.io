const note = Vue.createApp({
  data: function() {
    const data = {
      list: [],
      modal: {},
      targetId: '',
    };

    return data;
  },

  methods: {
    openModal: function(id) {
      this.targetId = id;
      this.modal.open();
    },

    remove: function() {
      window.remove(this.targetId);
    },

    modalInit: function() {
      const element = document.querySelector(".modal");
      this.modal = M.Modal.init(element, {});
    },

    filteredTimestamp: function(timestamp) {
      const date = new Date((timestamp.seconds + 32400) * 1000);
      const dateArray = [
        date.toISOString().split("T").at(0),
        date.toISOString().split("T").at(1).split(".").at(0)
      ];

      return dateArray.join("<br>");
    },

    filteredTimestamp2: function(timestamp) {
      const date = new Date(timestamp.seconds * 1000);
      const now  = new Date();
      const difference = now - date;
      const daysToMilliseconds = 24 * 60 * 60 * 1000;
      const timesToMilliseconds = 60 * 60 * 1000;

      if (difference > daysToMilliseconds) {
        return Math.floor(difference / daysToMilliseconds) + "일 전";
      }
      else if (difference < timesToMilliseconds) {
        return "방금 전";
      }
      else {
        return Math.floor(difference / timesToMilliseconds) + "시간 전";
      }
    }
  },

  mounted: function() {
    this.modalInit();
  }
}).mount(".note");

const certification = Vue.createApp({
  data: function() {
    const data = {
      password: '',
      certificated: false,
    }

    return data;
  },

  methods: {
    login: function() {
      const pass = "MjAyMzA5MTY=";
      this.certificated = btoa(this.password) == pass;
      !this.certificated ? history.back() : '';
    }
  }
}).mount(".certification");