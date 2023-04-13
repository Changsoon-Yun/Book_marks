# Dockerfile

# base image
FROM node:16.16.0

# 작업 디렉토리 생성
WORKDIR /app

# package.json 및 yarn.lock 파일 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# 소스 코드 복사
COPY . .

# 애플리케이션 빌드
RUN yarn build

# expose the port on which the app will run
EXPOSE 4000

# 컨테이너 시작 시 실행할 명령어 지정
CMD ["yarn", "start"]
