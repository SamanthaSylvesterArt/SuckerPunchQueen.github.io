const getSpeed = () => {
    return ((parseInt(document.querySelector('input[name="speed-option"]:checked').value)) * 10) + 20;
  };
  
  const animate = (e) => {
    // return if already animating
    if (e.target.getAttribute("data-filling") === "true") return;
    e.target.setAttribute("data-filling", "true");
    const fillmode = "both";
  
    const text = e.target.getAttribute("data-text");
    const len = text.length;
    const randomArr = Array.from({ length: len }, (_, i) =>
      text[i] === " " ? "_" : ['X', '$', 'Y', '#', '?', '*', '0', '1', '+'][Math.floor(Math.random() * 9)]
    );
  
    if (fillmode === "backwards") {
      for (let i = len - 1; i >= 0; i--) {
        if (i === 0) e.target.setAttribute("data-filling", "false");
        setTimeout(() => {
          randomArr.splice(i, 1, text[i]);
          e.target.textContent = randomArr.join("");
        }, (len - i) * getSpeed());
      }
    } else {
      const isEven = len % 2 === 0;
      for (let i = 0; i < len; i++) {
        setTimeout(() => {
          if (i === len - 1) e.target.setAttribute("data-filling", "false");
          if (fillmode === "forwards" || (fillmode === "both" && i % 2 === 0)) {
            randomArr.splice(i, 1, text[i]);
          } else {
            // runs only if fillmode is "both" and i is odd;
            randomArr.splice(
              isEven ? len - i : len - i - 1,
              1,
              isEven ? text[len - i] : text[len - i - 1]
            );
          }
          e.target.textContent = randomArr.join("");
        }, (i + 1) * getSpeed());
      }
    }
  };
  
  const setGlitch = (elements, onInit = true) => {
    elements.forEach((el, idx) => {
      el.setAttribute("data-text", el.textContent);
      el.setAttribute("data-filling", "false");
      el.getAttribute("data-event-type") === "click"
        ? el.onclick = animate
        : el.onmouseover = animate;
  
      // animate on window load
      if (onInit) {
        setTimeout(() => {
          animate({ target: el });
        }, idx * 80);
      }
    });
  };
  
  const setLabelGlitch = (elements, label) => {
    const handler = (e) => {
      animate({
        target: !label ? e.target.previousElementSibling : label
      });
    };
    elements.forEach(el => el.oninput = handler);
  };
  
  const init = () => {
    setGlitch(document.querySelectorAll(".example"));
    setGlitch(document.querySelectorAll("h2"));
    setGlitch(document.querySelectorAll("label"));
  
    // glitch radio label on input change
    // pass null to indicate that previousSibling should be used to target label
    // or pass specific element
    setLabelGlitch(
      document.querySelectorAll('input[name="fill-option"]'),
      null
    );
    setLabelGlitch(
      document.querySelectorAll('input[name="speed-option"]'),
      document.querySelector(".title-speed")
    );
  };
  
  init();