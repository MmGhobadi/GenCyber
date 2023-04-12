const questions = [
    {
    prompt: 'How can you prevent a phishing attack?',
    options: ['Never click on links or download attachments from unknown or suspicious sources', 'Always verify the authenticity of the sender and the message content', 'Enable two-factor authentication and use strong, unique passwords', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 10
    },
    {
    prompt: 'What are the risks of using public Wi-Fi?',
    options: ['Hackers can intercept and steal sensitive information transmitted over public Wi-Fi networks', 'Attackers can launch man-in-the-middle attacks to eavesdrop on users\' online activities', 'Malware can be downloaded onto users\' devices without their knowledge', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 50
    },
    {
    prompt: 'What is the difference between antivirus and anti-malware software?',
    options: ['Antivirus software protects against viruses, while anti-malware software protects against all types of malware', 'Antivirus software is more effective than anti-malware software', 'Antivirus software is only necessary for business users, while anti-malware software is sufficient for home users', 'There is no difference between antivirus and anti-malware software'],
    correctAnswer: 'Antivirus software protects against viruses, while anti-malware software protects against all types of malware',
    cashPrize: 100
    },
    {
    prompt: 'How can you create a strong password?',
    options: ['Use a combination of uppercase and lowercase letters, numbers, and special characters', 'Avoid using easily guessable information, such as your name or birthdate', 'Use a long password with at least 12 characters', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 500
    },
    {
    prompt: 'What is multi-factor authentication?',
    options: ['A type of encryption algorithm', 'A type of firewall', 'A security process that requires users to provide two or more forms of identification to access a system or device', 'A type of computer virus'],
    correctAnswer: 'A security process that requires users to provide two or more forms of identification to access a system or device',
    cashPrize: 1000
    },
	{
	prompt: 'What is a phishing email?',
	options: ['An email that contains malicious attachments or links that can infect a computer with malware', 'An email that asks users to provide sensitive information such as passwords or credit card numbers', 'An email that contains spam messages', 'An email that contains advertisements'],
	correctAnswer: 'An email that asks users to provide sensitive information such as passwords or credit card numbers',
	cashPrize: 10
	},
	{
	prompt: 'How can you identify a phishing email?',
	options: ['By checking for suspicious or misspelled sender email addresses', 'By checking for urgent or threatening language', 'By checking for unsolicited requests for sensitive information', 'All of the above'],
	correctAnswer: 'All of the above',
	cashPrize: 50
	},
	{
	prompt: 'What is ransomware?',
	options: ['A type of malware that encrypts users\' files and demands a ransom for their release', 'A type of antivirus software', 'A type of firewall', 'A type of computer virus'],
	correctAnswer: 'A type of malware that encrypts users\' files and demands a ransom for their release',
	cashPrize: 100
	},
	{
	prompt: 'What is the importance of regular software updates?',
	options: ['To improve system performance and stability', 'To add new features and functionality', 'To patch security vulnerabilities and protect against cyber attacks', 'To comply with legal and regulatory requirements'],
	correctAnswer: 'To patch security vulnerabilities and protect against cyber attacks',
	cashPrize: 500
	},
	{
	prompt: 'What is a VPN?',
	options: ['A virtual private network that provides a secure connection to a remote network or server', 'A type of antivirus software', 'A type of encryption algorithm', 'A type of computer virus'],
	correctAnswer: 'A virtual private network that provides a secure connection to a remote network or server',
	cashPrize: 1000
	},
	{
	prompt: 'What is malware?',
	options: ['Malware is a type of computer hardware.', 'Malware is a type of internet browser.', 'Malware is a type of mobile phone operating system.', 'Malware is any type of malicious software designed to harm a computer system or steal sensitive information.'],
	correctAnswer: 'Malware is any type of malicious software designed to harm a computer system or steal sensitive information.',
	cashPrize: 10
	},
	{
	prompt: 'What is a data breach?',
	options: ['A data breach occurs when sensitive information is accessed, disclosed, or stolen without authorization.', 'A data breach occurs when software updates are not installed properly.', 'A data breach occurs when hardware components are not compatible.', 'A data breach occurs when an employee quits their job.'],
	correctAnswer: 'A data breach occurs when sensitive information is accessed, disclosed, or stolen without authorization.',
	cashPrize: 50
	},
	{
	prompt: 'What is social engineering?',
	options: ['Social engineering is a programming language used for web development.', 'Social engineering is a tactic used by attackers to manipulate or trick individuals into divulging confidential information or performing an action that benefits the attacker.', 'Social engineering is a type of wireless networking technology.', 'Social engineering is a type of computer hardware.'],
	correctAnswer: 'Social engineering is a tactic used by attackers to manipulate or trick individuals into divulging confidential information or performing an action that benefits the attacker.',
	cashPrize: 100
	},
	{
	prompt: 'What is a password manager?',
	options: ['A password manager is a software application that helps users generate, store, and manage complex, unique passwords.', 'A password manager is a hardware device used to store passwords.', 'A password manager is a security protocol used to encrypt passwords.', 'A password manager is a type of computer virus.'],
	correctAnswer: 'A password manager is a software application that helps users generate, store, and manage complex, unique passwords.',
	cashPrize: 500
	},
	{
	prompt: 'What is the difference between symmetric and asymmetric encryption?',
	options: ['Symmetric encryption is used to encrypt data at rest, while asymmetric encryption is used to encrypt data in transit.', 'Symmetric encryption is used for one-way encryption, while asymmetric encryption is used for two-way encryption.', 'Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses different keys.', 'Symmetric encryption is a stronger form of encryption than asymmetric encryption.'],
	correctAnswer: 'Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses different keys.',
	cashPrize: 1000
	},
	{
    prompt: 'What is a penetration test?',
    options: ['A simulated attack on a computer system or network to identify vulnerabilities', 'A test to measure the strength of a password', 'A test to evaluate the effectiveness of antivirus software', 'A test to determine the speed of a network connection'],
    correctAnswer: 'A simulated attack on a computer system or network to identify vulnerabilities',
    cashPrize: 10
    },
    {
    prompt: 'Why is it important to use strong and unique passwords?',
    options: ['Using strong and unique passwords reduces the risk of your accounts being compromised by hackers.', 'Using strong and unique passwords ensures that you can remember them easily.', 'Using strong and unique passwords makes it easier for others to guess them.', 'Using strong and unique passwords slows down the login process.'],
    correctAnswer: 'Using strong and unique passwords reduces the risk of your accounts being compromised by hackers.',
    cashPrize: 50
    },
    {
    prompt: 'What is the difference between a virus and a worm?',
    options: ['A virus is designed to steal data, while a worm is designed to damage systems.', 'A virus requires a host program to run, while a worm is a self-replicating program that does not need a host.', 'A virus can spread through a network, while a worm is limited to infecting one system at a time.', 'A virus can only infect Windows systems, while a worm can infect any operating system.'],
    correctAnswer: 'A virus requires a host program to run, while a worm is a self-replicating program that does not need a host.',
    cashPrize: 100
    },
    {
    prompt: 'How can you protect against malware attacks?',
    options: ['Protect against malware attacks by keeping software up to date, using anti-virus software, and being cautious when opening email attachments or downloading software.', 'Protect against malware attacks by disconnecting your computer from the internet.', 'Protect against malware attacks by sharing your personal information online.', 'Protect against malware attacks by using weak passwords and easily guessed security questions.'],
    correctAnswer: 'Protect against malware attacks by keeping software up to date, using anti-virus software, and being cautious when opening email attachments or downloading software.',
    cashPrize: 500
    },
    {
    prompt: 'How can you secure your mobile device against cyber attacks?',
    options: ['Secure your mobile device by using a passcode or biometric authentication, keeping software up to date, and only downloading apps from trusted sources.', 'Secure your mobile device by leaving it unlocked and connected to public Wi-Fi networks.', 'Secure your mobile device by using easily guessable passcodes and storing sensitive information on it.', 'Secure your mobile device by disabling automatic software updates and downloading apps from unverified sources.'],
    correctAnswer: 'Secure your mobile device by using a passcode or biometric authentication, keeping software up to date, and only downloading apps from trusted sources.',
    cashPrize: 1000
    },
	{
	prompt: 'How can you protect your personal information on social media?',
	options: [
	'Adjust your privacy settings to control who can see your profile and posts.',
	'Limit the amount of personal information you share on social media, such as your full name, address, or phone number.',
	'Avoid accepting friend requests or messages from strangers.',
	'Regularly review and update your social media security settings to stay protected.'
	],
	correctAnswer: 'Limit the amount of personal information you share on social media, such as your full name, address, or phone number.',
	cashPrize: 10
	},
	{
	prompt: 'What is a firewall?',
	options: [
	'A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
	'A firewall is a type of software used to automate cyber attacks.',
	'A firewall is a type of encryption used to secure data.',
	'A firewall is a type of hardware used to protect against cyber attacks.'
	],
	correctAnswer: 'A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
	cashPrize: 50
	},
	{
	prompt: 'Why is cybersecurity important for individuals and organizations?',
	options: [
	'Cybersecurity is not important for individuals or organizations, as cyber attacks are unlikely to occur.',
	'Cybersecurity is important only for large organizations, not individuals or small businesses.',
	'Cybersecurity is important for individuals and organizations because cyber attacks can result in the theft of personal and sensitive information, financial loss, and damage to reputations.',
	'Cybersecurity is important only for government agencies and military organizations.'
	],
	correctAnswer: 'Cybersecurity is important for individuals and organizations because cyber attacks can result in the theft of personal and sensitive information, financial loss, and damage to reputations.',
	cashPrize: 100
	},
	{
	prompt: 'How can you protect against identity theft?',
	options: [
	'Protect personal information, such as social security numbers, passwords, and financial information, and monitor financial statements and credit reports for suspicious activity.',
	'Share personal information freely to improve communication and collaboration with colleagues and friends.',
	'Store personal information on unsecured devices to ensure easy access and prevent loss.',
	'Avoid monitoring financial statements and credit reports to save time and reduce stress.'
	],
	correctAnswer: 'Protect personal information, such as social security numbers, passwords, and financial information, and monitor financial statements and credit reports for suspicious activity.',
	cashPrize: 500
	},
	{
	prompt: 'What is the difference between confidentiality, integrity, and availability in cybersecurity?',
	options: [
	'Confidentiality ensures that data is only accessible to authorized parties.',
	'Integrity ensures that data is accurate and unaltered.',
	'Availability ensures that data is accessible and usable when needed.',
	'All of the above.',
	],
	correctAnswer: 'All of the above.',
	cashPrize: 1000
	},
];

export default questions;