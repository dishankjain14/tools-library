import React from "react";
import "./../styles/sortingFilter.css";

const SortingFilter = ({ setCategory, setSort }) => {
  const categories = [
    {
      title: "AI TEXT GENERATOR",
      subcategories: [
        "AI CONTENT GENERATORS",
        "AI WRITING TOOLS",
        "AI SUMMARIZER",
        "AI STORY TELLER",
        "AI PARAPHRASER",
        "AI WRITER",
        "AI PROMPT GENERATOR",
        "AI COPYWRITING",
        "AI NOTES TAKER",
      ],
    },
    {
      title: "AI IMAGE GENERATORS",
      subcategories: [
        "AI IMAGE EDITORS",
        "AI TEXT TO IMAGE",
        "DESIGN AI",
      ],
    },
    {
      title: "AI AUDIO GENERATORS",
      subcategories: [
        "AI MUSIC",
        "AI TRANSCRIBER",
        "AI VOICE GENERATORS",
        "AI AUDIO ENHANCER",
        "AI AUDIO EDITING",
        "TEXT TO SPEECH",
      ],
    },
    {
      title: "AI VIDEO TOOLS",
      subcategories: [
        "AI VIDEO EDITING",
        "AI VIDEO GENERATOR",
        "TEXT TO VIDEO AI",
        "AI VIDEO ENHANCER",
      ],
    },
    {
      title: "AI ART GENERATOR",
      subcategories: [
        "AI CARTOON GENERATORS",
        "AI 3D",
        "AI LOGO GENERATORS",
        "AI PHOTOSHOP",
        "AI AVATARS",
        "AI DRAWING",
        "AI IMAGE TO IMAGE",
        "AI PORTRAIT GENERATOR",
      ],
    },
    {
      title: "AI DEVELOPER TOOLS",
      subcategories: [
        "LOW CODE NO CODE",
        "SQL",
        "GITHUB",
        "AI CODE ASSISTANT",
        "AI CODE GENERATOR",
        "AI WEBSITE BUILDER",
      ],
    },
    {
      title: "AI PRODUCTIVITY TOOLS",
      subcategories: [
        "AI SEARCH ENGINE",
        "AI TRANSLATOR",
        "AI RESEARCH",
        "AI SPREADSHEETS",
        "AI PRESENTATIONS",
        "AI ASSISTANT",
        "CHATGPT PLUGINS",
        "AI CONTENT GENERATOR",
        "AI EMAIL ASSISTANT",
      ],
    },
    {
      title: "AI AUTOMATION TOOLS",
      subcategories: [
        "AI AGENTS",
        "AI WORKFLOWS",
        "GPTS",
        "CHATBOTS",
      ],
    },
    {
      title: "AI RESOURCES",
      subcategories: [
        "GOVERNMENT AI",
        "AI COURSES",
        "AI NEWSLETTER",
        "AI PROMPT",
      ],
    },
    {
      title: "AI FOR BUSINESS",
      subcategories: [
        "AI START UP TOOLS",
        "LEGAL AI",
        "AI SALES",
        "AI EDUCATION",
        "AI PROJECT MANAGEMENT",
        "AI HR TOOLS",
        "AI ANALYTICS",
        "REAL ESTATE AI",
        "FINANCE AI",
        "AI SOCIAL MEDIA",
        "AI MARKETING",
        "AI SEO",
        "AI CRYPTO TRADING BOTS",
        "AI STOCK TRADING BOTS",
        "AI CUSTOMER SERVICE",
        "AI ECOMMERCE",
        "AI LEADS GENERATION",
      ],
    },
    {
      title: "MISCELLANEOUS AI TOOLS",
      subcategories: [
        "FUN AI TOOLS",
        "AI GAMING",
        "STUDENT AI",
        "AI TEACHERS",
        "FASHION AI",
        "AI GIFT IDEAS",
        "HEALTH AI",
        "TRAVEL AI",
        "FITNESS AI",
        "AI DETECTOR",
        "AI CHATBOT",
        "FREE AI TOOLS",
        "AI MEETING ATTENDEE",
      ],
    },
  ];

  return (
    <div className="sorting-filter">
      {/* Sorting Categories */}
      <div className="categories">
        {categories.map((category) => (
          <div key={category.title} className="category-wrapper">
            <button className="category-btn">{category.title}</button>
            <div className="dropdown">
              {category.subcategories.map((subcategory) => (
                <div
                  key={subcategory}
                  onClick={(e) => setCategory(subcategory)}
                >
                  {subcategory}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => setSort(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default SortingFilter;
