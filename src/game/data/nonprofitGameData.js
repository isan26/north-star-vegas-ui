export const nonprofitGameData = {
  1: {
    title: "Level 1: Planning & Brainstorming",
    description: "Learn the foundation of nonprofit planning!",
    color: "#2E8B57",
    icon: "💡",
    questions: [
      {
        id: 1,
        question: "What must your mission statement align with to qualify for 501(c)(3) status?",
        options: [
          { text: "Business purposes only", correct: false },
          { text: "Charitable, educational, religious, or scientific purposes", correct: true },
          { text: "Political campaign activities", correct: false },
          { text: "Personal financial gain", correct: false }
        ]
      },
      {
        id: 2,
        question: "How many virtual planning meetings are recommended before filing?",
        options: [
          { text: "1 meeting", correct: false },
          { text: "2-3 meetings", correct: true },
          { text: "5-10 meetings", correct: false },
          { text: "No meetings needed", correct: false }
        ]
      },
      {
        id: 3,
        question: "What should be clearly described in your planning phase?",
        options: [
          { text: "Only your mission statement", correct: false },
          { text: "Programs/activities, beneficiaries, and mission", correct: true },
          { text: "Just the beneficiaries", correct: false },
          { text: "Only financial projections", correct: false }
        ]
      },
      {
        id: 4,
        question: "Who benefits and how should be defined during planning?",
        options: [
          { text: "Only board members", correct: false },
          { text: "Your target beneficiaries and community", correct: true },
          { text: "Government officials", correct: false },
          { text: "Private investors", correct: false }
        ]
      },
      {
        id: 5,
        question: "What are the key deliverables from the planning phase?",
        options: [
          { text: "Meeting notes, draft mission, program outlines", correct: true },
          { text: "Only financial statements", correct: false },
          { text: "Just the mission statement", correct: false },
          { text: "Board member resumes", correct: false }
        ]
      }
    ]
  },
  2: {
    title: "Level 2: State-Level Incorporation",
    description: "Master the Nevada incorporation process!",
    color: "#4169E1",
    icon: "📋",
    questions: [
      {
        id: 1,
        question: "Where do you file Articles of Incorporation in Nevada?",
        options: [
          { text: "Local courthouse", correct: false },
          { text: "Nevada Secretary of State", correct: true },
          { text: "IRS office", correct: false },
          { text: "City hall", correct: false }
        ]
      },
      {
        id: 2,
        question: "What IRS-required language must be in your Articles of Incorporation?",
        options: [
          { text: "Only the organization name", correct: false },
          { text: "Purpose clause and dissolution clause", correct: true },
          { text: "Just the dissolution clause", correct: false },
          { text: "Financial projections", correct: false }
        ]
      },
      {
        id: 3,
        question: "What must the purpose clause reference?",
        options: [
          { text: "Business profits", correct: false },
          { text: "501(c)(3) charitable purposes", correct: true },
          { text: "Political activities", correct: false },
          { text: "Personal benefits", correct: false }
        ]
      },
      {
        id: 4,
        question: "Where must assets go upon dissolution according to IRS rules?",
        options: [
          { text: "To board members", correct: false },
          { text: "To another 501(c)(3) or the government", correct: true },
          { text: "To private investors", correct: false },
          { text: "To the highest bidder", correct: false }
        ]
      },
      {
        id: 5,
        question: "How much does it cost to get an EIN from the IRS?",
        options: [
          { text: "$100", correct: false },
          { text: "Free", correct: true },
          { text: "$50", correct: false },
          { text: "$600", correct: false }
        ]
      }
    ]
  },
  3: {
    title: "Level 3: IRS Form 1023-EZ Eligibility",
    description: "Understand Form 1023-EZ vs. Full 1023 requirements!",
    color: "#DC143C",
    icon: "📄",
    questions: [
      {
        id: 1,
        question: "What is the maximum projected annual gross receipts for Form 1023-EZ eligibility?",
        options: [
          { text: "$25,000 for each of the first 3 years", correct: false },
          { text: "$50,000 for each of the first 3 years", correct: true },
          { text: "$100,000 for each of the first 3 years", correct: false },
          { text: "$250,000 for each of the first 3 years", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the maximum total assets limit for Form 1023-EZ?",
        options: [
          { text: "$100,000", correct: false },
          { text: "$250,000", correct: true },
          { text: "$500,000", correct: false },
          { text: "$1,000,000", correct: false }
        ]
      },
      {
        id: 3,
        question: "Which organizations are NOT eligible for Form 1023-EZ?",
        options: [
          { text: "Environmental groups", correct: false },
          { text: "Churches, hospitals, schools", correct: true },
          { text: "Animal welfare organizations", correct: false },
          { text: "Arts organizations", correct: false }
        ]
      },
      {
        id: 4,
        question: "What is the filing fee for Form 1023-EZ?",
        options: [
          { text: "$300", correct: false },
          { text: "$600", correct: true },
          { text: "$1,000", correct: false },
          { text: "Free", correct: false }
        ]
      },
      {
        id: 5,
        question: "What is the average review time for Form 1023-EZ?",
        options: [
          { text: "6-12 months", correct: false },
          { text: "2-4 weeks", correct: true },
          { text: "1-2 years", correct: false },
          { text: "3-6 months", correct: false }
        ]
      }
    ]
  },
  4: {
    title: "Level 4: Full Form 1023 Requirements",
    description: "Learn when the full Form 1023 is required!",
    color: "#FF8C00",
    icon: "📝",
    questions: [
      {
        id: 1,
        question: "When must you file the full Form 1023 instead of 1023-EZ?",
        options: [
          { text: "When you don't meet 1023-EZ eligibility requirements", correct: true },
          { text: "When you prefer more paperwork", correct: false },
          { text: "When you have a small budget", correct: false },
          { text: "When filing in Nevada", correct: false }
        ]
      },
      {
        id: 2,
        question: "What is the filing fee for the full Form 1023?",
        options: [
          { text: "$300", correct: false },
          { text: "$600", correct: true },
          { text: "$1,200", correct: false },
          { text: "Free", correct: false }
        ]
      },
      {
        id: 3,
        question: "What is the typical review time for the full Form 1023?",
        options: [
          { text: "2-4 weeks", correct: false },
          { text: "3-12 months", correct: true },
          { text: "1-2 years", correct: false },
          { text: "6 months exactly", correct: false }
        ]
      },
      {
        id: 4,
        question: "What additional requirement does the full Form 1023 have?",
        options: [
          { text: "Detailed narrative and supporting documents", correct: true },
          { text: "Only basic information", correct: false },
          { text: "Just financial projections", correct: false },
          { text: "Only board member information", correct: false }
        ]
      },
      {
        id: 5,
        question: "If your organization is a hospital, which form must you use?",
        options: [
          { text: "Form 1023-EZ", correct: false },
          { text: "Full Form 1023", correct: true },
          { text: "Form 990", correct: false },
          { text: "No form required", correct: false }
        ]
      }
    ]
  },
  5: {
    title: "Level 5: Governance & Organization",
    description: "Build your nonprofit's governance structure!",
    color: "#9932CC",
    icon: "⚖️",
    questions: [
      {
        id: 1,
        question: "What should bylaws include?",
        options: [
          { text: "Only board member names", correct: false },
          { text: "Board structure, terms, voting rules, meeting requirements", correct: true },
          { text: "Just meeting times", correct: false },
          { text: "Only financial procedures", correct: false }
        ]
      },
      {
        id: 2,
        question: "What should be on the initial board meeting agenda?",
        options: [
          { text: "Adopt bylaws, elect officers, authorize filings", correct: true },
          { text: "Only elect officers", correct: false },
          { text: "Just discuss fundraising", correct: false },
          { text: "Only review finances", correct: false }
        ]
      },
      {
        id: 3,
        question: "What digital system is recommended for organization?",
        options: [
          { text: "Email only", correct: false },
          { text: "Google Drive or Notion for bylaws, EIN, Articles, IRS filings", correct: true },
          { text: "Physical files only", correct: false },
          { text: "No organization needed", correct: false }
        ]
      },
      {
        id: 4,
        question: "Why are board duties and roles important to define?",
        options: [
          { text: "For legal compliance and clarity", correct: true },
          { text: "It's not important", correct: false },
          { text: "Only for large organizations", correct: false },
          { text: "Just for IRS purposes", correct: false }
        ]
      },
      {
        id: 5,
        question: "What are the key deliverables from the governance phase?",
        options: [
          { text: "Bylaws, board agenda, roles document, shared folder", correct: true },
          { text: "Only bylaws", correct: false },
          { text: "Just the shared folder", correct: false },
          { text: "Only role definitions", correct: false }
        ]
      }
    ]
  },
  6: {
    title: "Level 6: Grant Preparation",
    description: "Learn the fundamentals of grant writing!",
    color: "#CD5C5C",
    icon: "💰",
    questions: [
      {
        id: 1,
        question: "What should a mock microgrant application include?",
        options: [
          { text: "Mission alignment, program description, community impact", correct: true },
          { text: "Only financial projections", correct: false },
          { text: "Just the mission statement", correct: false },
          { text: "Only board member information", correct: false }
        ]
      },
      {
        id: 2,
        question: "What types of funding sources should you research?",
        options: [
          { text: "Community foundations, local government grants, donor-advised funds", correct: true },
          { text: "Only government grants", correct: false },
          { text: "Just private foundations", correct: false },
          { text: "Only individual donors", correct: false }
        ]
      },
      {
        id: 3,
        question: "Why is mission alignment important in grant applications?",
        options: [
          { text: "Funders want to see their values reflected in your work", correct: true },
          { text: "It's not important", correct: false },
          { text: "Only for tax purposes", correct: false },
          { text: "Just for compliance", correct: false }
        ]
      },
      {
        id: 4,
        question: "What should you describe in your program description?",
        options: [
          { text: "Specific activities and how they serve your mission", correct: true },
          { text: "Only the mission statement", correct: false },
          { text: "Just financial needs", correct: false },
          { text: "Only board qualifications", correct: false }
        ]
      },
      {
        id: 5,
        question: "What are the deliverables from grant preparation?",
        options: [
          { text: "Sample grant narrative, funding leads list", correct: true },
          { text: "Only the grant narrative", correct: false },
          { text: "Just funding sources", correct: false },
          { text: "Only financial projections", correct: false }
        ]
      }
    ]
  },
  7: {
    title: "Level 7: Final Organization & Systems",
    description: "Complete your nonprofit setup with proper organization!",
    color: "#20B2AA",
    icon: "📁",
    questions: [
      {
        id: 1,
        question: "How should you organize your nonprofit's files?",
        options: [
          { text: "Keep everything in email", correct: false },
          { text: "Use Google Drive or Notion with organized folders", correct: true },
          { text: "Physical files only", correct: false },
          { text: "No organization needed", correct: false }
        ]
      },
      {
        id: 2,
        question: "What should be included in your organized digital system?",
        options: [
          { text: "Bylaws, EIN, Articles, IRS filings, grants", correct: true },
          { text: "Only financial documents", correct: false },
          { text: "Just the Articles of Incorporation", correct: false },
          { text: "Only grant applications", correct: false }
        ]
      },
      {
        id: 3,
        question: "What ongoing items should be summarized for future reference?",
        options: [
          { text: "Annual filings, state charity registration", correct: true },
          { text: "Only board meetings", correct: false },
          { text: "Just fundraising events", correct: false },
          { text: "Only volunteer activities", correct: false }
        ]
      },
      {
        id: 4,
        question: "Why is a Q&A and handoff session important?",
        options: [
          { text: "Ensures all stakeholders understand next steps", correct: true },
          { text: "It's not necessary", correct: false },
          { text: "Only for large organizations", correct: false },
          { text: "Just for compliance", correct: false }
        ]
      },
      {
        id: 5,
        question: "What should be delivered in the final deliverables package?",
        options: [
          { text: "All completed tasks, organized files, and pending items summary", correct: true },
          { text: "Only the IRS filing", correct: false },
          { text: "Just the Articles of Incorporation", correct: false },
          { text: "Only financial documents", correct: false }
        ]
      }
    ]
  },
  8: {
    title: "Level 8: Final Deliverables Checklist",
    description: "Master the complete nonprofit formation package!",
    color: "#B8860B",
    icon: "✅",
    questions: [
      {
        id: 1,
        question: "What planning documents should be in your final deliverables?",
        options: [
          { text: "Meeting notes + planning summaries", correct: true },
          { text: "Only meeting notes", correct: false },
          { text: "Just planning summaries", correct: false },
          { text: "No planning documents needed", correct: false }
        ]
      },
      {
        id: 2,
        question: "What state-level documents should be included?",
        options: [
          { text: "Filed Articles of Incorporation (NV)", correct: true },
          { text: "Only draft articles", correct: false },
          { text: "Just filing receipts", correct: false },
          { text: "No state documents needed", correct: false }
        ]
      },
      {
        id: 3,
        question: "What federal tax documents should be in the package?",
        options: [
          { text: "EIN confirmation and IRS Form 1023-EZ (or draft 1023)", correct: true },
          { text: "Only EIN confirmation", correct: false },
          { text: "Just Form 1023-EZ", correct: false },
          { text: "No federal documents needed", correct: false }
        ]
      },
      {
        id: 4,
        question: "What governance documents should be included?",
        options: [
          { text: "Bylaws draft and first board meeting agenda", correct: true },
          { text: "Only bylaws", correct: false },
          { text: "Just meeting agenda", correct: false },
          { text: "No governance documents needed", correct: false }
        ]
      },
      {
        id: 5,
        question: "What should be the final component of your deliverables?",
        options: [
          { text: "Mock grant narrative and organized digital system", correct: true },
          { text: "Only grant narrative", correct: false },
          { text: "Just digital files", correct: false },
          { text: "No additional components needed", correct: false }
        ]
      }
    ]
  }
};

export const getNonprofitUnlockedLevels = () => {
  const progress = localStorage.getItem('nonprofitGameProgress');
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

export const saveNonprofitGameProgress = (level, score, totalQuestions) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const progress = localStorage.getItem('nonprofitGameProgress');
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
  
  localStorage.setItem('nonprofitGameProgress', JSON.stringify(parsedProgress));
  return percentage;
};
