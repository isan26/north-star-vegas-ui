# Components Directory Structure

This directory is organized into two main folders for better maintainability and code organization:

## 📁 `/generic`
Contains reusable, generic components that can be used across multiple pages or applications.

### Current Components:
- **ProgressBar.js** - A customizable progress indicator component with step tracking

### Usage:
```javascript
import { ProgressBar } from './components/generic';
// or
import { ProgressBar } from './components';
```

## 📁 `/pages`
Contains page-specific components that represent entire screens or steps in the application flow.

### AI Consultant Application Flow:
- **InterestStep.js** - Initial interest question page
- **ContactFormStep.js** - Contact information collection form
- **ThankYouGenericStep.js** - Thank you page for non-interested users
- **ThankYouSuccessStep.js** - Success page for submitted applications

### Legacy Components (Original Duolingo-style Wizard):
- **WelcomeStep.js** - Welcome/onboarding page
- **ProfileSetupStep.js** - User profile setup
- **GoalSelectionStep.js** - Goal selection interface
- **PreferencesStep.js** - User preferences configuration
- **CongratulationsStep.js** - Completion celebration page

### Usage:
```javascript
import { InterestStep, ContactFormStep } from './components/pages';
// or
import { InterestStep, ContactFormStep } from './components';
```

## 🔄 Import Pattern

All components can be imported from the root components directory:

```javascript
// Import everything you need in one line
import { 
  ProgressBar,           // from generic/
  InterestStep,          // from pages/
  ContactFormStep,       // from pages/
  ThankYouGenericStep,   // from pages/
  ThankYouSuccessStep    // from pages/
} from './components';
```

## 📋 Guidelines

### When to add to `/generic`:
- Reusable UI components (buttons, modals, form fields, etc.)
- Utility components (loaders, spinners, etc.)
- Layout components (headers, footers, sidebars, etc.)
- Components that don't contain business logic

### When to add to `/pages`:
- Complete page components
- Step components in a workflow
- Components with specific business logic
- Screen-level components

## 🔮 Future Additions

Consider adding these generic components as the application grows:
- LoadingSpinner
- Modal/Dialog
- CustomButton
- FormField
- Toast/Notification
- ErrorBoundary
