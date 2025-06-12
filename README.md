# 💳 Idempotent API Simulation Using Node.js and Redis


---

## 🚀 Features

- Prevents duplicate payment processing
- Uses UUID-based `Idempotency-Key` in headers
- Stores responses in Redis with TTL (5 minutes)
- Serves cached responses for duplicate requests
- Simulates distributed environment by running multiple servers

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Redis (via `ioredis`)
- Optional: Docker (for Redis)

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/idempotent-api-node.git
cd idempotent-api-node
