<!DOCTYPE html>
<head>
    <title>Lesson</title>   
</head>
<body>
<header></header>
<footer></footer>
    <script>
		alert('Please enter your data');
		let userName = prompt("Enter your name", 'Name');
		alert(`Your name is: ${userName}`);
		let userSurname = prompt("Enter your surname", 'Surname');
		alert(`Your full name is: ${userName} ${userSurname}`);
		let age = prompt("How old are you?", 'Age');
		alert(`Your full name is: ${userName} ${userSurname} , your age is: ${age}`);
		let access = confirm('Are you admin?');
		alert(`Your full name is: ${userName} ${userSurname} , your age is: ${age} , admin status: ${access}`);
    </script>
</body>
</html>