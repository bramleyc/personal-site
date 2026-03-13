## Introduction

I got into testing because I liked to understand how things worked, not to break them. I liked writing code, and still do, so I was keen to shed that cliche that followed the job title around. I wanted to understand the system, and use that understanding to stop things going wrong in the first place. Build not break.

That philosophy has carried through most of my career, but lately it has led me somewhere I did not quite expect: questioning whether the way we build and ship software - the whole workflow, the software development lifecycle, the process, the gates, the checks, and so on - is going to be relevant for much longer. Or whether we need a fundamental rethink. 

Of couse, it's AI that's brought this front and centre of my thinking in 2026.

Because the SDLC was designed for _us_. People. Different roles, different points of input, different points of handoff, different points of view. I'm starting to reframe this thinking. Do I need to know the internals, or do I need to care about the business logic and customer experience? Without getting ahead of myself, will I even be able to _understand_ the code if we shift away from it being human-optimised to it being AI-optimised? Well, let's see, but before I go off on a tangent, let's bring it back to what is actually happening here and now and what I think it means for the role or testing and quality in 2026.

---

## The whiteboard diagram

You have seen the diagram. Boxes in a row, arrows going left to right, occasional arrow going backwards labelled "defect found". Development, QA, UAT, Release. Sometimes there is a Staging box. Sometimes there are two arrows going backwards. Or maybe it's an infinity-dev-test-ops loop. It goes into a Google doc, or a Confluence page, or a slide deck, and six months later someone draws it again from scratch because nobody knew the original existed.

That diagram describes a workflow designed around how humans work. We write code incrementally, so we need review points. We make mistakes we cannot see ourselves, so we need someone else to look. We hand work off between people - the business need, the product vision, the implementation detail, the customer experience - so we need a defined moment when something is "ready to test". The phases exist because without them, people lose track.

None of that is wrong exactly. It has made software meaningfully more reliable over the past few decades. But it is worth being clear about what it actually is: a set of compensations for human limitations or needs. We built the process around ourselves because we were the ones doing it.

What happens, then, when we are not the ones doing it?

---

## The blob

When an AI agent takes a user story and generates code, tests, and a deployment plan as a single event, the phases do not really apply anymore. There is an input and an output, and a lot of things happen in between that do not pause at the places we built our checkpoints around. I have started thinking of this as the blob - not in a dismissive way, but as an honest description of what the process looks like in my mind. Traditionally you might call it a black box but that feels too rigid a description for AI. The walls aren't fixed. So, a blob it is. If it helps I picture Flubber when I think about it...

Either way, the blob is fast. It does not wait for a QA sign-off column in a sprint board. It does not need a handoff meeting. And it raises a question that I find genuinely interesting rather than alarming: **if people are not part of the workflow, why are we designing the workflow around people?**

There is a specific risk here that I think is easy to underestimate. If the AI generates both the code and the unit tests from the same specification, you have a system where the verification was produced by the same process as the thing being verified. That is fine if the specification is right. If the specification is ambiguous or wrong, the code and the tests may both be confidently, consistently wrong together, and you would not know until a user found it.

This is not a new category of problem - we have always had to worry about testing the wrong thing - but the scale and the speed at which it can now happen is new. And our existing quality models were not really designed to catch it. We need to make sure we feed the blob well... or something like that.

---

## What was actually worth doing all along

Something I have come to think over the years, something that I think holds up pretty well in this new context: testing alone does not improve quality. It sounds obvious saying (or writing) it. But what improves quality is building it in earlier. Shifting left, or preventing defects over detecting them, has always been about finding the point where intervention is cheapest and most effective.

In an AI-assisted workflow, I think that point moves further left than most of us are used to. It moves to the specification. If the AI builds what you describe, then describing it poorly is the primary failure mode. The quality effort that has the most leverage is the effort that goes into catching ambiguity, contradiction, and missing requirements before anything is generated. That is not a new idea. It is just that the cost of getting it wrong has gone up considerably, because it will be the last chance we have to get it right.

---

## What might replace the phases

I want to be careful not to make this sound more than the stream of consciousness that it is. I have been in this industry long enough to be suspicious of anyone who has a complete answer to a question that is still forming. But there are some things that seem to make sense from the direction I am looking.

Testing the output rather than the implementation starts to matter more. End to end user journeys, contract tests at service boundaries, non-functional checks for security and performance and accessibility - these test what the system does rather than how it does it. They survive a complete rewrite of the internals, which is relevant when the internals might be regenerated entirely at any moment.

It also comes from experience - I had a conversation with a senior test engineer just this week who pointed out one of the logical fallacies we face. We write tests for what we expect to happen or some edge cases - ie the happy path stuff and some obvious boundary issues. But we also write the code for this, because it's what we test for or describe in our acceptance criteria. The failures we tend to see very often have nothing to do with what we expect to happen or what we expect to fail - it's infrastructure, dependencies, performance, race conditions, and so on.

So it's not that these tests are worthless, but that production becomes a quality signal in a way that is hard to ignore. If deployment is autonomous and fast, detection and response need to be equally fast. Progressive rollout with automated rollback based on real outcome signals - conversion rates, error rates, latency - is not a nice-to-have. It is how you stay safe when you have removed the manual checkpoint at the door.

And so the specification itself, the thing that feeds the blob, needs to be treated as a quality artefact. Something that is reviewed with a critical eye that often only test engineers have, challenged, and stress-tested before it becomes the input to an automated system that will do exactly what it says. Garbage in, garbage out.

---

## A genuinely open question

I keep coming back to something from Zen and the Art of Motorcycle Maintenance - I mentioned this in the Q&A thing on here - a book that sounds like it has nothing to do with software and then turns out to be entirely about it (and that I've been looking for reasons to shoe-horn in to software testing for a decade). At its heart it is asking what quality actually is, because it is not really measurable, and is often based on feeling and intuition. That resonated with me when I first read it and it keeps resonating now. It's not test coverage. It's what comes out at the end - and to be clear, that _end_ can be both the user experience as well as the ongoing maintenance for the engineers.

Because the question of what quality looks like in an AI-assisted world is not purely a process question. It is also a question about what we value, what we want to protect, and who ultimately bears responsibility when something goes wrong. _Those_ are human questions that we can optimise for. The workflow can change substantially but at the end of the lifecycle, or process, or blob output, they remain.

I don't have a clean answer to where all this lands. What I am fairly sure of is that copying our existing processes into an AI-assisted world without examining why they exist is probably not the right move. 

The workflow was designed for us. We are no longer the ones doing it. That seems worth thinking about.
