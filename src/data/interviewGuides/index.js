// src/data/interviewGuides/index.js
import { IBEXWEB_INTERVIEW_GUIDE } from './ibexweb-web-developer';

export const INTERVIEW_GUIDES = {
  'ibexweb-web-developer': IBEXWEB_INTERVIEW_GUIDE,
};

export function getInterviewGuide(slug) {
  return INTERVIEW_GUIDES[slug] || null;
}
