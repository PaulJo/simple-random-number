$(function(){

	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
	}

	$("#btnRandNum").on("click", function(){
		
		let startNum = $("#startNum").val();
		let endNum = $("#endNum").val();	
		let resultRandNum = getRandomIntInclusive(startNum, endNum);
		let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

		console.info(randomColor);
		
		$("#showResult").css("background-color", randomColor);
		$("#showResult").show();
		$("#showResult").text("");
		$("#showResult").text(resultRandNum);
	});
	
})