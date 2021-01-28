console.log('i haz js');

$(document).ready(onReady);

function onReady() {
  console.log('lets do this');

  const h2 = $('h2');

  $('h2').addClass('froggy');

  $('#submitButton').on('click', addHarmonica);
  // to call actions on dynamically generated elements
  $(document).on('click', '.deleteBtn', deleteButton);
}

function addHarmonica() {
  console.log('Click!');
  let brand = $('#brand').val();
  $('#harmonicas').append(
    `<li>Brand is: ${brand} <button class="deleteBtn">Delete</button></li>`
  );
}

function deleteButton() {
  console.log('bye bye');
}
