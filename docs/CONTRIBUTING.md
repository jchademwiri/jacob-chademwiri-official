# Contributing Guide

Thank you for your interest in contributing to the Jacob Chademwiri portfolio website! This guide will help you get started with contributing to the project.

## 🤝 How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug Reports**: Help us identify and fix issues
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Submit bug fixes or new features
- **Documentation**: Improve or add to our documentation
- **Design Improvements**: Enhance the visual design or user experience
- **Performance Optimizations**: Help make the site faster and more efficient

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended package manager)
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository**

   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/jacob-chademwiri-official.git
   cd jacob-chademwiri-official
   ```

2. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/jchademwiri/jacob-chademwiri-official.git
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Create environment file**

   ```bash
   cp .env.local.example .env.local
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

## 🔄 Development Workflow

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - UI/styling changes
- `refactor/` - Code refactoring
- `perf/` - Performance improvements

Examples:

```bash
git checkout -b feature/add-project-filtering
git checkout -b fix/mobile-navigation-bug
git checkout -b docs/update-api-documentation
```

### Commit Message Convention

Follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
git commit -m "feat(projects): add filtering by technology"
git commit -m "fix(navigation): resolve mobile menu overlay issue"
git commit -m "docs(readme): update installation instructions"
```

### Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**

   ```bash
   # Build the project
   pnpm build

   # Run linting
   pnpm lint

   # Test in development
   pnpm dev
   ```

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to GitHub and create a pull request
   - Use the pull request template
   - Provide clear description of changes
   - Link any related issues

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type when possible
- Use meaningful variable and function names

```typescript
// Good
interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onSelect?: (project: Project) => void;
}

// Avoid
interface Props {
  data: any;
  flag?: boolean;
}
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Handle loading and error states

```typescript
// Good
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        disabled && 'btn-disabled'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use consistent spacing and typography
- Avoid custom CSS when possible

```typescript
// Good - Using Tailwind utilities
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

// Avoid - Custom CSS classes
<div className="custom-grid-layout">
```

### File Organization

- Keep files small and focused
- Use descriptive file names
- Group related files together
- Follow the established folder structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── sections/     # Page sections
│   └── forms/        # Form components
├── data/             # Static data
├── hooks/            # Custom hooks
├── lib/              # Utilities
└── types/            # Type definitions
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

Before submitting a pull request, test:

- [ ] **Functionality**: All features work as expected
- [ ] **Responsive Design**: Test on mobile, tablet, desktop
- [ ] **Cross-Browser**: Test in Chrome, Firefox, Safari
- [ ] **Accessibility**: Keyboard navigation and screen readers
- [ ] **Performance**: No significant performance regressions
- [ ] **Build**: Project builds successfully

### Automated Testing (Future)

When automated tests are implemented:

```bash
# Run unit tests
pnpm test

# Run integration tests
pnpm test:integration

# Run end-to-end tests
pnpm test:e2e
```

## 📋 Pull Request Template

When creating a pull request, use this template:

```markdown
## Description

Brief description of changes made.

## Type of Change

- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing

- [ ] I have tested these changes locally
- [ ] I have tested on mobile devices
- [ ] I have tested in multiple browsers
- [ ] I have updated documentation if needed

## Screenshots (if applicable)

Add screenshots to help explain your changes.

## Related Issues

Closes #(issue number)
```

## 🐛 Bug Reports

When reporting bugs, please include:

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**

- OS: [e.g. Windows 10, macOS Big Sur]
- Browser: [e.g. Chrome 96, Firefox 95]
- Device: [e.g. iPhone 12, Desktop]
- Screen size: [e.g. 1920x1080, 375x667]

**Additional context**
Add any other context about the problem here.
```

## 💡 Feature Requests

When suggesting features, please include:

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
A clear description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.

**Implementation ideas**
If you have ideas about how this could be implemented, please share them.
```

## 🎨 Design Contributions

### Design Guidelines

- Follow the existing design system
- Maintain consistency with current UI
- Consider accessibility in all designs
- Provide designs for mobile and desktop
- Use the established color palette and typography

### Design Assets

When contributing designs:

- Provide Figma files or similar
- Include design specifications
- Show different states (hover, active, disabled)
- Consider dark and light themes

## 📚 Documentation Contributions

### Documentation Standards

- Write clear, concise explanations
- Include code examples where helpful
- Keep documentation up to date
- Use proper markdown formatting
- Include screenshots for visual features

### Documentation Types

- **API Documentation**: Data models and interfaces
- **Component Documentation**: Usage examples and props
- **Setup Guides**: Installation and configuration
- **Tutorials**: Step-by-step guides
- **Troubleshooting**: Common issues and solutions

## 🔍 Code Review Process

### What We Look For

- **Functionality**: Does the code work as intended?
- **Code Quality**: Is the code clean and readable?
- **Performance**: Are there any performance implications?
- **Security**: Are there any security concerns?
- **Accessibility**: Is the feature accessible?
- **Documentation**: Is documentation updated if needed?

### Review Timeline

- Initial review within 2-3 business days
- Follow-up reviews within 1-2 business days
- Merge after approval and passing checks

## 🏆 Recognition

Contributors will be recognized in:

- GitHub contributors list
- Project documentation
- Release notes for significant contributions

## 📞 Getting Help

If you need help:

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: jacob@jacobc.co.za for direct communication

## 📄 Code of Conduct

### Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

### Unacceptable Behavior

Examples of unacceptable behavior include:

- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## 📝 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to the Jacob Chademwiri portfolio website! Your contributions help make this project better for everyone.
