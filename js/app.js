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

function generic_function()
{
    console.log(`Hello!`);
}
generic_function();

function specific_greeting(str)
{
    console.log(`Hello ${str}`);
}

specific_greeting(`isael`);
specific_greeting(`amy`);
specific_greeting(`claudine`);

function find_specific_user(arr, user)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].includes(user))
        {
            return true;
        }
    }
    return false;
}

let users = [`isael`, `greedo`, `han`];
let contain_admin = find_specific_user(users, `admin`);