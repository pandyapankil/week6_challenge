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

Note: Can add multiple rounds of interviews using same logic.


                                **Hiring Website**
User form -> Fields: [Name, Email]
          -> Events: [onSubmit] -> Save it into MongoDB with Fields: [id(md5_hash), name, email, status('initial_submit'), challenge_time(null), last_time(current_time), challenge_start_time(null), score(null), apply_count(++, default 0)]
      ==> MongoDB Trigger: [onSave] -> Send an email using some API with custom link (https://customurl.com/challenge?id={{id}})
note: if user's id is already in system and last_time is not more than 179 days then don't send an email.


Sphere engine page -> Fields: [Name, Email]
            -> Events: [onSubmit] -> Update MongoDB fields: [status('started_challenge'), challenge_start_time(current_time)]


Sphere engine's post page -> Events: [onSubmit] -> Update MongoDB fields: [status(if score is 100 then 'passed_challenge' else 'attempted_challenge'),  score(score), challenge_time(current_time - challenge_start_time)
            ==> MongoDB Trigger: [onSave] -> if status is 'passed_challenge' and challenge_time <= 30 minutes then "send and email with google form link" as well as calendar to select a time slot for the on-site interview.



API endpoints:
GET  /
POST /inital_submit
POST /challenge_started
POST /challenge_submitted

