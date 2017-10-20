function toastBig() {
  toastMe(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at gravida dolor. Maecenas et ipsum vitae massa dignissim eleifend eget ut leo.",
    6000,
    "Top"
  );
}

function toastCenter() {
  var spin = '<i class="fa fa-spinner fa-pulse" aria-hidden="true" style="font-size: 30px;margin-bottom: 10px;"></i>';
  toastMe(spin + "<br> Loading...", 6000, "Center");
}

function toastBot() {
  toastMe("Toast me at the bottom!", 6000, "Bot");
}
