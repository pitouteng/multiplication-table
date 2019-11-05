
document.getElementById('submit').onclick = submit_clicked;

function submit_clicked() {
  var body = document.getElementsByTagName('body')[0];

  // remove old table if there is one
  old_table = document.getElementById('generatedTable');
  if(old_table){
    old_table.parentNode.removeChild(old_table);
  }


  var table = document.createElement('table');
  table.setAttribute('id', 'generatedTable');

  // get value from form
  var first_box_plier = Number(document.getElementsByName('first_box_multiplier')[0].value);
  var sec_box_plier = Number(document.getElementsByName('sec_box_multiplier')[0].value);
  var first_box_cand = Number(document.getElementsByName('first_box_multiplicand')[0].value);
  var sec_box_cand = Number(document.getElementsByName('sec_box_multiplicand')[0].value);

  // allow reverse range when entering number
  init_plier = Math.min(first_box_plier, sec_box_plier);
  end_plier = Math.max(first_box_plier, sec_box_plier);
  init_cand = Math.min(first_box_cand, sec_box_cand);
  end_cand = Math.max(first_box_cand, sec_box_cand);


  // create first row table header
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.appendChild(document.createTextNode(''));
  tr.appendChild(th);
  for (var i = init_plier; i <= end_plier; i++) {
    tr.appendChild(create_table_box(i, 'th'));
  }
  table.appendChild(tr);


  for (var j = init_cand; j <= end_cand; j++) {
    // create column table header
    var tr = document.createElement('tr');
    tr.appendChild(create_table_box(j, 'th'));
    for (var i = init_plier; i <= end_plier; i++) {
      // fill in products
      var value = j * i;
      tr.appendChild(create_table_box(value, 'td'));
    }

    // add class to achieve check pattern with css rule associated to the class
    if (j%2 == 0)
      tr.classList.add('oddRow');
    else
      tr.classList.add('evenRow');

    table.appendChild(tr);
  }

  body.appendChild(table);

}

// function for creating each box
function create_table_box(text, type) {
  var v = document.createElement(type);
  v.appendChild(document.createTextNode(text))
  v.style.padding = "10px";
  return v
}
