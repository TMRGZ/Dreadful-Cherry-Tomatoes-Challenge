IMAGE_NAME=skeleton-angular
CONTAINER_NAME=skeleton-angular_live

build:
	docker build -t $(IMAGE_NAME) .

deps: build
	@ docker run -it --rm -w "/opt/app" -v "${PWD}:/opt/app" $(IMAGE_NAME) yarn install

down:
	@ docker kill $(CONTAINER_NAME) || true
	@ docker rm $(CONTAINER_NAME)

up: deps
	@ docker run -it --rm -p "3000:3000" -w "/opt/app" -v "${PWD}:/opt/app" -e CI=true --name $(CONTAINER_NAME) $(IMAGE_NAME) yarn start

.PHONY: test
test: deps
	@ docker run -it --rm -w "/opt/app" -v "${PWD}:/opt/app" $(IMAGE_NAME) yarn test

.PHONY: coverage
coverage: deps
	@ docker run -it --rm -w "/opt/app" -v "${PWD}:/opt/app" node:alpine yarn coverage
