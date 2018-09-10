steps to Include recaptcha
===================================

1.Common gmail account to access recaptcha 
    mail id: overstockb2b@gmail.com
	password: Overstock18
2. Login to this gmail account
3. Run --- npm install
4. Run --- npm run build
5. Run --- npm start	



Set domain name instead of IP address on 
=================================================

1. Open the following folder in window system
	C:\Windows\System32\drivers\etc

2. Open the hosts file on edit mode [recommended open with notepad++]

3. Add the below line on bottom of hosts file.
	192.168.99.100  demo.overstock.com



steps for Docker installion and setup in window
===============================================

1. Download the Docker Toolbox on Windows from below URL

	https://docs.docker.com/toolbox/toolbox_install_windows/

2. Install the DockerToolbox.exe  as Administrator. If your not Adminstrator, get Local Admin Rights from your Admin.

3. DockerToolbox.exe install/run as Administrator. 

4. Once Installed, Shortcut icon showed on desktop. Run as Administrator. 

5. Check If docker successfully installed. give a command "docker --version" 
	
	If it's show the message "Docker version 18.03.0-ce, build 0520e24302"
	It's Successfully Installed, now ready to use.

	If it's show the any error. Docker not installed properly. please check with any admin person


Step for RUN our codes in our local machine
===========================================

1. Download the files from your mail

2. Extract the download file

3. Open CMD prompt, right click and Run as Administrator. 

4. Redirect the specific path in CMD prompt using "cd"
	e.g
	 c:/root> cd < your working file path >

5. Give command " docker --version " 

	If it's show the message "Docker version 18.03.0-ce, build 0520e24302"
	It's Successfully Installed, now ready to use.

6. Give command "docker build -t ostkbuild ."  [note: Don't miss the dot also]

7. Docker images successfull created.

8. Now we can run our image in specific port the command "docker run -d -p 443:443 ostkbuild "  [ note: we can customize our port, but for https add 443 (e.g:- 8080:443) ]

9. Open any browser and give the url "https://demo.overstock.com"  [note: give your default  ]

10. We can see our docker image as page.

11. Code coverage https://demo.overstock.com/lcov-report


Step for unit test cases and code coverage report for individual files
======================================================================

1.npm run _test => for how many test cases are pass.

2.npm run _coverage => for create coverage report for your project.

3.npm run _coverage:report => for open the report in Chrome.

4.Code coverage https://demo.overstock.com/lcov-report

Note: user has Mac system please go to the project folder open coverage folder then again open Icov-report and right click index.html open in chrome.