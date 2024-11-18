const triviaQuestions = [
    // History
    ["Who was the first President of the United States?", "George Washington"],
    ["In which year did the Titanic sink?", "1912"],
    ["Who discovered America?", "Christopher Columbus"],
    ["What year marked the start of World War I?", "1914"],
    ["Who was known as the 'Iron Lady'?", "Margaret Thatcher"],
    ["Which empire built the Colosseum?", "Roman Empire"],
    ["What year did the Berlin Wall fall?", "1989"],
    ["Who was the last tsar of Russia?", "Nicholas II"],
    ["What year did man first land on the moon?", "1969"],
    ["Which ancient civilization built the pyramids?", "Egyptians"],
  
    // Science
    ["What is the chemical symbol for water?", "H2O"],
    ["Which planet is closest to the sun?", "Mercury"],
    ["What is the powerhouse of the cell?", "Mitochondria"],
    ["Who developed the theory of relativity?", "Albert Einstein"],
    ["What gas do plants absorb from the atmosphere?", "Carbon dioxide"],
    ["What is the main component of the sun?", "Hydrogen"],
    ["Which element has the atomic number 1?", "Hydrogen"],
    ["What is the speed of light?", "299,792,458 m/s"],
    ["Who invented the telephone?", "Alexander Graham Bell"],
    ["What is the smallest particle of an element?", "Atom"],
  
    // Geography
    ["What is the longest river in the world?", "Nile"],
    ["What is the capital of Japan?", "Tokyo"],
    ["Which country has the most natural lakes?", "Canada"],
    ["What is the tallest mountain in the world?", "Mount Everest"],
    ["Which desert is the largest in the world?", "Sahara Desert"],
    ["What is the smallest country in the world?", "Vatican City"],
    ["Which ocean is the largest?", "Pacific Ocean"],
    ["What is the capital of Australia?", "Canberra"],
    ["Which continent is known as the 'Dark Continent'?", "Africa"],
    ["What is the capital city of Norway?", "Oslo"],
  
    // Pop Culture
    ["Who directed the movie 'Inception'?", "Christopher Nolan"],
    ["What is the name of Harry Potter's pet owl?", "Hedwig"],
    ["Who is the lead singer of the band Queen?", "Freddie Mercury"],
    ["Which fictional city is the home of Batman?", "Gotham"],
    ["What year was the first Star Wars movie released?", "1977"],
    ["Who painted 'The Starry Night'?", "Vincent van Gogh"],
    ["What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings'?", "Frodo Baggins"],
    ["Who is the author of 'Game of Thrones'?", "George R. R. Martin"],
    ["Which superhero is known as the 'Man of Steel'?", "Superman"],
    ["What is the highest-grossing film of all time?", "Avatar"],
  
    // Sports
    ["Which country won the FIFA World Cup in 2018?", "France"],
    ["What is the national sport of Japan?", "Sumo wrestling"],
    ["How many players are on a basketball team?", "5"],
    ["Who holds the record for the most goals in a single FIFA World Cup?", "Just Fontaine"],
    ["In which year were the first modern Olympics held?", "1896"],
    ["What is the name of the tournament where golfers compete for a green jacket?", "The Masters"],
    ["Which sport is known as the 'king of sports'?", "Soccer"],
    ["Who is considered the greatest sprinter of all time?", "Usain Bolt"],
    ["Which country has won the most Olympic gold medals?", "United States"],
    ["What is the maximum score in a single frame of bowling?", "300"],
  
    // Literature
    ["Who wrote 'Pride and Prejudice'?", "Jane Austen"],
    ["What is the first book of the Bible?", "Genesis"],
    ["Who wrote '1984'?", "George Orwell"],
    ["What is the name of the famous detective created by Sir Arthur Conan Doyle?", "Sherlock Holmes"],
    ["Who wrote 'The Catcher in the Rye'?", "J.D. Salinger"],
    ["Who wrote 'To Kill a Mockingbird'?", "Harper Lee"],
    ["What is the name of the monster in 'Frankenstein'?", "It has no name"],
    ["Who wrote 'Moby-Dick'?", "Herman Melville"],
    ["What is the name of the epic poem written by Dante?", "Divine Comedy"],
    ["Who wrote 'The Great Gatsby'?", "F. Scott Fitzgerald"],
  
    // Miscellaneous
    ["What is the currency of Japan?", "Yen"],
    ["Which company makes the PlayStation?", "Sony"],
    ["What is the most spoken language in the world?", "English"],
    ["Who invented the World Wide Web?", "Tim Berners-Lee"],
    ["What is the largest organ in the human body?", "Skin"],
    ["Which year did the first iPhone release?", "2007"],
    ["What is the national animal of India?", "Bengal Tiger"],
    ["Which company is known for its search engine?", "Google"],
    ["What is the highest mountain in Europe?", "Mount Elbrus"],
    ["What is the largest island in the world?", "Greenland"],
  
    // Math
    ["What is 9 x 9?", "81"],
    ["What is the value of pi to two decimal places?", "3.14"],
    ["What is the perimeter of a square with sides of 5 cm?", "20 cm"],
    ["What is 12 squared?", "144"],
    ["What is the cube root of 27?", "3"],
    ["What is 100 divided by 4?", "25"],
    ["What is the sum of angles in a triangle?", "180 degrees"],
    ["What is the square root of 121?", "11"],
    ["What is 7 x 8?", "56"],
    ["What is 15% of 200?", "30"],
  
    // Technology
    ["What does HTML stand for?", "HyperText Markup Language"],
    ["Who is the founder of Microsoft?", "Bill Gates"],
    ["What does 'HTTP' stand for?", "HyperText Transfer Protocol"],
    ["Which programming language is used to create Android apps?", "Java"],
    ["What is the most popular social media platform as of 2024?", "Facebook"],
    ["What is the shortcut for copying on a Windows computer?", "Ctrl+C"],
    ["What company produces the Galaxy line of phones?", "Samsung"],
    ["What does CPU stand for?", "Central Processing Unit"],
    ["What year was Google founded?", "1998"],
    ["What does AI stand for?", "Artificial Intelligence"]
  ];

  for (let i = 0; i < triviaQuestions.length; i++) {
    console.log(`Question: ${triviaQuestions[i][0]}`);
    console.log(`Answer: ${triviaQuestions[i][1]}`);
  }
  