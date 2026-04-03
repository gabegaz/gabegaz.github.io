# Gemini CLI Refactor Prompt: Premium Consulting Hero

**Context:** This is a portfolio for a consultant who targets CEOs, investors, and policymakers. The style should be "McKinsey meets Stripe"—authoritative, clean, and technologically sophisticated.

**Task:** Refactor the following React/Next.js Hero component.

**Requirements:**

1.  **Typography & Hierarchy**:

    *   Use a more aggressive scale for the H1 (e.g., `text-6xl` to `text-8xl`).
    *   Implement `tracking-tighter` for headings and `leading-relaxed` for body text.
    *   Add a subtle "eyebrow" tag (small, uppercase, wide letter-spacing) above the main headline for immediate context.
2.  **Visual Sophistication**:

    *   Introduce a subtle background element (e.g., a radial gradient, a mesh glow, or a very faint grid pattern) to provide depth without distraction.
    *   Use a "glassmorphism" effect or a refined border for the secondary CTA.
3.  **Motion & Interaction**:

    *   Use **Framer Motion** with a sophisticated easing curve: `ease: \[0.16, 1, 0.3, 1]`.
    *   Implement a `staggerChildren` transition so the eyebrow, headline, and buttons animate in sequence.
4.  **Code Cleanliness**:

    *   Consolidate redundant Tailwind classes (especially the responsive padding/margin logic).
    *   Ensure the layout is perfectly balanced on both mobile and ultra-wide screens.
5.  **Component Code:**

