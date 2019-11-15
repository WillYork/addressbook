# Address Book Project for The Idol


### Prerequisites

Requires node version 12.00.0 or later installed.

The backend of the project uses the following dependencies:

* body-parser
* cors
* express
* mysql
* nodemon

The frontend of the project uses the following dependencies:

* @reach/router
* axios
* react

### Installation instructions for the backend

Locate the correct repo:

```bash
cd backend/app
```

Install all of the prerequisite dependencies specified in the previous section by running the following command:

```bash
npm i
```

Make sure you have mysql installed and then start it running

```bash
mysql -u root -p
```
(This will prompt you to enter your password)

Set up a new database called 'Addressbook'

```bash
CREATE DATABASE Addressbook;
```

Once this is done, go to the app.js file in the app folder and enter your mysql credentials underneath where it says 'Configure connection'

Run the following command to get the app running:

```bash
npm run dev
```

Enter the following into your favourite browser:

```bash
http://localhost:8080/api/create_table
```
This will set up an 'addresses' table

Then enter the following into the browswer:

```bash
http://localhost:8080/api/add_data
```
This will add three entries into the table

The backend is now up and running

### Installation instructions for the frontend

Locate the correct repo:

```bash
cd react-frontend
```

Install all of the prerequisite dependencies specified in the previous section by running the following command:

```bash
npm i
```

Run the following command to get run the app and open the frontpage in the browser:

```bash
npm run start
```