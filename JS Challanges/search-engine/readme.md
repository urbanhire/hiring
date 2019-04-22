# Case Search Data Array

### Case Search Data Array

Create File JSON with format below.

```
['Partnership Staff', 'Senior Graphic Designer', 'Editing video and Photographer', 'Head Digital Marketing', 'Social Media Manager', 'Partnership Manager', 'Business Development', 'Technical Marketing']
```

Create function to read JSON file and search dynamically.

Test Case:
1. Search result should return same with keyword
2. User can search multiple words
3. User can search when they typing minimal three character and maximal 50 character
4. Keyword only allow alphabetical and numeric characters, dash, dot, comma. Regex: [a-zA-Z0-9\-\.\,]
5. Search result ordering by total character ascending

Example Case:
1.	Keyword: "Marketing"
	Result should be: 
	- Head Digital Marketing
	- Technical Marketing

2.	Keyword: "Social"
	Result should be:
	- Social Media Manager

3.	Keyword: "So"
	Result should be empty

4.	Keyword: "Senior Marketing"
	Result should be:
	- Senior Graphic Designer
	- Head Digital Marketing
	- Technical Marketing

5.	Keyword: "dev-ops’ engineer + site reliability engineer" or “Devops (DO)”
    Keyword should be:
    - dev-ops engineer site reliability engineer
    - devops DO