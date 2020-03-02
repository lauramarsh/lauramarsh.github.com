//Run the title screen typewriter effect
const titleText = [
  " hi",
  " my name is Laura ~",
  " i'm a software & ui engineer!",
  " scroll down :)"
];

setTimeout(() => {
  typeWriter("line-1", titleText[0]);
}, 1500);
setTimeout(() => {
  typeWriter("line-2", titleText[1]);
}, 2700);
setTimeout(() => {
  typeWriter("line-3", titleText[2]);
}, 5000);
setTimeout(() => {
  typeWriter("line-4", titleText[3]);
}, 9500);

function typeWriter(id, text) {
  const line = $(`#${id}`);
  if (text.length) {
    line.text(line.text() + text[0]);
    setTimeout(
      () => typeWriter(id, text.substring(1)),
      id === "line-1" ? 200 : 80
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

$(document).ready(function() {
  $(document).scroll(function() {
    console.log("insideee");
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      console.log("DOWNNNNN");
    } else {
      // upscroll code
      console.log("UPPPPPPP");
    }
    lastScrollTop = st;
  });
});
