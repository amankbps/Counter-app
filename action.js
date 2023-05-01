
      let decrement = document.querySelector(".one");
      let increment = document.querySelector(".two");
      let value = document.querySelector(".value");
      let reset = document.querySelector(".three");
      let v = 0;
      value.textContent = v;

      decrement.addEventListener("click", () => {
        v--;
        value.textContent = v;
      });
      increment.addEventListener("click", () => {
        v++;
        value.textContent = v;
      });
      reset.addEventListener("click", () => {
        v = 0;
        value.textContent = v;
      });
    