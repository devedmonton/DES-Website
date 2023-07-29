# Welcome to the Dev Edmonton Society contributing guide!

Thank you so much for you interest! We are very excited about working with you and hopefully adding you to our contributors list on the `README.md`!

[Code of conduct](https://devedmonton.com/code_of_conduct)

# New contributor guide

Are you new to open source? Start here!

-   Fork this repo
-   Clone to your local system
-   Follow the `README.md` instructions to get it running
    -   Note: you will have to match your node version to our node version. It's the first step in the `README.md` but it frequently gets missed! `nvm use`
-   Look through our issues and decide one that looks easy or has a `good first issue` tag on it.
    -   Normally you would just be able to assign an issue to yourself but the permissions for this repo are weird.
    -   You might have to DM Mandy Meindersma on the DES slack and she can assign you to the issue you want
-   Make the coding changes required for that issue
    -   You will probably want to instal prettier on whatever editor you are using to save you a lot of headaches later.
-   Make sure to run the linter!!! (instructions in the `README.md`)
-   Make a pull request and fill out the portions of the template
-   Moderators will be notified that you made your pr. You won't be able to add reviewers but we will see it and get to it! I promise
-   Address any feedback the reviewers have, they will merge it in after they are okay with everything
-   Be added to our contributors list!

# FAQ

### I have some error and I do not understand what it means. WHat do I do?

1. Have you checked your node versions?
2. Feel free to DM one of the recent contributors on the DES slack, Mandy Meindersma is probably a good pick to help.

### Do we follow any naming conventions for branches or anything else?

-   Not really. We aren't picky about branch or commit names. We might be picky about variable names, just that you picked one that would make sense to a lot of people. We are very picky about our linking though! Run the linter!

# Windows

If you have a windows machine there might be a couple issues that come up. Some that we know so far:

-   You might have to remove the single quotes in the `lint-check` [file list](https://github.com/devedmonton/DES-Website/blob/main/package.json#L13). Just don't commit this change when you make your pr.
-   `nvm use` doesn't seem to find the correct node version. Check the `.nvmrc` file to see what version we are at
