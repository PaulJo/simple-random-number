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
		
		$("#showResult").show();
		$("#showResult").text('');
		$("#showResult").text(resultRandNum);
	});
	
})