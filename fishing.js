let filters = [];

$(":checkbox").each(function(){
  filters.push(this.name);
})

const seasons = ["spring", "summer", "fall", "winter"];
const locations = ["ocean", "river", "mountain-lake", "pond", "desert", "ginger-island", "mines", "secret-woods", "swamp", "lair"];
const weather = ["sun", "rain"];

function cardHide(filter) {
  if ($("input[name=" + filter + "]").prop("checked") == false) {
    $("." + filter).hide();
  }
};

function cardShow(filter) {
  if ($("input[name=" + filter + "]").prop("checked") == true) {
    $("." + filter).show();
  }
};

seasons.forEach(filter => cardHide(filter));
seasons.forEach(filter => cardShow(filter));

locations.forEach(filter => cardHide(filter));
locations.forEach(filter => cardShow(filter));

weather.forEach(filter => cardHide(filter));
weather.forEach(filter => cardShow(filter));
