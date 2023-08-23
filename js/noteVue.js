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
    }
  },

  mounted: function() {
    this.modalInit();
  }
}).mount(".note");