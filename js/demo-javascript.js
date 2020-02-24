	function ClickDemo(){
		var person = {
	  fullName: function() {
	    return this.firstName + " " + this.lastName;
	  }
	}
	var person1 = {
	  firstName:"John",
	  lastName: "Doe"
	}
	var person2 = {
	  firstName:"Mary",
	  lastName: "Doe"
	}
	var x = person.fullName.call(person1); 
		document.getElementById("demo").innerHTML = x;
	}

	
	function ClickRun(){
		var item = document.getElementById("run-progress");
		var total = 0;
		var id = setInterval(frame,5);
		function frame(){
			if(total==50){
			clearInterval(id);
		}
		else{
			total++;
			item.style.width =total+ "%";
		}
		}
	
	}