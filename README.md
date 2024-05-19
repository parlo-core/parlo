# Parlo setup

### Notes and initial steps:
1. Install Homebrew
2. `brew install openssl`
3. Install Docker Desktop


1. git clone https://github.com/parlo-core/parlo.git
2. cd parlo
3. echo "export PARLO_PATH=${PWD}" >> ~/.bashrc
4. source ~/.bashrc
5. brew install mkcert nss
6. mkcert -install
7. cd traefik
8. mkdir certs
9. cd certs
10. mkcert -cert-file parlo.dev.pem -key-file parlo.dev-key.pem parlo.dev "*.parlo.dev"
11. Add following lines to the /etc/hosts (`sudo vim /etc/hosts`)

```
127.0.0.1 traefik.parlo.dev
127.0.0.1 api.parlo.dev
```
12. Start application in parlo root folder:
```
cd $PARLO_PATH
docker-compose -f docker-compose.dev.yml up -d db redis traefik
docker-compose -f docker-compose.dev.yml up backend

# If you want to go inside backend container:
docker-compose -f docker-compose.dev.yml exec backend bash
```
13. Visit `https://api.parlo.dev`
