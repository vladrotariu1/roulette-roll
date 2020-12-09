import $ from "jquery";

class Roll {
  constructor(id) {
    this.id = id;
    this.slots_container = null;
    this.container_width = null;
    this.slot_width = 80;
    this.slots_model = [
      "r",
      "b",
      "r",
      "b",
      "r",
      "b",
      "r",
      "g",
      "b",
      "r",
      "b",
      "r",
      "b",
      "r",
      "b",
    ];
    this.slots_index = 0;
  }

  getContainer = () => {
    this.slots_container = document.getElementById(this.id);
    this.container_width = this.slots_container.offsetWidth;
  };

  number_of_slots = () => {
    return this.container_width / this.slot_width;
  };

  create_slots = () => {
    for (let i = 0; i <= this.number_of_slots() + 2; i++) {
      if (this.slots_model[i % 15] == "g") {
        let slot = document.createElement("div");
        slot.className = "slot green";
        this.slots_container.appendChild(slot);
      } else if (this.slots_model[i % 15] == "b") {
        let slot = document.createElement("div");
        slot.className = "slot black";
        this.slots_container.appendChild(slot);
      } else if (this.slots_model[i % 15] == "r") {
        let slot = document.createElement("div");
        slot.className = "slot red";
        this.slots_container.appendChild(slot);
      }
    }

    let slots = document.getElementsByClassName("slot");

    for (let i = 0; i < slots.length; i++) {
      slots[i].style.left = (i - 1) * this.slot_width + "px";
    }
  };

  get_spin_result = () => {
    let slots = document.getElementsByClassName("slot");
    for (let i = 1; i < slots.length; i++) {
      if (
        slots[i - 1].offsetLeft < this.container_width / 2 &&
        slots[i].offsetLeft >= this.container_width / 2
      ) {
        let class_name = slots[i - 1].className;
        return class_name.split(" ")[1][0];
      }
    }
  };

  roll = (callback) => {
    let velocity = 0;
    let acceleration = 1;
    let friction = 0.999;
    let acceleration_time = Math.floor(Math.random() * 46) + 35;
    let time = 0;

    let position = 0;

    const loop = () => {
      let slots = document.getElementsByClassName("slot");

      if (time < acceleration_time) {
        for (let i = slots.length - 1; i >= 0; i--) {
          if (slots[i].offsetLeft > this.container_width) {
            slots[i].remove();
            this.slots_index = (this.slots_index % 15) + 1;
            let new_slot_element = null;

            if (this.slots_model[15 - this.slots_index] == "g") {
              new_slot_element = document.createElement("div");
              new_slot_element.className = "slot green";
              new_slot_element.style.left =
                slots[0].offsetLeft - this.slot_width + "px";
              $("#" + this.id).prepend(new_slot_element);
            } else if (this.slots_model[15 - this.slots_index] == "b") {
              new_slot_element = document.createElement("div");
              new_slot_element.className = "slot black";
              new_slot_element.style.left =
                slots[0].offsetLeft - this.slot_width + "px";
              $("#" + this.id).prepend(new_slot_element);
            } else if (this.slots_model[15 - this.slots_index] == "r") {
              new_slot_element = document.createElement("div");
              new_slot_element.className = "slot red";
              new_slot_element.style.left =
                slots[0].offsetLeft - this.slot_width + "px";
              $("#" + this.id).prepend(new_slot_element);
            }
          } else {
            slots[i].style.left = velocity + slots[i].offsetLeft + "px";
          }
        }

        velocity += acceleration;
        time++;
      } else {
        for (let i = slots.length - 1; i >= 0; i--) {
          if (slots[i].offsetLeft > this.container_width) {
            slots[i].remove();
            this.slots_index = (this.slots_index % 15) + 1;
            let new_slot_element = null;

            if (this.slots_model[15 - this.slots_index] == "g") {
              new_slot_element = document.createElement("div");
              new_slot_element.className = "slot green";
              new_slot_element.style.left =
                slots[0].offsetLeft - this.slot_width + "px";
              $("#" + this.id).prepend(new_slot_element);
            } else if (this.slots_model[15 - this.slots_index] == "b") {
              new_slot_element = document.createElement("div");
              new_slot_element.className = "slot black";
              new_slot_element.style.left =
                slots[0].offsetLeft - this.slot_width + "px";
              $("#" + this.id).prepend(new_slot_element);
            } else if (this.slots_model[15 - this.slots_index] == "r") {
              new_slot_element = document.createElement("div");
              new_slot_element.className = "slot red";
              new_slot_element.style.left =
                slots[0].offsetLeft - this.slot_width + "px";
              $("#" + this.id).prepend(new_slot_element);
            }
          } else {
            slots[i].style.left = velocity + slots[i].offsetLeft + "px";
          }
        }
        velocity *= friction;
        friction -= 0.0006;
      }
      if (velocity > 0.1) window.requestAnimationFrame(loop);
      else callback();
    };
    window.requestAnimationFrame(loop);
  };
}

export default Roll;
