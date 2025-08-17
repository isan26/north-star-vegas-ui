export const llcGameData = {
  1: {
    title: "Level 1: Choose a Name",
    description: "Learn the rules for naming your Nevada LLC!",
    color: "#58cc02",
    icon: "📝",
    questions: [
      {
        id: 1,
        question: "Which of these MUST be included in your Nevada LLC name?",
        options: [
          { text: "Limited-Liability Company, LLC, or LC", correct: true },
          { text: "Nevada or NV", correct: false },
          { text: "Your personal name", correct: false },
          { text: "The year it was formed", correct: false }
        ]
      },
      {
        id: 2,
        question: "Where can you check if your desired LLC name is available in Nevada?",
        options: [
          { text: "Google search", correct: false },
          { text: "Nevada Secretary of State business search", correct: true },
          { text: "Yellow Pages", correct: false },
          { text: "Local newspaper", correct: false }
        ]
      },
      {
        id: 3,
        question: "Can your LLC name be deceptively similar to another Nevada business?",
        options: [
          { text: "Yes, as long as it's not identical", correct: false },
          { text: "No, it cannot be deceptively similar", correct: true },
          { text: "Only if you get permission", correct: false },
          { text: "Only if you pay extra fees", correct: false }
        ]
      },
      {
        id: 4,
        question: "Which LLC name suffix is acceptable in Nevada?",
        options: [
          { text: "Corp.", correct: false },
          { text: "Inc.", correct: false },
          { text: "LLC", correct: true },
          { text: "LTD", correct: false }
        ]
      },
      {
        id: 5,
        question: "What should you do before finalizing your LLC name?",
        options: [
          { text: "Register a trademark immediately", correct: false },
          { text: "Check domain name availability", correct: false },
          { text: "Search the Nevada Secretary of State database", correct: true },
          { text: "Ask your neighbors", correct: false }
        ]
      }
    ]
  },
  2: {
    title: "Level 2: Registered Agent",
    description: "Understand the registered agent requirement!",
    color: "#1cb0f6",
    icon: "👤",
    questions: [
      {
        id: 1,
        question: "Is a registered agent required by Nevada law for LLCs?",
        options: [
          { text: "No, it's optional", correct: false },
          { text: "Yes, it's required by law", correct: true },
          { text: "Only for large LLCs", correct: false },
          { text: "Only if you have employees", correct: false }
        ]
      },
      {
        id: 2,
        question: "What type of address must a registered agent have?",
        options: [
          { text: "Any address will work", correct: false },
          { text: "A P.O. Box is sufficient", correct: false },
          { text: "A physical Nevada address", correct: true },
          { text: "An out-of-state address", correct: false }
        ]
      },
      {
        id: 3,
        question: "Who can serve as your registered agent?",
        options: [
          { text: "Only a lawyer", correct: false },
          { text: "Yourself, another individual, or commercial service", correct: true },
          { text: "Only a commercial registered agent service", correct: false },
          { text: "Any family member", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is the main responsibility of a registered agent?",
        options: [
          { text: "File your taxes", correct: false },
          { text: "Receive legal documents and state correspondence", correct: true },
          { text: "Manage your business operations", correct: false },
          { text: "Handle customer service", correct: false }
        ]
      },
      {
        id: 5,
        question: "Can you use a P.O. Box as your registered agent address?",
        options: [
          { text: "Yes, always", correct: false },
          { text: "No, you need a physical address", correct: true },
          { text: "Only for small LLCs", correct: false },
          { text: "Only with special permission", correct: false }
        ]
      }
    ]
  },
  3: {
    title: "Level 3: Articles of Organization",
    description: "Master the filing process with Nevada Secretary of State!",
    color: "#ff4081",
    icon: "📄",
    questions: [
      {
        id: 1,
        question: "What is the filing fee for Articles of Organization in Nevada (as of 2025)?",
        options: [
          { text: "$50", correct: false },
          { text: "$75", correct: true },
          { text: "$100", correct: false },
          { text: "$150", correct: false }
        ]
      },
      {
        id: 2,
        question: "Where do you file Articles of Organization in Nevada?",
        options: [
          { text: "Local courthouse", correct: false },
          { text: "Nevada Secretary of State", correct: true },
          { text: "IRS", correct: false },
          { text: "Nevada Department of Revenue", correct: false }
        ]
      },
      {
        id: 3,
        question: "Can you file Articles of Organization online in Nevada?",
        options: [
          { text: "No, only by mail", correct: false },
          { text: "Yes, online or by mail", correct: true },
          { text: "Only in person", correct: false },
          { text: "Only by fax", correct: false }
        ]
      },
      {
        id: 4,
        question: "What information is required in the Articles of Organization?",
        options: [
          { text: "Only the LLC name", correct: false },
          { text: "LLC name, registered agent, management structure, organizers", correct: true },
          { text: "Just the registered agent information", correct: false },
          { text: "Only the business purpose", correct: false }
        ]
      },
      {
        id: 5,
        question: "What are the two management structure options for Nevada LLCs?",
        options: [
          { text: "Corporate or partnership", correct: false },
          { text: "Member-managed or manager-managed", correct: true },
          { text: "Sole proprietor or corporation", correct: false },
          { text: "Domestic or foreign", correct: false }
        ]
      }
    ]
  },
  4: {
    title: "Level 4: Initial List Filing",
    description: "Learn about the required Initial List of Managers/Members!",
    color: "#9c27b0",
    icon: "📋",
    questions: [
      {
        id: 1,
        question: "When must the Initial List of Managers/Members be filed?",
        options: [
          { text: "Within 30 days of formation", correct: false },
          { text: "At the same time as Articles of Organization", correct: true },
          { text: "Within one year", correct: false },
          { text: "Only when requested", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the fee for filing the Initial List of Managers/Members?",
        options: [
          { text: "$75", correct: false },
          { text: "$100", correct: false },
          { text: "$150", correct: true },
          { text: "$200", correct: false }
        ]
      },
      {
        id: 3,
        question: "What information goes on the Initial List?",
        options: [
          { text: "Only member names", correct: false },
          { text: "Names and addresses of managers/members", correct: true },
          { text: "Financial information", correct: false },
          { text: "Business purpose only", correct: false }
        ]
      },
      {
        id: 4,
        question: "Is the Initial List filing optional in Nevada?",
        options: [
          { text: "Yes, it's optional", correct: false },
          { text: "No, it's required", correct: true },
          { text: "Only for large LLCs", correct: false },
          { text: "Only if you have multiple members", correct: false }
        ]
      },
      {
        id: 5,
        question: "Who needs to be listed on the Initial List?",
        options: [
          { text: "All employees", correct: false },
          { text: "Managers and/or members depending on structure", correct: true },
          { text: "Only the registered agent", correct: false },
          { text: "All customers", correct: false }
        ]
      }
    ]
  },
  5: {
    title: "Level 5: State Business License",
    description: "Understand Nevada's business license requirement!",
    color: "#ff9800",
    icon: "📜",
    questions: [
      {
        id: 1,
        question: "Is a State Business License required for all Nevada LLCs?",
        options: [
          { text: "No, it's optional", correct: false },
          { text: "Yes, required for all Nevada LLCs", correct: true },
          { text: "Only for retail businesses", correct: false },
          { text: "Only if you have employees", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the annual fee for a Nevada State Business License?",
        options: [
          { text: "$150", correct: false },
          { text: "$200", correct: true },
          { text: "$250", correct: false },
          { text: "$300", correct: false }
        ]
      },
      {
        id: 3,
        question: "How often must you renew your Nevada State Business License?",
        options: [
          { text: "Every 2 years", correct: false },
          { text: "Annually", correct: true },
          { text: "Every 5 years", correct: false },
          { text: "Only when asked", correct: false }
        ]
      },
      {
        id: 4,
        question: "When is the State Business License due?",
        options: [
          { text: "December 31st every year", correct: false },
          { text: "By the last day of your formation month", correct: true },
          { text: "Any time during the year", correct: false },
          { text: "January 1st every year", correct: false }
        ]
      },
      {
        id: 5,
        question: "What happens if you don't maintain your State Business License?",
        options: [
          { text: "Nothing happens", correct: false },
          { text: "Your LLC could be dissolved", correct: true },
          { text: "You just pay a small fine", correct: false },
          { text: "You get a warning letter", correct: false }
        ]
      }
    ]
  },
  6: {
    title: "Level 6: Operating Agreement",
    description: "Learn about this crucial internal document!",
    color: "#4caf50",
    icon: "📝",
    questions: [
      {
        id: 1,
        question: "Is an Operating Agreement required to be filed with the state?",
        options: [
          { text: "Yes, you must file it", correct: false },
          { text: "No, it's an internal document", correct: true },
          { text: "Only for multi-member LLCs", correct: false },
          { text: "Only if requested", correct: false }
        ]
      },
      {
        id: 2,
        question: "Should you have an Operating Agreement even as a single-member LLC?",
        options: [
          { text: "No, it's not needed", correct: false },
          { text: "Yes, it protects you legally", correct: true },
          { text: "Only if you plan to add members", correct: false },
          { text: "Only if required by your bank", correct: false }
        ]
      },
      {
        id: 3,
        question: "What should an Operating Agreement include?",
        options: [
          { text: "Only ownership percentages", correct: false },
          { text: "Ownership, profit/loss distribution, voting rights, management", correct: true },
          { text: "Just management structure", correct: false },
          { text: "Only voting rights", correct: false }
        ]
      },
      {
        id: 4,
        question: "When should you create your Operating Agreement?",
        options: [
          { text: "After several years of operation", correct: false },
          { text: "As soon as possible after formation", correct: true },
          { text: "Only when problems arise", correct: false },
          { text: "Only when adding new members", correct: false }
        ]
      },
      {
        id: 5,
        question: "Can an Operating Agreement be verbal?",
        options: [
          { text: "Yes, verbal is fine", correct: false },
          { text: "No, it should always be written", correct: true },
          { text: "Only for single-member LLCs", correct: false },
          { text: "Only if witnessed", correct: false }
        ]
      }
    ]
  },
  7: {
    title: "Level 7: EIN (Tax ID Number)",
    description: "Get your federal tax identification number!",
    color: "#607d8b",
    icon: "🆔",
    questions: [
      {
        id: 1,
        question: "What does EIN stand for?",
        options: [
          { text: "Employee Identification Number", correct: false },
          { text: "Employer Identification Number", correct: true },
          { text: "Entity Information Number", correct: false },
          { text: "Executive Identity Number", correct: false }
        ]
      },
      {
        id: 2,
        question: "Where do you get an EIN?",
        options: [
          { text: "Nevada Secretary of State", correct: false },
          { text: "IRS", correct: true },
          { text: "Local bank", correct: false },
          { text: "Chamber of Commerce", correct: false }
        ]
      },
      {
        id: 3,
        question: "How much does it cost to get an EIN directly from the IRS?",
        options: [
          { text: "$50", correct: false },
          { text: "Free", correct: true },
          { text: "$100", correct: false },
          { text: "$150", correct: false }
        ]
      },
      {
        id: 4,
        question: "Why do you need an EIN for your LLC?",
        options: [
          { text: "Only for marketing purposes", correct: false },
          { text: "For taxes and opening business bank accounts", correct: true },
          { text: "Only if you have employees", correct: false },
          { text: "Only for large businesses", correct: false }
        ]
      },
      {
        id: 5,
        question: "Can you apply for an EIN online?",
        options: [
          { text: "No, only by mail", correct: false },
          { text: "Yes, online is the fastest method", correct: true },
          { text: "Only by phone", correct: false },
          { text: "Only in person", correct: false }
        ]
      }
    ]
  },
  8: {
    title: "Level 8: Nevada State Taxes",
    description: "Understand your Nevada tax obligations!",
    color: "#e91e63",
    icon: "💰",
    questions: [
      {
        id: 1,
        question: "Does Nevada have a corporate income tax?",
        options: [
          { text: "Yes, 5% rate", correct: false },
          { text: "No, Nevada has no corporate income tax", correct: true },
          { text: "Yes, 10% rate", correct: false },
          { text: "Only for large corporations", correct: false }
        ]
      },
      {
        id: 2,
        question: "When do you need a Nevada sales tax permit?",
        options: [
          { text: "If you sell goods or taxable services", correct: true },
          { text: "All LLCs need one", correct: false },
          { text: "Only if you have a storefront", correct: false },
          { text: "Never required", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is the Nevada Commerce Tax threshold?",
        options: [
          { text: "$1 million in revenue", correct: false },
          { text: "$4 million in revenue", correct: true },
          { text: "$10 million in revenue", correct: false },
          { text: "All businesses pay it", correct: false }
        ]
      },
      {
        id: 4,
        question: "When do you need to register for Nevada payroll taxes?",
        options: [
          { text: "If you hire employees", correct: true },
          { text: "All LLCs must register", correct: false },
          { text: "Only if you have over 10 employees", correct: false },
          { text: "Never required", correct: false }
        ]
      },
      {
        id: 5,
        question: "What makes Nevada attractive for business taxes?",
        options: [
          { text: "High corporate tax rates", correct: false },
          { text: "No corporate income tax", correct: true },
          { text: "Complex tax structure", correct: false },
          { text: "High sales tax rates", correct: false }
        ]
      }
    ]
  },
  9: {
    title: "Level 9: Annual Requirements",
    description: "Stay compliant with ongoing Nevada LLC requirements!",
    color: "#795548",
    icon: "📅",
    questions: [
      {
        id: 1,
        question: "What must you file annually with Nevada?",
        options: [
          { text: "Annual Tax Return", correct: false },
          { text: "Annual List of Managers/Members", correct: true },
          { text: "Annual Financial Statement", correct: false },
          { text: "Annual Business Plan", correct: false }
        ]
      },
      {
        id: 2,
        question: "How much is the Annual List filing fee?",
        options: [
          { text: "$100", correct: false },
          { text: "$150", correct: true },
          { text: "$200", correct: false },
          { text: "$250", correct: false }
        ]
      },
      {
        id: 3,
        question: "When is the Annual List due?",
        options: [
          { text: "December 31st", correct: false },
          { text: "By the last day of your formation month", correct: true },
          { text: "January 15th", correct: false },
          { text: "Any time during the year", correct: false }
        ]
      },
      {
        id: 4,
        question: "How much is the annual State Business License renewal?",
        options: [
          { text: "$150", correct: false },
          { text: "$200", correct: true },
          { text: "$250", correct: false },
          { text: "$300", correct: false }
        ]
      },
      {
        id: 5,
        question: "What happens if you miss your annual filings?",
        options: [
          { text: "Nothing happens", correct: false },
          { text: "Your LLC could be dissolved by the state", correct: true },
          { text: "You just get a reminder notice", correct: false },
          { text: "You pay a small fine", correct: false }
        ]
      }
    ]
  }
};

export const getLLCUnlockedLevels = () => {
  const progress = localStorage.getItem('llcGameProgress');
  if (!progress) return [1];
  
  const parsedProgress = JSON.parse(progress);
  const unlockedLevels = [1];
  
  // Each level unlocks if previous level passed with 80%+
  for (let i = 1; i < 9; i++) {
    if (parsedProgress[i] && parsedProgress[i].percentage >= 80) {
      unlockedLevels.push(i + 1);
    } else {
      break; // Stop if any level hasn't been passed
    }
  }
  
  return unlockedLevels;
};

export const saveLLCGameProgress = (level, score, totalQuestions) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const progress = localStorage.getItem('llcGameProgress');
  let parsedProgress = {};
  
  if (progress) {
    parsedProgress = JSON.parse(progress);
  }
  
  parsedProgress[level] = {
    score,
    totalQuestions,
    percentage,
    completed: true,
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('llcGameProgress', JSON.stringify(parsedProgress));
  return percentage;
};
