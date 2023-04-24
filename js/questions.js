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
    prompt: 'Question 1: What is cryptography?',
    options: ['a. The study of ancient languages', 'b. The study of codes and ciphers', 'c. The study of human behavior', 'd. The study of plants'],
    correctAnswer: 'b. The study of codes and ciphers',
    cashPrize: 10
  },
  {
    prompt: 'Question 2: Which of the following is an example of symmetric key cryptography?',
    options: ['a. RSA (Rivest–Shamir–Adleman)', 'b. AES (Advanced Encryption Standard)', 'c. Diffie-Hellman', 'd. ECC'],
    correctAnswer: 'b. AES (Advanced Encryption Standard)',
    cashPrize: 50
  },
  {
    prompt: 'Question 3: Which of the following is an example of a public key cryptography algorithm?',
    options: ['a. DES (Data Encryption Standard)', 'b. Blowfish', 'c. RSA (Rivest–Shamir–Adleman)', 'd. RC4'],
    correctAnswer: 'c. RSA (Rivest–Shamir–Adleman)',
    cashPrize: 100
  },
  {
    prompt: 'Question 4: What is the difference between a known plaintext attack and a chosen plaintext attack?',
    options: ['a. A known plaintext attack is where the attacker has access to the plaintext and ciphertext, while a chosen plaintext attack is where the attacker only has access to the ciphertext', 'b. A known plaintext attack is where the attacker only has access to the ciphertext, while a chosen plaintext attack is where the attacker has access to the plaintext and ciphertext', 'c. A known plaintext attack is where the attacker can choose the plaintext and get the corresponding ciphertext, while a chosen plaintext attack is where the attacker can choose both the plaintext and ciphertext', 'd. A known plaintext attack and a chosen plaintext attack are the same thing'],
    correctAnswer: 'b. A known plaintext attack is where the attacker only has access to the ciphertext, while a chosen plaintext attack is where the attacker has access to the plaintext and ciphertext',
    cashPrize: 500
  },
  {
    prompt: 'Question 5: What is a "man-in-the-middle" attack?',
    options: ['a. A "man-in-the-middle" attack is when an attacker intercepts communications between two parties to eavesdrop or alter the messages.', 'b. A "man-in-the-middle" attack is when an attacker gains unauthorized access to a network by exploiting a vulnerability in the authentication process.', 'c. A "man-in-the-middle" attack is when an attacker sends a large amount of traffic to a server or network to overload it and cause a denial of service.', 'd. A "man-in-the-middle" attack is when an attacker gains access to a user\'s computer or device by tricking them into downloading malware or visiting a malicious website.'],
    correctAnswer: 'a. A "man-in-the-middle" attack is when an attacker intercepts communications between two parties to eavesdrop or alter the messages.',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'Question 1: What is a phishing attack?',
    options: ['A. A type of fishing', 'B. A type of hunting', 'C. A type of cyber attack', 'D. A type of gardening'],
    correctAnswer: 'C. A type of cyber attack',
    cashPrize: 10
  },
  {
    prompt: 'Question 2: What is malware?',
    options: ['A. A type of computer hardware', 'B. A type of computer software that is used for gaming', 'C. A type of computer software that is designed to harm or exploit a computer system', 'D. A type of computer network'],
    correctAnswer: 'C. A type of computer software that is designed to harm or exploit a computer system',
    cashPrize: 50
  },
  {
    prompt: 'Question 3: What is pretexting?',
    options: ['A. A social engineering attack where the attacker creates a scenario to get information from the victim', 'B. A social engineering attack where the attacker sends a large amount of unwanted emails to the victim', 'C. A social engineering attack where the attacker poses as a legitimate entity to get information from the victim', 'D. A social engineering attack where the attacker uses fear to manipulate the victim'],
    correctAnswer: 'A. A social engineering attack where the attacker creates a scenario to get information from the victim',
    cashPrize: 100
  },
  {
    prompt: 'Question 4: What is a SQL injection attack?',
    options: ['A. A SQL injection attack is a type of attack where an attacker injects malicious code into a database query to gain unauthorized access to sensitive data.', 'B. A SQL injection attack is a type of attack where an attacker steals user credentials by tricking users into visiting a fake login page.', 'C. A SQL injection attack is a type of attack where an attacker exploits a vulnerability in the network to gain unauthorized access to a server or database.', 'D. A SQL injection attack is a type of attack where an attacker disrupts a network by flooding it with traffic.'],
    correctAnswer: 'A. A SQL injection attack is a type of attack where an attacker injects malicious code into a database query to gain unauthorized access to sensitive data.',
    cashPrize: 500
  },
  {
    prompt: 'Question 5: What is a reflection attack?',
    options: ['A. A type of DDoS attack where the attacker sends a large amount of traffic to the victim\'s server', 'B. A type of DDoS attack where the attacker spoofs the source IP address of their packets to make it appear as if the victim is sending the traffic', 'C. A type of DDoS attack where the attacker infects a large number of computers with malware and then uses them to launch the attack', 'D. A type of DDoS attack where the attacker physically damages the victim\'s server'],
    correctAnswer: 'B. A type of DDoS attack where the attacker spoofs the source IP address of their packets to make it appear as if the victim is sending the traffic',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'Question 1: What is a VPN?',
    options: ['a. A type of virus that infects computers', 'b. A type of internet browser', 'c. A type of software that encrypts internet traffic', 'd. A type of social media platform'],
    correctAnswer: 'c. A type of software that encrypts internet traffic',
    cashPrize: 10
  },
  {
    prompt: 'Question 2: What is a common risk associated with sharing personal information on social media?',
    options: ['a. Identity theft', 'b. Increased job opportunities', 'c. Improved mental health', 'd. More social connections'],
    correctAnswer: 'a. Identity theft',
    cashPrize: 50
  },
  {
    prompt: 'Question 3: What is a potential risk of using public Wi-Fi?',
    options: ['a. Improved security', 'b. Increased speed', 'c. Increased privacy', 'd. Exposure of sensitive information'],
    correctAnswer: 'd. Exposure of sensitive information',
    cashPrize: 100
  },
  {
    prompt: 'Question 4: What are some potential long-term consequences of cyberbullying?',
    options: ['a. Increased self-esteem', 'b. Improved relationships', 'c. Depression and anxiety', 'd. Increased job opportunities'],
    correctAnswer: 'c. Depression and anxiety',
    cashPrize: 500
  },
  {
    prompt: 'Question 5: What is ethical hacking?',
    options: ['a. Hacking that is done with malicious intent', 'b. Hacking that is done with the intent to cause harm', 'c. Hacking that is done with the intent to gain unauthorized access to a computer system for the purpose of identifying and addressing security vulnerabilities', 'd. Hacking that is done with the intent to steal sensitive information'],
    correctAnswer: 'c. Hacking that is done with the intent to gain unauthorized access to a computer system for the purpose of identifying and addressing security vulnerabilities',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'Question 1: What is computer forensics?',
    options: [
      'a. The process of recovering lost data',
      'b. The process of investigating and analyzing digital devices and data to gather evidence for legal purposes',
      'c. The process of encrypting sensitive data',
      'd. The process of securing computer networks'
    ],
    correctAnswer: 'b. The process of investigating and analyzing digital devices and data to gather evidence for legal purposes',
    cashPrize: 10
  },
  {
    prompt: 'Question 2: What types of digital evidence can be collected during a computer forensics investigation?',
    options: [
      'a. Only data stored on a computer\'s hard drive',
      'b. Only data stored on external storage devices',
      'c. Any type of data that can be stored digitally',
      'd. Only data that has been encrypted'
    ],
    correctAnswer: 'c. Any type of data that can be stored digitally',
    cashPrize: 50
  },
  {
    prompt: 'Question 3: What is the chain of custody in computer forensics?',
    options: [
      'a. The process of documenting the transfer of evidence from one person to another',
      'b. The process of securing digital evidence to prevent tampering',
      'c. The process of analyzing digital evidence',
      'd. The process of recovering lost data'
    ],
    correctAnswer: 'a. The process of documenting the transfer of evidence from one person to another',
    cashPrize: 100
  },
  {
    prompt: 'Question 4: What is malware analysis in computer forensics?',
    options: [
      'a. The process of identifying and analyzing malicious software',
      'b. The process of recovering deleted files',
      'c. The process of securing digital evidence',
      'd. The process of analyzing network traffic'
    ],
    correctAnswer: 'a. The process of identifying and analyzing malicious software',
    cashPrize: 500
  },
  {
    prompt: 'Question 5: What is live forensics in computer forensics?',
    options: [
      'a. The process of analyzing a computer system while it is running',
      'b. The process of analyzing a computer system after it has been shut down',
      'c. The process of recovering deleted files',
      'd. The process of securing digital evidence'
    ],
    correctAnswer: 'a. The process of analyzing a computer system while it is running',
    cashPrize: 1000
  }
];

export default questions;