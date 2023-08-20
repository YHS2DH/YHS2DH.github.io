const note = Vue.createApp({
  data: function() {
    const data = {
      list: [],
    };

    return data;
  },

  methods: {
    remove: function(id) {

      window.remove(id);
    }
  },

  mounted: function() {
    const element = document.querySelector(".modal");
    const modal = M.Modal.init(element, {});
    modal.open();
  }
}).mount(".note");