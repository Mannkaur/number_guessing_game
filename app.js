function gameon() {
	
	let random1 = Math.floor(Math.random() * 11);
	let random2 = Math.floor(Math.random() * 11);
	let random3 = Math.floor(Math.random() * 11);

	let oper = ['+', '-', '*', '/'];
	
	let oper_index1 = Math.floor(Math.random() * 4);
	let oper1 = oper[oper_index1];

	let oper_index2 = Math.floor(Math.random() * 4);
	let oper2 = oper[oper_index2];

	let ques = random1 + oper1 + random2 + oper2 + random3;
	let result = eval(random1 + oper1 + random2 + oper2 + random3).toFixed(0);

	let canvas1 = document.getElementById("canvas1");
	let canvasOb1 = canvas1.getContext("2d");
	canvasOb1.fillStyle = "yellow";
	canvasOb1.fillRect(0,0,60,60);
	canvasOb1.font="30px Comic Sans MS";
	canvasOb1.fillStyle = "blue";
	canvasOb1.textAlign = "center";
	canvasOb1.fillText(random1, canvas1.width/2, canvas1.height/1.5);

	let canvas2 = document.getElementById("canvas2");
	let canvasOb2 = canvas2.getContext("2d");	
	canvasOb2.fillStyle = "orange";
	canvasOb2.fillRect(0,0,60,60);
	canvasOb2.font="30px Comic Sans MS";
	canvasOb2.fillStyle = "blue";
	canvasOb2.textAlign = "center";
	canvasOb2.fillText(oper1, canvas2.width/2, canvas2.height/1.5);

	let canvas3 = document.getElementById("canvas3");
	let canvasOb3 = canvas3.getContext("2d");
	canvasOb3.fillStyle = "yellow";
	canvasOb3.fillRect(0,0,60,60);
	canvasOb3.font="30px Comic Sans MS";
	canvasOb3.fillStyle = "blue";
	canvasOb3.textAlign = "center";
	canvasOb3.fillText(random2, canvas3.width/2, canvas3.height/1.5);

	let canvas4 = document.getElementById("canvas4");
	let canvasOb4 = canvas4.getContext("2d");	
	canvasOb4.fillStyle = "orange";
	canvasOb4.fillRect(0,0,60,60);
	canvasOb4.font="30px Comic Sans MS";
	canvasOb4.fillStyle = "blue";
	canvasOb4.textAlign = "center";
	canvasOb4.fillText(oper2, canvas4.width/2, canvas4.height/1.5);

	let canvas5 = document.getElementById("canvas5");
	let canvasOb5 = canvas5.getContext("2d");
	canvasOb5.fillStyle = "yellow";
	canvasOb5.fillRect(0,0,60,60);
	canvasOb5.font="30px Comic Sans MS";
	canvasOb5.fillStyle = "blue";
	canvasOb5.textAlign = "center";
	canvasOb5.fillText(random3, canvas5.width/2, canvas5.height/1.5);

	let canvas6 = document.getElementById("canvas6");
	let canvasOb6 = canvas6.getContext("2d");	
	canvasOb6.fillStyle = "orange";
	canvasOb6.fillRect(0,0,60,60);
	canvasOb6.font="30px Comic Sans MS";
	canvasOb6.fillStyle = "blue";
	canvasOb6.textAlign = "center";
	canvasOb6.fillText("=", canvas6.width/2, canvas6.height/1.5);

	let canvas7 = document.getElementById("canvas7");
	let canvasOb7 = canvas7.getContext("2d");	
	canvasOb7.fillStyle = "cyan";
	canvasOb7.fillRect(0,0,120,60);
	canvasOb7.font="30px Comic Sans MS";
	canvasOb7.textAlign = "center";

	let canvas8 = document.getElementById("canvas8");
	let canvasOb8 = canvas8.getContext("2d");	
	canvasOb8.fillStyle = "#b3b5b7";
	canvasOb8.fillRect(0,0,120,60);
	canvasOb8.font="30px Comic Sans MS";
	canvasOb8.fillStyle = "blue";
	canvasOb8.textAlign = "center";

	let canvas9 = document.getElementById("canvas9");
	let canvasOb9 = canvas9.getContext("2d");	
	canvasOb9.fillStyle = "#b3b5b7";
	canvasOb9.fillRect(0,0,120,60);
	canvasOb9.font="30px Comic Sans MS";
	canvasOb9.fillStyle = "blue";
	canvasOb9.textAlign = "center";
	
	let canvas10 = document.getElementById("canvas10");
	let canvasOb10 = canvas10.getContext("2d");	
	canvasOb10.fillStyle = "#b3b5b7";
	canvasOb10.fillRect(0,0,120,60);
	canvasOb10.font="30px Comic Sans MS";
	canvasOb10.fillStyle = "blue";
	canvasOb10.textAlign = "center";

	let canvas11 = document.getElementById("canvas11");
	let canvasOb11 = canvas11.getContext("2d");
	canvasOb11.fillStyle = "#b3b5b7";
	canvasOb11.fillRect(0,0,120,60);
	canvasOb11.font="30px Comic Sans MS";
	canvasOb11.fillStyle = "blue";
	canvasOb11.textAlign = "center";

	
	let canvas_index = Math.floor(Math.random() * 4) + 8;
let random_result1 = Math.floor(Math.random() * 100);
	let random_result2 = Math.floor(Math.random() * 100);
	let random_result3 = Math.floor(Math.random() * 100);
	
	switch(canvas_index)
	{
		case 8: canvasOb8.fillText(document.getElementById("tx_8").value = result, canvas8.width/2, canvas8.height/1.5);
			canvasOb9.fillText(document.getElementById("tx_9").value = random_result1, canvas8.width/2, canvas8.height/1.5);
			canvasOb10.fillText(document.getElementById("tx_10").value = random_result2, canvas8.width/2, canvas8.height/1.5);
			canvasOb11.fillText(document.getElementById("tx_11").value = random_result3, canvas8.width/2, canvas8.height/1.5);
		break;

		case 9: canvasOb8.fillText(document.getElementById("tx_8").value = random_result1, canvas8.width/2, canvas8.height/1.5);
			canvasOb9.fillText(document.getElementById("tx_9").value = result, canvas9.width/2, canvas9.height/1.5);			
			canvasOb10.fillText(document.getElementById("tx_10").value = random_result2, canvas8.width/2, canvas8.height/1.5);
			canvasOb11.fillText(document.getElementById("tx_11").value = random_result3, canvas8.width/2, canvas8.height/1.5);
		break;

		case 10: canvasOb8.fillText(document.getElementById("tx_8").value = random_result1, canvas8.width/2, canvas8.height/1.5);
			 canvasOb9.fillText(document.getElementById("tx_9").value = random_result2, canvas9.width/2, canvas9.height/1.5);	
			 canvasOb10.fillText(document.getElementById("tx_10").value = result, canvas10.width/2, canvas10.height/1.5);		
			 canvasOb11.fillText(document.getElementById("tx_11").value = random_result3, canvas8.width/2, canvas8.height/1.5);
		break;
		case 11: canvasOb8.fillText(document.getElementById("tx_8").value = random_result1, canvas8.width/2, canvas8.height/1.5);
			 canvasOb9.fillText(document.getElementById("tx_9").value = random_result2, canvas9.width/2, canvas9.height/1.5);
			 canvasOb10.fillText(document.getElementById("tx_10").value = random_result3, canvas8.width/2, canvas8.height/1.5);	
			 canvasOb11.fillText(document.getElementById("tx_11").value = result, canvas11.width/2, canvas11.height/1.5);
		break;
	}


	let selected = "";
	canvas8.addEventListener('click', function() { 
			canvasOb7.clearRect(0, 0, canvas7.width, canvas7.height); 
			selected = document.getElementById("tx_8").value;
			if(selected == result) {
				canvasOb7.fillStyle = "#7CFC00";
				canvasOb7.fillRect(0,0,120,60);
			}
			else {
				canvasOb7.fillStyle = "red";
				canvasOb7.fillRect(0,0,120,60);
				alert("WRONG !!");
			}
			canvasOb7.fillStyle = "blue";
      			canvasOb7.fillText(document.getElementById("tx_7").value = selected, canvas7.width/2, canvas7.height/1.5);
	}, false);
	canvas9.addEventListener('click', function() {
			canvasOb7.clearRect(0, 0, canvas7.width, canvas7.height); 
			selected = document.getElementById("tx_9").value;
			if(selected == result) {
				canvasOb7.fillStyle = "#7CFC00";
				canvasOb7.fillRect(0,0,120,60);
			}
			else {
				canvasOb7.fillStyle = "red";
				canvasOb7.fillRect(0,0,120,60);
				alert("WRONG !!");
			}
			canvasOb7.fillStyle = "blue";
      			canvasOb7.fillText(document.getElementById("tx_7").value = selected, canvas7.width/2, canvas7.height/1.5);
	}, false);
	canvas10.addEventListener('click', function() { 
			canvasOb7.clearRect(0, 0, canvas7.width, canvas7.height); 
			selected = document.getElementById("tx_10").value;
			if(selected == result) {
				canvasOb7.fillStyle = "#7CFC00";
				canvasOb7.fillRect(0,0,120,60);
			}
			else{
				canvasOb7.fillStyle = "red";
				canvasOb7.fillRect(0,0,120,60);
				alert("WRONG !!");
			}
			canvasOb7.fillStyle = "blue";
      			canvasOb7.fillText(document.getElementById("tx_7").value = selected, canvas7.width/2, canvas7.height/1.5);
	}, false);
	canvas11.addEventListener('click', function() { 
			canvasOb7.clearRect(0, 0, canvas7.width, canvas7.height); 
			selected = document.getElementById("tx_11").value;
			if(selected == result) {
				canvasOb7.fillStyle = "#7CFC00";
				canvasOb7.fillRect(0,0,120,60);
			}
			else {
				canvasOb7.fillStyle = "red";
				canvasOb7.fillRect(0,0,120,60);
				alert("WRONG !!");
			}
			canvasOb7.fillStyle = "blue";
      			canvasOb7.fillText(document.getElementById("tx_7").value = selected, canvas7.width/2, canvas7.height/1.5);
	}, false);
	
}	

function next() {

	gameon();
}