const seasons = ["spring", "summer", "fall", "winter"];

// Hide cards for each unchecked filter
function cardHide(filter) {
  if ($("input[name=" + filter + "]").prop("checked") == false) {
    $("." + filter).hide()
  }
};

// Show cards for each checked filter
function cardShow(filter) {
  if ($("input[name=" + filter + "]").prop("checked") == true) {
    $("." + filter).show()
  }
};

// Fade cards for bundle filter
function filterBundle() {
  if ($("input[name='bundle']").prop("checked") == true) {
    $(".fishes .col").not(".bundle").css("opacity", 0.25);
  }
  if ($("input[name='bundle']").prop("checked") == false) {
    $(".fishes .col").not(".bundle").css("opacity", 1);
  }
};

// Update cards based on filter
function updateFish() {
  seasons.forEach(filter => cardHide(filter));
  seasons.forEach(filter => cardShow(filter));
}

// Update cards after seasonal checkbox toggle
$('input:checkbox[name="spring"], [name="summer"], [name="fall"], [name="winter"]').change(
  function() {
    updateFish();
  }
);

// Update cards after bundle checkbox toggle
$('input:checkbox[name="bundle"]').change(
  function() {
    filterBundle();
  }
);
