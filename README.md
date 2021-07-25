# The Library

- This was an extremely interesting challenge, and without a doubt the hardest one yet.

- The assignment asks to create books using an object that has title, author, number of pages and read status variables.

- Coming from classes in Python, this was a fairly straightforward task.

- However, the issues arose when trying to store the information in localStorage.

- It took me the better part of 2 days to finally figure out where I was going wrong on multiple problems. The first issue I had was that the css elements would be removed after a refresh. To tackle this, I had to call my display function when the page is reloaded in order to restore the visuals of my data on the page.

- After this, my entire array would lose all its data after refreshing. The reason for this was that after refreshing the page, my getItem function would update the array as empty instead of recovering the previous data. To fix this, I had to append the data to the array upon restoring.

- This was an exceptionally tricky challenge for me, despite this, I have learned a great deal about the localStorage object and also about JSON, whilst I have a lot more to learn about JSON, I have dipped my toe in the water with it and will feel a lot more confident learning about in the future.
