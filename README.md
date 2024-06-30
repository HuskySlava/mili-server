# Express Server Practice

## Features
TBD

## Requirements 
* Node.js version >= 20.15 (Developed on)
* npm 

## Setup 

1. Clone repo
    ```bash
    git clone <repo>
    cd mili-server
    ```
2. Install dependencies
    ```bash
    npm i
    ```
3. Configure serer .env file (see .env.example)
    ```bash
    # Database settings
    DB_HOST=
    DB_USER=
    DB_PASS=
    DB_NAME=

    # Server settings
    PORT=
    SECRET_KEY=

    # API keys
    API_KEY=

    # AllowedIPs
    ALLOWED_IPS=127.0.0.1, 127.0.0.2, 127.0.0.3
    ```
4. Build Server
    ```bash
    node run build
    ```
5. Run Server
   ```bash
   node ./dist/server.js
   ```