//*****BACK-END*****

function Contact(first, last, street, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
};

//*****FRONT-END*****

$(document).ready(function() {
  $("#form_input").submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("#first_name").val();
    var inputLastName = $("#last_name").val();
    var inputStreet = $("#street").val();
    var inputCity = $("#city").val();
    var inputState = $("#state").val();
    var newContact = new Contact(inputFirstName, inputLastName, inputStreet, inputCity, inputState);

    $("#contact_list").show().append("<li>" + "<span class=\"contact\">" + newContact.firstName + " " + newContact.lastName + "</li>");

    $(".contact").last().click(function() {
      $(".first_name").text(newContact.firstName);
      $(".last_name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".city").text(newContact.city);
      $(".state").text(newContact.state);
    });
  });
});
