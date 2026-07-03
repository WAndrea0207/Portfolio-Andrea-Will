/**
 * Complete project information structure
 * Used for project cards and detailed project modal
 */

export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  size: 'large' | 'medium' | 'small';
  
  // Detailed information for modal
  context: string;              // Why was this project created?
  objectives: string[];         // What were the main goals?
  technicalStack: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
  skillsDeveloped: string[];    // Competencies gained
  results: string;              // What was accomplished?
  improvements: string[];       // Possible future improvements
}
