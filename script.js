$(document).ready(function() {

	//what does this do?
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				case 12:
				return 'Queen';
				case 13:
				return 'King';
				case 14:
				return 'Ace';
			}
		}
		return value.toString();
	};

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//what does this do?
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { 
			i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	};
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	deck = shuffle(deck);
	var cards_player_1 = [];
	var cards_player_2 = [];
	// write a function called deal that will evently divide the deck up between the two players
<<<<<<< HEAD
	var deal = function(array) {
		for(var i = 0; i < 26; i++){
			cards_player_1.push(array.shift()); 
			cards_player_2.push(array.shift());
		}
	}
	deal(deck);
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(card_1, card_2){
		if(card_1.number > card_2.number){
			return "card_1";
		}
		if(card_2.number > card_1.number){
			return "card_2";
		}

		return false;
		
	}
	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	};
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		
<<<<<<< HEAD
		var card_1 = cards_player_1.shift();
		var card_2 = cards_player_2.shift();
		var winner = war(card_1, card_2);
		if(winner === 'card_1') {
			cards_player_1.push(card_1, card_2);
		} else if (winner === 'card_2'){
			cards_player_2.push(card_1, card_2);
		} else {
			cards_player_1.push(card_1);
			cards_player_2.push(card_2);
		}
		advance();
	};
	

	advance();
	
	$(".btn").click(function() {
		play();
	});
});
