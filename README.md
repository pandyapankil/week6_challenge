# week6_challenge
Hiring Website

1. Applicant will go to the hiring site and submit name & email.
2. Nodejs based website will call MongoDB and check if applicant already exists or not.
    (i)  If applicant already exists and last applied was less than 180 days, then simply ignores it.
    (ii) Else create new document in "applicants" db.
3. On Save trigger of MongoDB will send an email to applicant with unique challenge link.
4. Project uses sphere-engine for hiring test purpose. The unique link embedded the sphere engine.
   Applicant will enter name & email and OnSubmit it will update document in MongoDB.
5. On Update trigger of MongoDB will send and email to applicant with google_calendar to organize on-site interview.

P.S: Can add multiple rounds of interviews using same logic.
