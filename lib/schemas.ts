import { z } from "zod";

export const ProjectVisualizationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  screenshotUrl: z.string(),
  liveLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  techStack: z.array(z.string()).optional(),
  year: z.number().int().optional(),
});

export const ShortJourneySchema = z.object({
  id: z.string(),
  phase: z.string(),
  period: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const FullJourneySchema = z.object({
  id: z.string(),
  year: z.number().int(),
  summary: z.string(),
  bestProject: ProjectVisualizationSchema.optional(),
  projects: z.array(ProjectVisualizationSchema).optional(),
});

export type ProjectVisualization = z.infer<typeof ProjectVisualizationSchema>;
export type ShortJourney = z.infer<typeof ShortJourneySchema>;
export type FullJourney = z.infer<typeof FullJourneySchema>;
