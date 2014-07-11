$("#ls_form .submit").click(function(){
	submitForm();
});

$("#ls_form .full_name").keypress(function (e) {
  if (e.which == 13) {
    submitForm();
  }
});

function submitForm() {
	var name = $("#ls_form .full_name").val();
	var mes = name+', you are amazing!';
	localStorage.message = mes;
	$("#welcome").append(localStorage.message);
	$("#ls_form").hide();
}

$(document).ready(function() {
	if(localStorage.getItem('message') != null) {
		$("#welcome").append(localStorage.message);
		$("#ls_form").hide();
	}
});

