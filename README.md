# 017_VoTrongQuangHuy


## 2. Diagram
<img width="356" alt="Screenshot 2023-10-14 at 00 14 03" src="https://github.com/quanghuy1994/017_VoTrongQuangHuy/assets/17582133/cd04e41a-5c5e-4788-bc15-b71c38885f4c">

## 3. More Detail
 the user begins with accessing the website. Next, the system checks if the user is authorized or not. Once authorized, the user is allowed to do action to increase the score, which in turn triggers an API call to the Scoreboard Update API Service. At this stage, the system attentively processes the request. When the data successfully passes validation, the system proceeds to update the user's score, reflecting their recent achievement or activity. Subsequently, the system refreshes the website, ensuring that the user and others can promptly see the updated score.
## 4. Comment for the backend team
### 1. User Authentication:
Ensure that only authenticated users can make score updates. Implement a robust user authentication system, such as username/password, API keys, or OAuth tokens.
### 2. Authorization:
Define access controls to determine which users have the authority to update scores. Ensure that each API request includes the user's credentials or a token that proves their identity.
### 3. Rate Limiting:
Implement rate limiting to prevent users from making an excessive number of requests in a short period. This can deter spam and abuse.
### 4.Data Validation:
Thoroughly validate the data provided in the API request. Ensure that user IDs, action IDs, and score increments are within expected ranges and formats. Reject requests with invalid data.
