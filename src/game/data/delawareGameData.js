export const delawareGameData = {
  1: {
    title: "Level 1: Choose Your LLC Name",
    description: "Learn the naming requirements for Delaware LLCs!",
    color: "#2E8B57",
    icon: "📝",
    questions: [
      {
        id: 1,
        question: "What MUST be included in your Delaware LLC name?",
        options: [
          { text: "'LLC' or 'Limited Liability Company'", correct: true },
          { text: "Delaware or DE", correct: false },
          { text: "Your personal name", correct: false },
          { text: "The year it was formed", correct: false }
        ]
      },
      {
        id: 2,
        question: "Where should you check name availability when forming a Delaware LLC for Nevada use?",
        options: [
          { text: "Only in Delaware", correct: false },
          { text: "Both Delaware and Nevada to avoid conflicts", correct: true },
          { text: "Only in Nevada", correct: false },
          { text: "Google search is sufficient", correct: false }
        ]
      },
      {
        id: 3,
        question: "Why check name availability in both states?",
        options: [
          { text: "It's required by federal law", correct: false },
          { text: "To avoid conflicts when registering as foreign LLC", correct: true },
          { text: "It's cheaper that way", correct: false },
          { text: "It's not necessary", correct: false }
        ]
      },
      {
        id: 4,
        question: "Can your Delaware LLC name be identical to an existing Nevada business?",
        options: [
          { text: "Yes, different states don't matter", correct: false },
          { text: "No, it could cause registration issues", correct: true },
          { text: "Only if you pay extra fees", correct: false },
          { text: "Only if you get permission", correct: false }
        ]
      },
      {
        id: 5,
        question: "What should you do before finalizing your Delaware LLC name?",
        options: [
          { text: "Check availability in Delaware only", correct: false },
          { text: "Check availability in both Delaware and Nevada", correct: true },
          { text: "Ask your neighbors", correct: false },
          { text: "Register a trademark first", correct: false }
        ]
      }
    ]
  },
  2: {
    title: "Level 2: Appoint Registered Agents",
    description: "Understand the dual registered agent requirement!",
    color: "#4169E1",
    icon: "👥",
    questions: [
      {
        id: 1,
        question: "How many registered agents do you need for this structure?",
        options: [
          { text: "One for Delaware only", correct: false },
          { text: "Two - one in Delaware and one in Nevada", correct: true },
          { text: "One for Nevada only", correct: false },
          { text: "None, they're optional", correct: false }
        ]
      },
      {
        id: 2,
        question: "What's the typical annual cost for a Delaware registered agent?",
        options: [
          { text: "$50-$100", correct: false },
          { text: "$100-$300", correct: true },
          { text: "$500-$1000", correct: false },
          { text: "It's free", correct: false }
        ]
      },
      {
        id: 3,
        question: "What type of address must your Nevada registered agent have?",
        options: [
          { text: "Any address will work", correct: false },
          { text: "A physical Nevada address", correct: true },
          { text: "A P.O. Box is sufficient", correct: false },
          { text: "Your Delaware address", correct: false }
        ]
      },
      {
        id: 4,
        question: "Can you use the same person as registered agent in both states?",
        options: [
          { text: "Yes, if they have addresses in both states", correct: true },
          { text: "No, it's prohibited", correct: false },
          { text: "Only for small LLCs", correct: false },
          { text: "Only with special permission", correct: false }
        ]
      },
      {
        id: 5,
        question: "Why do you need registered agents in both states?",
        options: [
          { text: "To receive legal documents in each state", correct: true },
          { text: "It's just a suggestion", correct: false },
          { text: "To reduce taxes", correct: false },
          { text: "For marketing purposes", correct: false }
        ]
      }
    ]
  },
  3: {
    title: "Level 3: File in Delaware",
    description: "Master the Delaware Certificate of Formation!",
    color: "#DC143C",
    icon: "📄",
    questions: [
      {
        id: 1,
        question: "What is the filing fee for Delaware Certificate of Formation?",
        options: [
          { text: "$75", correct: false },
          { text: "$110", correct: true },
          { text: "$150", correct: false },
          { text: "$200", correct: false }
        ]
      },
      {
        id: 2,
        question: "What information is required in the Delaware Certificate of Formation?",
        options: [
          { text: "LLC name + registered agent info", correct: true },
          { text: "Detailed business plan", correct: false },
          { text: "Financial statements", correct: false },
          { text: "All member personal information", correct: false }
        ]
      },
      {
        id: 3,
        question: "Is an Operating Agreement required to be filed with Delaware?",
        options: [
          { text: "Yes, it must be filed", correct: false },
          { text: "No, it's internal and not filed", correct: true },
          { text: "Only for multi-member LLCs", correct: false },
          { text: "Only if requested", correct: false }
        ]
      },
      {
        id: 4,
        question: "Who do you file the Certificate of Formation with in Delaware?",
        options: [
          { text: "Delaware Secretary of State", correct: false },
          { text: "Delaware Division of Corporations", correct: true },
          { text: "IRS", correct: false },
          { text: "Delaware Department of Revenue", correct: false }
        ]
      },
      {
        id: 5,
        question: "Should you draft an Operating Agreement for your Delaware LLC?",
        options: [
          { text: "No, it's not needed", correct: false },
          { text: "Yes, even though it's not filed", correct: true },
          { text: "Only if you have employees", correct: false },
          { text: "Only if required by your bank", correct: false }
        ]
      }
    ]
  },
  4: {
    title: "Level 4: Obtain EIN (Tax ID)",
    description: "Get your federal tax identification number!",
    color: "#FF8C00",
    icon: "🆔",
    questions: [
      {
        id: 1,
        question: "Where do you obtain an EIN for your Delaware LLC?",
        options: [
          { text: "Delaware Division of Corporations", correct: false },
          { text: "IRS", correct: true },
          { text: "Nevada Secretary of State", correct: false },
          { text: "Local bank", correct: false }
        ]
      },
      {
        id: 2,
        question: "How much does it cost to get an EIN directly from the IRS?",
        options: [
          { text: "$50", correct: false },
          { text: "Free", correct: true },
          { text: "$100", correct: false },
          { text: "$110", correct: false }
        ]
      },
      {
        id: 3,
        question: "Why do you need an EIN for your LLC?",
        options: [
          { text: "Bank accounts, employees, and taxes", correct: true },
          { text: "Only for marketing purposes", correct: false },
          { text: "Only if you have employees", correct: false },
          { text: "Only for large businesses", correct: false }
        ]
      },
      {
        id: 4,
        question: "When should you obtain your EIN?",
        options: [
          { text: "After Nevada registration", correct: false },
          { text: "After Delaware formation", correct: true },
          { text: "Only when opening a bank account", correct: false },
          { text: "At the end of the year", correct: false }
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
  5: {
    title: "Level 5: Register as Foreign LLC in Nevada",
    description: "Learn the Nevada foreign registration process!",
    color: "#9932CC",
    icon: "📋",
    questions: [
      {
        id: 1,
        question: "What is the filing fee for Nevada Application for Registration of Foreign LLC?",
        options: [
          { text: "$50", correct: false },
          { text: "$75", correct: true },
          { text: "$110", correct: false },
          { text: "$150", correct: false }
        ]
      },
      {
        id: 2,
        question: "What document do you need from Delaware for Nevada registration?",
        options: [
          { text: "Operating Agreement", correct: false },
          { text: "Certified copy of Delaware Certificate of Formation", correct: true },
          { text: "Tax returns", correct: false },
          { text: "Business plan", correct: false }
        ]
      },
      {
        id: 3,
        question: "How much does a certified copy from Delaware typically cost?",
        options: [
          { text: "$25", correct: false },
          { text: "$50", correct: true },
          { text: "$75", correct: false },
          { text: "$100", correct: false }
        ]
      },
      {
        id: 4,
        question: "What information must be included in the Nevada foreign LLC application?",
        options: [
          { text: "Only the LLC name", correct: false },
          { text: "Certified copy, registered agent info, managers/members", correct: true },
          { text: "Financial statements", correct: false },
          { text: "Delaware tax records", correct: false }
        ]
      },
      {
        id: 5,
        question: "Why register as a foreign LLC in Nevada?",
        options: [
          { text: "To conduct business in Nevada legally", correct: true },
          { text: "It's optional", correct: false },
          { text: "For tax benefits only", correct: false },
          { text: "To avoid Delaware fees", correct: false }
        ]
      }
    ]
  },
  6: {
    title: "Level 6: Nevada Initial Filings",
    description: "Complete your Nevada compliance requirements!",
    color: "#CD5C5C",
    icon: "📜",
    questions: [
      {
        id: 1,
        question: "What two filings are required with your Nevada foreign registration?",
        options: [
          { text: "Tax returns and business plan", correct: false },
          { text: "Initial List of Managers/Members and State Business License", correct: true },
          { text: "Operating Agreement and EIN application", correct: false },
          { text: "Bank account and insurance", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the fee for the Nevada Initial List of Managers/Members?",
        options: [
          { text: "$100", correct: false },
          { text: "$150", correct: true },
          { text: "$200", correct: false },
          { text: "$250", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is the fee for the Nevada State Business License?",
        options: [
          { text: "$150", correct: false },
          { text: "$200", correct: true },
          { text: "$250", correct: false },
          { text: "$300", correct: false }
        ]
      },
      {
        id: 4,
        question: "When must these Nevada initial filings be completed?",
        options: [
          { text: "Within 30 days of registration", correct: false },
          { text: "Along with your foreign registration", correct: true },
          { text: "Within one year", correct: false },
          { text: "Only when requested", correct: false }
        ]
      },
      {
        id: 5,
        question: "What is the combined cost of Nevada initial filings?",
        options: [
          { text: "$300", correct: false },
          { text: "$350", correct: true },
          { text: "$400", correct: false },
          { text: "$450", correct: false }
        ]
      }
    ]
  },
  7: {
    title: "Level 7: Annual Compliance",
    description: "Understand your ongoing obligations in both states!",
    color: "#20B2AA",
    icon: "📅",
    questions: [
      {
        id: 1,
        question: "What is Delaware's annual franchise tax?",
        options: [
          { text: "$200", correct: false },
          { text: "$300", correct: true },
          { text: "$400", correct: false },
          { text: "$500", correct: false }
        ]
      },
      {
        id: 2,
        question: "When is Delaware's annual franchise tax due?",
        options: [
          { text: "December 31st", correct: false },
          { text: "June 1st", correct: true },
          { text: "January 15th", correct: false },
          { text: "March 31st", correct: false }
        ]
      },
      {
        id: 3,
        question: "What are Nevada's annual filing requirements for foreign LLCs?",
        options: [
          { text: "Business license only", correct: false },
          { text: "Business license + annual list of managers", correct: true },
          { text: "Annual list only", correct: false },
          { text: "No annual requirements", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is the combined annual cost for Nevada filings?",
        options: [
          { text: "$300", correct: false },
          { text: "$350", correct: true },
          { text: "$400", correct: false },
          { text: "$450", correct: false }
        ]
      },
      {
        id: 5,
        question: "What must you maintain in both states annually?",
        options: [
          { text: "Business licenses", correct: false },
          { text: "Registered agents", correct: true },
          { text: "Office space", correct: false },
          { text: "Local bank accounts", correct: false }
        ]
      }
    ]
  },
  8: {
    title: "Level 8: Cost Analysis",
    description: "Master the financial aspects of dual-state setup!",
    color: "#B8860B",
    icon: "💰",
    questions: [
      {
        id: 1,
        question: "What is the approximate Year 1 total cost range for this structure?",
        options: [
          { text: "$500-$800", correct: false },
          { text: "$1,085-$1,385", correct: true },
          { text: "$2,000-$3,000", correct: false },
          { text: "$500-$1,000", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the approximate ongoing annual cost (after Year 1)?",
        options: [
          { text: "$300-$500", correct: false },
          { text: "$650-$850 plus agent fees", correct: true },
          { text: "$1,000-$1,500", correct: false },
          { text: "$200-$400", correct: false }
        ]
      },
      {
        id: 3,
        question: "What makes this structure more expensive than a simple Nevada LLC?",
        options: [
          { text: "Only the registered agent fees", correct: false },
          { text: "Dual-state filings and ongoing compliance", correct: true },
          { text: "Higher tax rates", correct: false },
          { text: "Required attorney fees", correct: false }
        ]
      },
      {
        id: 4,
        question: "When might this structure be worth the extra cost?",
        options: [
          { text: "For any small business", correct: false },
          { text: "When raising outside funding (Delaware is investor-friendly)", correct: true },
          { text: "Only for large corporations", correct: false },
          { text: "Never worth it", correct: false }
        ]
      },
      {
        id: 5,
        question: "If you're NOT raising outside funding, what's the recommendation?",
        options: [
          { text: "Always use Delaware + Nevada structure", correct: false },
          { text: "Just forming in Nevada is cheaper and simpler", correct: true },
          { text: "Form in a different state", correct: false },
          { text: "Don't form an LLC at all", correct: false }
        ]
      }
    ]
  }
};

export const getDelawareUnlockedLevels = () => {
  const progress = localStorage.getItem('delawareGameProgress');
  if (!progress) return [1];
  
  const parsedProgress = JSON.parse(progress);
  const unlockedLevels = [1];
  
  // Each level unlocks if previous level passed with 80%+
  for (let i = 1; i < 8; i++) {
    if (parsedProgress[i] && parsedProgress[i].percentage >= 80) {
      unlockedLevels.push(i + 1);
    } else {
      break; // Stop if any level hasn't been passed
    }
  }
  
  return unlockedLevels;
};

export const saveDelawareGameProgress = (level, score, totalQuestions) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const progress = localStorage.getItem('delawareGameProgress');
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
  
  localStorage.setItem('delawareGameProgress', JSON.stringify(parsedProgress));
  return percentage;
};
