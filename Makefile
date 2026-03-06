
TERRAFORM = docker compose run --rm terraform
NODE = docker compose run --rm -p 3000:3000 node 
AWSCLI = docker compose run --rm awscli


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

awsconfigure:
	$(AWSCLI) configure sso-session

auth: 
	aws sso login --sso-session default

install: 
	bash ./scripts/linux/install.sh

build: 
	docker build -t "webserverimage" ./webserver