//zmiana slajdu lewą strzałką
$(".fa-angle-left").click(function() {
		$(".carousel").carousel('next');
});

//zmiana slajdu prawą strzałką
$(".fa-angle-right").click(function() {
		$(".carousel").carousel('prev');
});