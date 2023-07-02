Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: beepBoop(3)
Output: [0, 1, 2, "Wont' you be my neighbor?"]

Test: "It shoud prioritize Boop over Beep"
Code: beepBoop (4)
Output: [0, Beep!, Boop!, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, Boop!]

Test: "It should prioritize "Won't you be my neigbor?" over "Boop!" and "Beep!"
Code: beepBoop (5)
Output: [ 0,Beep!, Boop!, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "Won't you be my neighbor?" ]