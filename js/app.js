let usernames = [`USER_one`, `User_two`, `USER_THREE`, `user_four`, `user_WINNER`];

let i = 0;

while(i < usernames.length)
{
    let lower_case_username = usernames[i].toLowerCase();
    
    if (lower_case_username.includes(`winner`) === true)
    {
        console.log(`Our winner is ${lower_case_username}`);
    }
    i++;
}


