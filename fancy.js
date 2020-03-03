//Run the title screen typewriter effect
const titleText = [
  " hi",
  " my name is Laura ~",
  " i'm a software & ui engineer!",
  " scroll down :)"
];

setTimeout(() => {
  typeWriter("line-1", titleText[0]);
}, 1300);
setTimeout(() => {
  typeWriter("line-2", titleText[1]);
}, 2500);
setTimeout(() => {
  typeWriter("line-3", titleText[2]);
}, 4800);
setTimeout(() => {
  typeWriter("line-4", titleText[3]);
}, 9300);

function typeWriter(id, text) {
  const line = $(`#${id}`);
  if (text.length) {
    line.text(line.text() + text[0]);
    setTimeout(
      () => typeWriter(id, text.substring(1)),
      id === "line-1" ? 175 : 70
    );
  } else {
    if (parseInt(id.slice(-1)) !== titleText.length) {
      line.removeClass("cursor");
      $(`#line-${parseInt(id.slice(-1)) + 1}-ds`).removeClass("hidden");
      $(`#line-${parseInt(id.slice(-1)) + 1}`).addClass("cursor");
    }
  }
}

// plenty o' event listeners for the scroll behavior
//  on scroll down, things are supposed to switch in line
let lastScrollTop = 0;
const sectionOrder = ["title", "about"];

const fadeUp = jqObj => {
  jqObj.addClass("container--fade-up");
}


const switchSection = (event, current) => {
  const currentIdx = sectionOrder.indexOf(current);
  const currentSect = $(`#${current}`);
  let destinationIdx;
  let nextSect;

  if (event.deltaY < 0) {
    // currently scrolling up
    destinationIdx = currentIdx - 1;
    if (destinationIdx > -1) {
      nextSect = $(`#${sectionOrder[destinationIdx]}`);
      currentSect.children("div").addClass("pushed-down fade-out");
      setTimeout(() => {
        currentSect.children("div").removeClass("pushed-down fade-out");
        currentSect.addClass("removed")
        nextSect.removeClass("removed");
      }, 300);
    } 
  } else if (event.deltaY > 0) {
    // currently scrolling down
    destinationIdx = currentIdx + 1;
    if (destinationIdx < sectionOrder.length) {
      nextSect = $(`#${sectionOrder[destinationIdx]}`);
      currentSect.children("div").addClass("pushed-up fade-out");
      setTimeout(() => {
        currentSect.children("div").removeClass("pushed-up fade-out");
        currentSect.addClass("removed")
        nextSect.removeClass("removed");
      }, 300);
    }
  }

};
