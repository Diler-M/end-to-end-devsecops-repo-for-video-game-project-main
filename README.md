# 📦 End-to-End DevSecOps Pipeline for Video Game Project

## 🎮 Overview
A **real-world DevSecOps pipeline** for a lightweight HTML5 Super Mario clone, demonstrating:

- **Secure CI/CD pipeline design**
- **Containerisation & scanning**
- **GitOps-based deployment automation**
- **Secrets management and version control**

---

## 🛠️ Features

✅ **GitHub Actions multi-stage pipeline**:
- **SAST with SonarQube**
- **Build & push Docker images**
- **Container vulnerability scanning (Trivy)**
- **Automated Kubernetes manifest updates (GitOps)**

✅ **Containerisation:** Alpine-based Tomcat for lightweight deployment.  
✅ **Secrets Management:** Uses GitHub Actions secrets.  
✅ **Version Automation:** Auto-increments tags in CI/CD pipeline.

---

## 🚀 Pipeline Workflow

1️⃣ Push to `main` triggers pipeline  
2️⃣ **SonarQube SAST scan** for vulnerabilities and code quality  
3️⃣ **Build & push Docker image** with incremented tag  
4️⃣ **Trivy scan** for critical/high vulnerabilities  
5️⃣ Auto-update `deployment.yaml` and `version.txt` with the new tag

---

## 🛡️ Why This Project is Valuable

✅ Demonstrates **security-first pipeline design**  
✅ Shows **secure CI/CD integration with SAST & container scanning**  
✅ Highlights **GitOps principles for reliable deployment**  
✅ Uses **Trivy, SonarQube, Docker, and Kubernetes securely**

---

## 📂 Repository Structure

- 📂 webapp/ 
- 📄 Dockerfile 
- 📄 deployment.yaml 
- 📄 e2e-gitops.yaml 
- 📄 sonar-project.properties 
- 📄 version.txt 
- 📄 README.md 


---

## 💡 Future Enhancements

- Add **unit testing & linting** to pipeline
- Enforce **SonarQube Quality Gates**
- Enforce **Trivy failure on CRITICAL/HIGH CVEs**
- Slack/MS Teams **notifications on pipeline status**

---

⚙️ License
This project is for educational and portfolio demonstration purposes only.
