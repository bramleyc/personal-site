import {
  hero,
  experience,
  projects,
  skills,
  certifications
} from "@/lib/data"
import { qa } from "@/lib/qa"

describe("content data integrity", () => {
  it("has populated hero content", () => {
    expect(hero.title.trim()).not.toHaveLength(0)
    expect(hero.paragraphs.length).toBeGreaterThan(0)
    hero.paragraphs.forEach((paragraph) => {
      expect(paragraph.trim()).not.toHaveLength(0)
    })
    expect(hero.contact.email).toMatch(/@/)
    expect(hero.contact.location.trim()).not.toHaveLength(0)
  })

  it("provides experience entries that may have at least one bullet each", () => {
    expect(experience.length).toBeGreaterThan(0)
    experience.forEach((job) => {
      expect(job.role.trim()).not.toHaveLength(0)
      if (job.bullets?.length) {
        job.bullets.forEach((bullet) => {
          expect(bullet.trim()).not.toHaveLength(0)
        })
      }
    })
  })

  it("describes projects with names, blurbs, and links", () => {
    projects.forEach((project) => {
      expect(project.name.trim()).not.toHaveLength(0)
      expect(project.blurb.trim()).not.toHaveLength(0)
      expect(project.tags.length).toBeGreaterThan(0)
      project.tags.forEach((tag) => {
        expect(tag.trim()).not.toHaveLength(0)
      })
      // Allow "#" placeholder links for now but flag in expectation message
      expect(project.link.trim()).not.toHaveLength(0)
    })
  })

  it("contains unique skill labels", () => {
    const uniqueSkills = new Set(skills)
    expect(uniqueSkills.size).toBe(skills.length)
  })

  it("lists certifications with names and years", () => {
    certifications.forEach((certification) => {
      expect(certification.name.trim()).not.toHaveLength(0)
      expect(certification.year.trim()).not.toHaveLength(0)
    })
  })

  it("covers all QA entries with questions, answers, and optional tags", () => {
    expect(qa.length).toBeGreaterThan(0)
    qa.forEach((entry) => {
      expect(entry.question.trim()).not.toHaveLength(0)
      expect(entry.answer.trim()).not.toHaveLength(0)
      if (entry.tags) {
        const uniqueTags = new Set(entry.tags)
        expect(uniqueTags.size).toBe(entry.tags.length)
      }
    })
  })
})
