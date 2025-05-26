
TERRAFORM = docker compose run --rm terraform
NODE = docker compose run --rm -p 3000:3000 node 


build-webserver:
	docker build -t webserverimage ./webserver
	docker save webserverimage -o dist/webserverimage

tfinit: 
	$(TERRAFORM) init

tfplan: 
	$(TERRAFORM) plan

noderun: 
	$(NODE) npm install 
	$(NODE) npm run dev -- -H 0.0.0.0