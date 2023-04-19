// Credit: @LukyVj
// https://twitter.com/LukyVj
// https://lucasbonomi.com






if (typeof window.CSS.registerProperty === 'function') {
    console.log('CSS.registerProperty supported 🎉');
    document.body.style.setProperty('--supported', 1);
    document.body.classList.add('registerProperty-supported')
  } else {
    console.log('CSS.registerProperty not supported ❌');
    document.body.style.setProperty('--not-supported', 1);
    document.body.classList.add('registerProperty-not-supported');
  }
  

  document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }