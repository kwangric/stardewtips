// let remainingFish = []

const seasons = ["spring", "summer", "fall", "winter"];
const locations = ["ocean", "river", "mountain-lake", "pond", "desert", "ginger-island", "mines", "secret-woods", "swamp", "lair"];
const weather = ["sun", "rain"];

// Hide cards for each unchecked filter
function cardHide(filter) {
  if ($("input[name=" + filter + "]").prop("checked") == false) {
    $("." + filter).hide();
  }
};

// Show cards for each checked filter
function cardShow(filter) {
  if ($("input[name=" + filter + "]").prop("checked") == true) {
    $("." + filter).show();
  }
};

// Update cards based on filter
function updateFish(){
  seasons.forEach(filter => cardHide(filter));
  seasons.forEach(filter => cardShow(filter));
}

// Create list of remaining fish
// function defineRemainingFish() {
//   $(".col").each(function() {
//     if ($(this).css("display") == 'none') {}
//   else {(remainingFish.push(this))}
//   })
//   remainingFish.splice(0, 4);
// }

// defineRemainingFish();
//
// locations.forEach(filter => cardHide(filter));
// locations.forEach(filter => cardShow(filter));

// Update cards after every checkbox toggle
$('input:checkbox').change(
    function(){
        updateFish();
        }
    );
