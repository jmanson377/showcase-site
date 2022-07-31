build-docker:
	docker build -t showcase-app .

run-docker:
	docker run -d -p 3000:3000 showcase-app:latest