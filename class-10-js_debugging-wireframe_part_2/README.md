# Class 10: JS Debugging and More CSS Layout

## Today's Plan: Week 2, Friday Lecture


#### Quiz 6 will be published this afternoon, and will be due at 11:59 pm Sunday night.

**Announcements**

 - Any general questions?
 - You have a fair amount of work for lab time today and the weekend. There's three parts:

	- 1. Finish the Salmon Cookie project
	- 2. Complete the wireframe exercise that we will work on in class today
	- 3. Complete the design comp lab assignment that you'll get this afternoon
	- 4. Three chapters to read for Monday; these are not essential for the work we're doing next week, but more supplemental information. Feel free to put these off a bit, since late submissions of reading assignments are not penalized.


**We'll wrap class somewhere between 11:30 and 11:45 today so that we have a break before... [Partner Power Hour: The Art of Growing a Software Career, with Dawn Walker of Alaska Airlines](https://www.eventbrite.com/e/partner-power-hour-the-art-of-growing-a-software-career-tickets-36282821897)**


---

- Recent 201 final projects? Here's links to a few to peruse:
	- [Slash Whooo?](http://wohlfea.github.io/cup-game)
	- [Echelon.JS](https://flegald.github.io/Echelon.JS)
	- [Note Fellows](https://clee46.github.io/note-fellows)
	- [Equip](http://heyduckd.github.io/equip/)
	- [Bro Nacho](http://bronacho.com)
	- [Welcome to Seattle](http://peterbreen.github.io/welcome-to-seattle/)
- Code Review

*10-minute break*

- [JS Debugging ](#debugging)

*10-minute break*

- [CSS Wireframe Exercise](#wireframe)

---

**Learning Objectives**

As a result of completing Day 10 of Code 201, students will:

- Have nailed down the functionality of their retail/data/table app, as measured by successful completion of the daily code assignments of the previous four days.
- Demonstrate understanding of fundamental CSS layout principles including block, inline, normal, relative, absolute, float, and fixed, as measured by successful completion of the daily code assignment and on a quiz administered in Canvas
- Be able to engage in discussion and demonstrate understanding of advanced CSS layout topics such as frameworks or responsive design, as measured by observation of the instructional staff.
- Be able to engage in discussion and demonstrate understanding of a variety of JS debugging techniques, including using console messages, the debugger statement, and debugging methodology as measured by observation of the instructional staff.

- JS book, Chapter 10: Error Handling & Debugging

[-top-](#top)

<a id="debugging"></a>
## JS Debugging

**JS book, Chapter 10: Error Handling & Debugging (pp.449-486)**

- You know the old saying to 'Better to work smart than work hard'? This chapter is all about the 'working smart' part of things.

- Of course, keep in mind that you're up against a lot of people who work smart ***and*** work hard.

- We're only going to focus on the most important parts of this chapter, and cook it down to the most basic things that will help you to keep moving forward when you code.

- There's a lot of techniques you can use for debugging that are outlined in this chapter, and you should take time to experiment with all of them and see which ones work best with your cognitive workflow.

- Ultimately, you'll develop a favorite set of tools and trick that mesh with your cognitive processes, or you might have to fall in line with the standard debugging practices of an employer. There's many possible ways to do things, and none are really more 'right' or 'wrong' than any other in concept, but only in application and workflow efficiency.

- General remark: error messages are only useful to you when you actually look into the console. So, if that's not a regular part of your workflow, make it one.

- It's important to learn how to treat error messages as valuable pieces of information, not just red garbage that appears in your console. Learning to decode error messages points you to not only where they are, but also the most likely part of that line to cause the problem. The more practice you get, the more you can rapidly interpret messages and debug effectively.

- p.452: Order of execution (declarations vs. calls)
- p.453: Execution contexts (context vs. scope)
- p.454: The Stack
- p.456: Hoisting
- p.457: More on scope
- p.458: Understanding errors
- p.459: Error Objects [IMPORTANT!]
  - Error (general)
  - SyntaxError
  - ReferenceError
  - TypeError
  - RangeError
  - URIError
  - EvalError
- p.463: Debugging workflow
- p.472: More console methods *(Aside: console messages can get clunky, and you don't want to pollute production code with a lot of them, but they're very useful when constructing code. In particular, they provide a window into code that is executing in some local scope that cannot be inspected by hand in the globally-scoped console.)*
- p.472: Grouping messages
- p.475: console.assert()
- p.476: Breakpoints
- p.479: Debugger keyword
- p.480: Handling exceptions with `try`, `catch`, and `finally`
- p.484: Debugging tips [IMPORTANT!]
- p.485: Common errors [IMPORTANT!]

[-top-](#top)

<a id="wireframe"></a>
## CSS Wireframe Exercise

Let's take a look at a workflow commonly used by professional front-end developers by getting started on a wireframe exercise.

[-top-](#top)
