# Software-Engineer-Challenge

`version 1.0`
`challenge status: open`

Welcome! We've been expecting you. Urbanhire is tools empower companies to inspire and make their culture visible. We don’t believe boring and transactional job posts are effective in sourcing tech-savvy millennials

If you're someone who bleeds code and aches to make a difference in the world, then you are at the right place. You will be part of a world‑class team working on the most exciting ground‑breaking technology in an inspiring and collaborative environment.

####Javascript in this document usually means Node.js

## Basics

This is the Urbanhire backend developer challenge. The rules of the challenge are very simple and are as follows

* You are required to code in javascript
* You will be able to submit the challenge anytime you are ready provided the challenge is still open
* Your code should be neatly commented
* You are required to fork this repo and submit a pull request
* If you wish to not make public, your submission, please complete the code in your local repository and email a patch file to [dev@urbanhire.com](mailto:dev@urbanhire.com)
* Please note that you will also be judged on the elegance of your code, level of abstraction and technical skills presented in the implementation. For more details, refer to the Judging Criteria section below.

## The Challenge 

### What You'll need to build
* You'll need to build a scraper, that will scrape [https://www.linkedin.com/jobs/view-all](https://www.linkedin.com/jobs/view-all) and store them in a database (e.g [Linkedin Jobs](https://www.linkedin.com/jobs/view-all) ) we prefer you use **MongoDB** as database since we used it right now.
* You will then need to provide an endpoint using [ExpressJS](http://expressjs.com) to provide list jobs, details jobs.
* Using a job id There should be an endpoint for to show us the jobs information.
 

### Bits and Pieces to take note of

#### Scraper
* the scraper can be written in any language (Bonus points for being written in javascript! :D)  
* the scraper should store - 
	* Job Name
	* Company Company
	* Company Logo
	* Job Location
	* All Job information provided, 

	
#### API
* You have to build an end point to accept a query, q, which will return the 10 jobs (return only name, company name, location and "job id") with the most similar name (full-text search)
* The end point should return the jobs in JSON format
* You will have to also build an api endpoint to then retrive the job detail information for a given job id.
* There should also be an endpoint to manually insert, remove and update data into the database.
* Its good and nice to have if you also do a TDD to all the API


## Judging Criteria 
* What you have produced will determine your final outcome. You will be scored based upon your coding style and the ability to follow "good code" [See: JavaScript Standard Style 
](http://standardjs.com/rules.html), at Urbanhire we use [StandardJS](http://standardjs.com/index.html)
* More than your ability to code we want to see your ability to learn. So you are encouraged to ask questions. [Hengki](mailto:hengki@urbanhire.com) or [UH Engineers](mailto:dev@urbanhire.com)



# Happy Hacking!

