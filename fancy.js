
//Run the title screen typewriter effect
setTimeout( () => {
  typeWriter("line-1", " hi");
}, 1500);
setTimeout( () => {
  typeWriter("line-2", " my name is Laura :)");
}, 2700);
setTimeout( () => {
  typeWriter("line-3", " i'm a software & ui engineer!");
}, 5000);

function typeWriter(id, text) {
  const line = $(`#${id}`); 
  if (text.length) {
    line.text(line.text() + text[0]);
    setTimeout(() => typeWriter(id, text.substring(1)), id === "line-1" ? 200 : 80);
  } else {
    if (id !== "line-3") {
      line.removeClass("cursor");
      $(`#line-${parseInt(id.slice(-1)) + 1}-ds`).removeClass("hidden");
      $(`#line-${parseInt(id.slice(-1)) + 1}`).addClass("cursor");
    } 
  }
}
