# 🚀 Dockerized Node + Express + MongoDB Application  
**Repository:** [Noobod/docker-node-mongo-app](https://github.com/Noobod/docker-node-mongo-app)  
**Author:** Noobod

---

## 🔍 Project Overview  
This project demonstrates a full-stack web API composed of **Node.js + Express** served inside a Docker container, connected to a **MongoDB database**, with a browser-based management interface via **Mongo Express**.  
This setup showcases skills in containerization, multi-container orchestration, networking, and DevOps fundamentals.

---

## 🧩 Tech Stack  
| Layer | Technology |
|-------|-----------|
| Backend | Node.js & Express.js |
| Database | MongoDB |
| Admin UI | Mongo Express |
| Containerization | Docker & Docker Compose |
| Networking | Custom Docker bridge network (`app-network`) |
| Persistence | Docker volume for MongoDB data (`mongo-data`) |

---

## 💡 Feature Highlights  
- REST endpoints for user management:  
  - `POST /addUser` — Add a new user  
  - `GET /getUsers` — Retrieve all users  
- Multi-container architecture with services: `node-app`, `mongo`, `mongo-express`  
- Secrets and environment variables managed in `docker-compose.yml`  
- Port mapping setup for local access (`3030` for API, `8081` for database UI)  
- Easily shareable Docker image and GitHub repo for recruiters and collaborators

---

## 🛠️ Quick Start Guide  

### Prerequisites  
- Docker and Docker Compose installed  
- Basic terminal / command-line knowledge  

### Launch locally  
```bash
git clone https://github.com/Noobod/docker-node-mongo-app.git
cd docker-node-mongo-app
docker-compose up -d --build
```
### Access the services

API & web form: http://localhost:3030

Mongo Express UI: http://localhost:8081

Username: admin
Password: pass

## Stop services
```bash
docker-compose down
```
## 🔒 Security Notes

These credentials are suitable for development/demo only.

MongoDB root user = delta_admin / delta_password

For production, always rotate credentials and enable TLS, secure ports, etc.

mongo-express uses default admin:pass — change via ME_CONFIG_… environment variables.

## Directort Structure
docker-node-mongo-app/
├── Dockerfile
├── docker-compose.yml
├── server.js
├── index.html
├── package.json
└── package-lock.json
