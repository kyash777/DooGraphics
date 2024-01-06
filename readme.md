# Mern Stack FlipKart Clone.

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


Step 5: Install Backend Dependencies

In your terminal, open the  DooGraphics directory.
Then run  the following command to install the backend dependencies:

### npm install
This command will install all the required packages specified in the package.json file.

![Install backend dependencied]()


Step 6: Run Setup Script
While still in the /backend directory of the project, execute the following command to run the setup script:

npm run setup
This setup script may perform necessary database migrations or any other initialization tasks required for the project.

Step 7: Run the Backend Server
In the same terminal, run the following command to start the backend server:

npm run dev
This command will start the backend server, and it will listen for incoming requests.

Step 8: Install Frontend Dependencies
Open a new terminal window , and run the following command to install the frontend dependencies:

cd frontend
npm install
Step 9: Run the Frontend Server
After installing the frontend dependencies, run the following command in the same terminal to start the frontend server: