
enchant();

/* to fix iPhone/iPad "Touch to Start" freeze issue */
enchant.ENV.SOUND_ENABLED_ON_MOBILE_SAFARI = false;

window.onload = function(){

    var game = new Core(320, 320);

    game.fps = 30;

	function* fibonacci() {
    	let [prev, curr] = [0, 1];
    	for (;;) {
       		[prev, curr] = [curr, prev + curr];
        	yield curr;
    	}
	}

	game.onload = function(){

		/* let test */
		var aaa = 11;
		console.log(aaa);
		let (aaa = 22)
		{
			console.log(aaa);
		}
		console.log(aaa);

		/* generator test */ 
		for (n of fibonacci()) {
			if (n > 1000) break;
				console.log(n);
		}
	}

    game.start();
};

