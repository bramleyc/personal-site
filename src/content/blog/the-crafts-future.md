# The Craft Is Not the Tests

So my last post talked about how I see the lifecycle and therefore approach to software testing changing - stuff goes into an AI blob and splurts out something at the other side, so quality needs to be on the input and output of the blob. I still don't think the blob analogy works entirely but it's what I'm rolling with for now.

But - as someone whose career has been in various Test Engineer guises - I have to address the scary question... What does it mean for my role? Because I'm pretty sure writing speculative blog posts is not the answer. And I'm equally sure that writing test cases isn't the answer either.

---

## What AI is actually replacing

Let me be straightforward about what changes. In a world where AI agents generate code and tests together from a specification, a significant portion of what a test engineer spent their time doing becomes automated. The unit test suite. The regression scenarios. The contract stubs. The execution and reporting. These things happen inside the build process without anyone writing a line of code. And even in my more stragetic role - I write an agent skill that encodes the quality strategy I've created and then over night every new commit follows the best guidance I can come up with. That should be a _dream_ scenario but it makes me ask... OK, what next? Have I automated my role out of existence, along with every other Test Engineer?

I remember when automation was going to make test engineers redundant. It did not, partly because the tools required engineering skills to use effectively, but mostly because the craft was always more than the manual test execution it was supposedly replacing. The tests were the output. The thinking that produced the tests - the edge case radar, the adversarial instinct, the understanding of how users actually behave versus how product owners and developers imagine they behave - _that_ was the job. Critical thinking, systems knowledge, customer focus.

GenAI feels different in scale and pace to anything that has come before, I will grant that. There is no hurdle to automation now, just type a few prompts. But I think the same principle applies. What is being automated is not the craft. It is the more operational expression of the craft, the part that was always slightly disconnected from the deeper thinking.

The slightly awkward truth is that a lot of experienced test engineers privately found that part a bit tedious anyway. Or maybe it's just me. Automating away the day to day has always been the goal, and AI doesn't change that. As a side note I spent about 30 minutes last night getting Claude to understand how I mark holidays in my Google calendar so that it could draft an email to the cattery with the correct dates for my two cats to stay while we were away. It would have been quicker to write the email myself - this time - but if I can hone that skill and automate it for every future holiday, I see that as a win. In my mind this comes from the same place - it's almost too _easy_ for me to do, I want to do something more exciting, and I think that applies to test engineering. Let's do something cooler than writing tests.

---

## The skills that transfer

Here is what I have seen, across a career that has taken me from waterfall organisations to fast-moving product companies: the test engineers who have the most impact are rarely the ones who write the most tests. They are the ones who can read a requirement and immediately see the things it does not say. They are the ones who ask inconvenient questions early enough that answering them is still cheap. They are the ones who can sit with a product manager and explain why a particular non-functional concern matters, and then define a measurable threshold that a pipeline can actually enforce.

_None of that is going anywhere_. If anything, in a model where AI builds what the specification describes, the ability to catch what the specification does not describe becomes super important. The specification is load-bearing in a way it has never been before. The quality effort that has the most leverage is the effort that goes in before anything is generated. Hey, it's shift-left, but not as we know it.

The adversarial instinct transfers too. Good testers are structured in their curiosity - they approach systems with a particular kind of creative suspicion that is hard to replicate through automation, precisely because automation can only test for things someone thought to test for. The value of a human asking "but what if someone does this?" scales up rather than down when the implementation is generated at speed and volume. Those test engineers that will succeed in the new world are the ones that are burning through tokens figuring out how Claude et al can help them.

And the ability to translate between technical and non-technical concerns - to move between a VP conversation about risk and a log file trying to track down a production issue, sometimes on the same afternoon - that is a blend of skills that does not reduce to any single specialism.

---

## The pivots that are genuinely necessary

I do not want to make this sound like everything carries over unchanged, because that is not quite right either. I think there is a core that remains, but a focus that shifts.

The thing that shifts most significantly is where the output of the quality engineering role sits. In a traditional model, the output is a test suite. In this model, the output is increasingly the rules and behaviours that govern the pipeline: what does the specification review agent check? What constitutes a breaking change to a contract? At what point do we roll back a deployment automatically, and based on what signal? These are design decisions, and they require a kind of systems thinking that goes beyond authoring test cases.

There is also a meaningful shift from being a checkpoint to being an influence. In most organisations I have worked in, the QA function has some formal authority - a release can be blocked, a ticket sent back for rework. In a model where the pipeline governs deployment and humans come in by exception, that formal authority largely disappears. What replaces it is the ability to make the case upstream - to make product teams write better specifications, to make the criteria for deployment genuinely meaningful, to shape what quality means before the question of whether it has been achieved even arises.

This is softer work and harder to demonstrate. Some people will find it more energising than what it replaces. Some will find it uncomfortable. Both reactions are understandable.

---

## What I keep coming back to

At Booking I spent time working on a career framework for test engineers. Six core competencies, and only one of them was actually executing testing. The rest covered things like advocacy - how test engineers influence their peers and their organisations to care about quality - and testability - making the act of testing easier and cheaper by building systems that support it. The framework tried to say: _the craft is not the tests_. The craft is everything that makes good software possible.

I think about that framing a lot in the context of AI. Because if the craft is the tests, we are in trouble. But if the craft is the adversarial thinking, the early intervention, the translation between what a system does and what it should do, the insistence on asking what could go wrong when everyone else is focused on shipping - then we are not in trouble. We are, arguably, in a more interesting position than we have ever been. We remove one competency - executing tests - and focus on the remaining five, all of which add value to the company and its engineers.

The tests were always a means to an end. The end was software that works, delivered safely, that does what it is supposed to do.

That end has not changed. The means are shifting. The question is whether the profession updates its idea of itself quickly enough to stay relevant to the end.

I think it can. I think the people who went into testing because they genuinely liked understanding how things worked - the build not break people - will find the pivot more natural than they expect. The instinct that led them here is the same instinct that is needed. It just needs pointing in a slightly different direction.

And if the next generation of engineers sees quality as something worth aspiring to rather than something imposed on them from the side - something built in rather than bolted on - then maybe that is the real measure of whether we got this right.

It's going to be a change, but I think we have the right skills and mindset to make it a success.
