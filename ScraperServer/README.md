# Scraping Server
A simple serve where you can scrape a website.

## Demo app

### API

#### List of routes:

| Route            | HTTP   | Description                           |
| ---------------- | ------ | ------------------------------------- |
| `/scrape`        | GET    | scrape 10 latest jobs                 |
| `/get`           | GET    | Get the 10 latest scraped jobs        |
| `/get/:jobslug`  | GET    | Get job by jobslug                    |
| `/search/:query` | GET    | Get job by query search               |
| `/`              | POST   | Post a job vacancy                    |
| `/:jobslug`      | PUT    | Edit a job by jobslug                 |
| `/:jobslug`      | DELETE | Delete a job by jobslug               |


### Usage
#### With only npm:

create .env containing:
```
DB_USER=admin
DB_PASS=admin101
```

then perform:

```
npm install 
npm start
```