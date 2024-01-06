# Mern Stack FlipKart Clone.
### Demo
```bash
https://github.com/kyash777/DooGraphics/blob/master/images/demo.mp4
```

## Setting up the project.

### Step 1: Clone the repository

```bash
git clone https://github.com/kyash777/DooGraphics.git
```

### Step 2: Create Your MongoDB Account and Database/Cluster
Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change <password> with your own password

add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes)

### Step 3: Edit the Environment File
Check a file named .env in the DooGraphics-master directory.
This file will store environment variables for the project to run.

### Step 4: Update MongoDB URI
In the .env file, find the line that reads:
MONGODB_URI="your-mongodb-uri"
Replace "your-mongodb-uri" with the actual URI of your MongoDB database.


### Step 5: Install Backend Dependencies

In your terminal, open the  DooGraphics directory.
Then run  the following command to install the backend dependencies:

### npm install
This command will install all the required packages specified in the package.json file.

![Install backend dependencies](https://github.com/kyash777/DooGraphics/blob/master/images/stp2.png)

### Step 6: Install Frontend Dependencies
In your terminal, navigate t0  DooGraphics/frontend and Install Frontend Dependencies
using following command.

### cd frontend
### npm install
This command will install all the required packages specified in the package.json file.

![Install frontend dependencied](https://github.com/kyash777/DooGraphics/blob/master/images/stp1.png)


### Step 6: Run Setup Script
In DooGraphics-master directory  of the project, execute the following command to run the setup script:

### npm run setup
This setup script may perform necessary database migrations or any other initialization tasks required for the project.

## Starting Project Locally.

### Step 1: Run the Backend Server
In DooGraphics-master directory , run the following command to start the backend server:

### npm start or node server.js
This command will start the backend server, and it will listen for incoming requests.

![Starting Backend Server](https://github.com/kyash777/DooGraphics/blob/master/images/sr1.png)


### Step 2: Run the Frontend Server
After installing the frontend dependencies, run the following command in the same terminal to start the frontend server.

### cd frontend
### npm start

![Starting Fontend Server](https://github.com/kyash777/DooGraphics/blob/master/images/sr2.png)