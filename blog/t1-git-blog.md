


# Gotta Git Up
### Early Reflections on Git and GitHub
### Sounds Like: [Harry Nilsson](https://www.youtube.com/watch?v=IKy_gTrdXaU)
#### 09/21/2014

*Version Control* is one of those phrases that you utter in title case. To the uninitiated, the import of version control is as obvious as the tedium of practicing it. I imagine that until recently it was true that it was a boring chore. Luckily, with Git, robust version control is so easy that you don't have time to become bored.

First, let's throw out some quick
#### Vocabulary
* git : a package of software, commonly run from the command line, that allows for quick synchronziation with remote projects, and automates thorough record keeping.

* repo : shorthand for repository. the directory containing all the files of a project. a repo could be hosted locally, on a user's machine, or online for shared acccess. with git, repos are hosted in both places, and connected.

* GitHub : an online site and community where coders host their repos

* fork : create a new branch off of a repo

* branch : a version of a repo; users can switch between branches and merge them

* master : the name commonly given to the branch of a repository that will be used to provide the most current updates to the main version

* clone : create a local copy of a repo from an online repo (or vice versa), with a link between the two that can be invoked with git

* commit : a change that has been solidified as being appropriate for the current version of a repo

* staged/unstaged : the status of whether a change is ready to be commited once the commit command is given

...that's enough jargon for now. Let's move on to an illustrative metaphor.

Let's say you've just spent the last hour working out a bug in some code. The pneumatic tube system that delivers groceries around your space station was misbehaving; maybe it was always getting the addresses wrong when bringing groceries to residents whose surnames started with *µ*.

So you work out the bug, it passes your tests, and you're ready to update the main pneumatic tube computer with your fix. Let's say the file you were troubleshooting is called `destination.tube`

You've been diligently saving your changes to destination.tube as you worked. Because this is a git-enabled repository you're working on your local device, git already knows that you've made changes that have caused your local repo to look different than the repo in the space station central computer.

If you type (into the command line) `git status` your interface will let your know that you've altered `tube_main/tube_brain/destination.tube` but will have that file on a list of `Changes not staged for commit:`

Everything except checking `git status` has not involved you using git at all. Git has just been a passive monitoring tool. That means that during all the in-depth code work you did on `destination.tube` using your hard-earned pneumatic programming skills, you didn't have to spare a thought for version control.

Now, however, you're done with the technical stuff that landed you the sweet space station job. It's time to update the space station central's computer with your work.

Using Git, I began to think of a physical metaphor. Picture that, next to your computer, you have a big brass lever. (This space station is fast becoming steam punk.) You use the lever to slot your change into the larger system. You love to use the lever; it's a deeply satisfying conclusion to a job well done.

From within the project directory, you enter the command `git add destination.tube`.