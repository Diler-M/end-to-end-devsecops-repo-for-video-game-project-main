# 📦 End-to-End DevSecOps Pipeline for Video Game Project using GitOps

## 🎮 Overview

This project is an **End-to-End DevSecOps Case Study** demonstrating **GitOps practices** for a lightweight HTML5 Mario game clone. It showcases:

- **Secure CI/CD pipeline design using GitHub Actions**
- **Static code analysis with SonarQube (SAST)**
- **Containerisation and vulnerability scanning (Trivy)**
- **Docker image build, tagging, and publishing**
- **Automated Kubernetes deployment using GitOps principles (ArgoCD)**

---

## 🛠️ Features

✅ **GitHub Actions multi-stage pipeline**
✅ **SonarQube SAST integration**
✅ **Container build, push, and scanning (Docker + Trivy)**
✅ **GitOps deployment workflow using ArgoCD**
✅ **Version tracking and automated tag management**
✅ **Azure Kubernetes Service (AKS) deployment readiness**


---

## 🚀 Pipeline Workflow

1️⃣ **Code Commit:**  
   - Developer commits changes (e.g., Mario game controls) to GitHub.
   - Triggers end to end GitHub Actions pipeline automatically.

2️⃣ **Static Code Analysis:**  
   - **SonarQube** runs SAST for vulnerability scanning.

3️⃣ **Build & Tag Docker Image:**  
   - Docker image for the Mario game is built with a **dynamic tag** based on `version.txt`.

4️⃣ **Push to Docker Hub:**  
   - The built image is pushed to **Docker Hub** for versioned storage.

5️⃣ **Update Deployment YAML:**  
   - The pipeline updates `deployment.yaml` with the new tag.
   - Commits updated `deployment.yaml` and `version.txt` to the repo.

6️⃣ **GitOps Deployment with ArgoCD:**  
   - **ArgoCD detects changes** in `deployment.yaml` automatically.
   - Deploys the new image to **Azure Kubernetes Service (AKS)**.
   - AKS exposes the Mario game via a Load Balancer on the internet.


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

## 🌟 Why This Project is Valuable

✅ Demonstrates **real-world DevSecOps practices**  
✅ Shows **security-first pipeline design** with SAST and container scanning  
✅ Applies **GitOps for Kubernetes deployment**  
✅ Uses **Azure Kubernetes Service (AKS) for cloud deployment readiness**  
✅ Automates **version control and tag management**  
✅ Uses **SonarQube, Trivy, Docker, Kubernetes, GitHub Actions, and ArgoCD** in a cohesive workflow

---

⚙️ License
This project is for educational and portfolio demonstration purposes only.
