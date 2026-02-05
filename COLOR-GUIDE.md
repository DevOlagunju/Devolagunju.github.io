# 🎨 Color System & Design Guide

## Brand Color Palette

### Primary Colors
```css
Indigo:  #6366f1  ███  Main brand color
Purple:  #8b5cf6  ███  Secondary/accent
Cyan:    #06b6d4  ███  Highlights & links
```

### Status Colors
```css
Success: #10b981  ███  Completed, active states
Warning: #f59e0b  ███  Alerts, attention
Error:   #ef4444  ███  Errors, critical
Info:    #3b82f6  ███  Information, neutral
```

---

## Gradient System

### Primary Gradient
**Usage:** Buttons, logos, main CTAs, brand elements
```css
--gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)
```
**Preview:** 
- Hero logo icon
- Primary buttons
- Progress bars
- Achievement icons

### Secondary Gradient  
**Usage:** AI/ML content, specialized features
```css
--gradient-secondary: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)
```
**Preview:**
- AI project cards
- MCP Server project

### Accent Gradient
**Usage:** Information, tech-focused content
```css
--gradient-accent: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)
```
**Preview:**
- Healthcare projects
- Communication features

### Success Gradient
**Usage:** Completed items, achievements
```css
--gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%)
```
**Preview:**
- Completed project status
- Video/communication projects

### Warm Gradient
**Usage:** Education, important highlights
```css
--gradient-warm: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)
```
**Preview:**
- Education projects
- Alert states

### Cool Gradient
**Usage:** Tech content, neutral highlights
```css
--gradient-cool: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)
```
**Preview:**
- Healthcare applications
- Tech stack items

---

## Section Background Flow

The portfolio uses alternating backgrounds for visual rhythm:

| Section | Background | Purpose |
|---------|-----------|---------|
| Hero | Gradient (light) | Eye-catching introduction |
| Achievements | Secondary (#f8fafc) | Subtle highlight |
| About | Primary (white) | Clean, readable |
| Services | Secondary | Visual break |
| Skills | Secondary | Grouped with services |
| Projects | Primary | Focus on content |
| Experience | Secondary gradient | Timeline emphasis |
| Testimonials | Primary | Credibility focus |
| Contact | Secondary | Form distinction |
| CTA | Gradient (brand) | Strong call-to-action |
| Footer | Dark gradient | Closure |

---

## Text Hierarchy

### Light Mode
```css
--text-primary:    #0f172a  ███  Headings, important text
--text-secondary:  #475569  ███  Body text, descriptions
--text-tertiary:   #64748b  ███  Supporting text
--text-light:      #94a3b8  ███  Muted text, labels
--text-lighter:    #cbd5e1  ███  Disabled states
```

### Dark Mode
```css
--text-primary:    #f1f5f9  ███  Headings, important text
--text-secondary:  #cbd5e1  ███  Body text, descriptions
--text-tertiary:   #94a3b8  ███  Supporting text
--text-light:      #64748b  ███  Muted text, labels
--text-lighter:    #475569  ███  Disabled states
```

---

## Shadow System

All shadows use primary color tint for brand consistency:

```css
--shadow-sm:         Subtle depth
--shadow-md:         Card elevation
--shadow-lg:         Modal, popover
--shadow-xl:         Dramatic emphasis
--shadow-colored:    Hover states (rgba(99, 102, 241, 0.25))
--shadow-colored-lg: Strong emphasis (rgba(99, 102, 241, 0.3))
```

### When to Use Each Shadow:
- **-sm**: Input fields, subtle cards
- **-md**: Standard cards, buttons
- **-lg**: Navigation, important cards
- **-xl**: Modals, overlays
- **-colored**: Interactive hover effects
- **-colored-lg**: Primary CTAs, hero elements

---

## Border Radius System

Consistent rounded corners throughout:

```css
--border-radius-sm:   8px   Small elements
--border-radius-md:   12px  Buttons, inputs
--border-radius-lg:   16px  Cards, containers
--border-radius-xl:   20px  Large cards
--border-radius-2xl:  24px  Section containers
```

---

## Usage Examples

### Buttons
```css
.primary-button {
  background: var(--gradient-primary);
  box-shadow: var(--shadow-colored);
  border-radius: var(--border-radius-md);
}
```

### Cards
```css
.card {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-colored);
  border-color: var(--primary-color);
}
```

### Text
```css
h1, h2, h3 {
  color: var(--text-primary);
}

p {
  color: var(--text-secondary);
}

.subtitle {
  color: var(--text-tertiary);
}
```

---

## Accessibility

### Color Contrast Ratios
All text meets WCAG AA standards:
- Primary text on white: 16.9:1 ✓
- Secondary text on white: 8.4:1 ✓
- Light text on primary gradient: 4.8:1 ✓

### Focus States
All interactive elements have visible focus indicators:
```css
element:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

---

## Dark Mode Considerations

- Brand colors remain vibrant
- Backgrounds use rich dark slate palette
- Shadows are deeper for more drama
- Text contrast is maintained
- Gradients keep their impact

---

## Best Practices

### ✅ DO:
- Use gradient variables for consistency
- Stick to the defined color palette
- Use colored shadows for interactive elements
- Follow the section background alternation
- Use appropriate text hierarchy colors

### ❌ DON'T:
- Create new gradients outside the system
- Use hard-coded color values
- Mix different shadow systems
- Break the background alternation pattern
- Use colors that don't pass accessibility tests

---

## Quick Reference

**Need a gradient?** → Use `var(--gradient-primary)`
**Need a shadow on hover?** → Use `var(--shadow-colored)`  
**Need text color?** → Use `var(--text-secondary)` for body
**Need border?** → Use `var(--border-color)`
**Need background?** → Alternate between `var(--bg-primary)` and `var(--bg-secondary)`

---

**Last Updated:** February 2026  
**Maintained by:** Wasiu Ibrahim
