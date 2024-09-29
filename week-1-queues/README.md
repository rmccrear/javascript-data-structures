# Queues

## Introduction

A queue is a data structure that follows the First-In-First-Out (FIFO) principle, allowing elements to be added at the rear and removed from the front.

It can be implemented in JavaScript with an array and the methods `push` and `shift`.

It has two main methods: `enqueue` and `dequeue` for putting on and taking off an item.

There are other optional methods such as `peek`  which shows the next in line without removing it and is `isEmpty`.

Read more about queues  [here](https://www.geeksforgeeks.org/queue-data-structure/)

## Task

Read the Kata in the [kata.md](kata.md) file. Try implementing the queue with a class and an array to use as storage.

When you finish, try again without looking at the instructions. Do it once a day until you can write a queue from memory. Like a [kata](https://www.youtube.com/watch?v=dKfL_KpjUeE) in karate.

Hee-ya!

## Examples

There are optional example files for you to look at: `pokemon-fetch-run.js`, `pokemon-task-queue.js`, and `pokemon-task-queue-run.js`.

After you finish with your kata, you may have a look at the `pokemon-task-queue` for a "real life" example of a queue in action. You don't need to understand everything about the task queue. You can run examine the code and try it out with:

    node pokemon-task-queue-run.js

Compare it to not using a queue with:

    node pokemon-fetch-run.js

Have a look at how the Task Queue uses a regular Queue to accomplish its job.

Feel free to modify the code to experiment with what happens!
