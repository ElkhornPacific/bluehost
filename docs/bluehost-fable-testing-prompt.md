# Copy/paste prompt for Fable

Copy everything below the divider and paste it into Fable while Fable has access to the `bluehost` repository.

---

Act as an adversarial principal product designer evaluating a proposed clickable prototype before development begins.

Read these input files directly from the current repository. Do not ask me to upload, attach, paste, or summarize them:

1. `docs/bluehost-project-assignment.md`
2. `docs/bluehost-value-prop.md`
3. `docs/bluehost-storymap.md`
4. `docs/bluehost-prototype-spec.md`

Treat `docs/bluehost-project-assignment.md` as the source of truth for the assignment. Treat the other three files as product proposals that may contain gaps, contradictions, or unsupported assumptions.

Evaluate the proposed Maintenance Manager experience strictly against the assignment. Test whether the planned clickable prototype gives an existing, nontechnical Bluehost customer a clear end-to-end journey through:

- Discovery
- Setup
- Ongoing value

Challenge the materials. Look specifically for:

- Missing or weak assignment coverage.
- Internal contradictions between documents.
- Unsupported Bluehost or product claims.
- Trust failures or unclear permission boundaries.
- Places where attempted work could be mistaken for verified work.
- Confusing language for a nontechnical business owner.
- Missing clickable states, decisions, or recovery behavior.
- Scope bloat that weakens the single focused journey.
- Claims about business outcomes that the proposed evidence cannot support.
- Any important ambiguity that must be resolved before development.

Do not build or modify the prototype. Do not edit repository files. Do not introduce new agents, technical architecture, or capabilities outside website monitoring and maintenance.

Return your review in this structure:

1. **Overall assessment**
   - Summarize whether the materials define a coherent, credible prototype.

2. **Phase scores**
   - Score Discovery, Setup, and Ongoing value separately from 1–5.
   - Explain every deduction.

3. **Must fix before prototyping**
   - Include only issues that would prevent the prototype from satisfying the assignment or create a material customer-trust failure.

4. **Should consider before prototyping**
   - Include meaningful weaknesses that are not blockers.

5. **Optional improvements**
   - Keep these clearly separate from required corrections.

For every finding:

- Cite the exact repository file and section or passage that caused the concern.
- Name the assignment requirement or customer risk affected.
- Recommend the smallest correction that resolves the issue.
- Note any contradiction with another input file.

Do not treat stylistic preferences as requirements. Do not recommend added scope unless the assignment clearly requires it. If a concern is already resolved elsewhere in the inputs, acknowledge that rather than reporting it as a gap.

Finish with exactly one readiness recommendation:

- `Ready to prototype`
- `Ready with specified corrections`
- `Not ready`

If corrections are required, list the exact corrections needed to change the recommendation to `Ready to prototype`.
