// Organization and assignment mappings
export const ORGANIZATIONS = {
  "PLCY715": {
    name: "PLCY715 Fall25",
    owner: "UNCPublicPolicy", // GitHub organization/owner name
    assignments: {
      "🧑‍💻Week 2: Intro to R": "week-2",
      "🧑‍💻Week 3: Getting Data": "week-3",
      "🧑‍💻Week 4: Data Wrangling I": "week-4",
      "🧑‍💻Week 5: Data Wrangling II": "week-5",
    }
  },
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
