build-webserver:
	docker build -t webserverimage ./webserver
	docker save webserverimage -o dist/webserverimage