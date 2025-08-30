# BeWise

> Smart Solutions

A scalable and modular SaaS platform architecture designed for global deployment. It supports dynamic web and mobile clients, robust APIs, real-time communication, secure authentication, and tenant-based isolation.

---

## 🛠️ Tech Stack

| Layer        | Technology                      |
| ------------ | ------------------------------- |
| **Frontend** | Next.js, Expo, React Native     |
| **API**      | Node.js (Express)               |
| **DB**       | PostgreSQL (RDS)                |
| **Realtime** | Redis (ElastiCache) + Socket.IO |
| **Storage**  | Amazon S3                       |
| **Infra**    | AWS EKS, Terraform, Cloudflare  |
| **CI/CD**    | GitHub Actions, Vercel, EAS     |

## 📁 Monorepo Structure

```plaintext
.
├── apps/
│   ├── api/               # Backend API (Node.js / Kotlin)
│   ├── web/               # Next.js app (Vercel)
│   ├── mobile/            # Expo app
│
├── packages/
│   ├── common/            # Shared types, UI, utilities
│
├── infra/
│   ├── kubernetes/        # EKS deployment manifests
│   ├── terraform/         # AWS infrastructure (RDS, Redis, S3)
│
└── scripts/
    ├── generate-routes.ts # Prebuild logic for routes
```

## 🧠 Core Concepts

### 🧩 Multi-Tenancy

- Each tenant (organization) is logically isolated
- Tenant ID is stored in user sessions and JWTs
- Roles and permissions are scoped per tenant

### 🔐 Authentication & Authorization

- Local password-based login (hashed with bcrypt)
- Social login via Google OAuth2
- Optional MFA (TOTP)
- JWT contains sub, tenant_id, role, scopes

### ⚙️ Permissions Model

- users: global user table
- tenants: each customer space
- roles: assigned per user per tenant
- scopes: granular permissions (e.g. read_orders, manage_users)

### 🔌 Real-time Communication

- Socket.IO + Redis (Pub/Sub via ElastiCache)
- Tenant-aware channels
- Used for orders, updates, alerts, etc.

### 📄 Dynamic Frontends

- Web and mobile load routes, UI and settings from the API
- Pages, layout and permissions are driven by the backend
- Each client adapts based on the current tenant and user role

## 🌐 Deployment Overview

| Target      | Platform        | Method               |
| ----------- | --------------- | -------------------- |
| Web         | Vercel          | Git-based deployment |
| Mobile      | Expo / EAS      | OTA & Store builds   |
| Backend API | AWS EKS         | Docker + Kubernetes  |
| Infra       | AWS + Terraform | RDS, S3, Redis       |

## ✅ Roadmap

- [x] API with tenant-aware auth
- [x] Web and mobile dynamic routing
- [x] Multi-tenant PostgreSQL structure
- [ ] Admin panel for tenant management
- [ ] MFA integration (TOTP)
- [ ] Email + notification service

---

Made with ❤️ by the BeWise team.
