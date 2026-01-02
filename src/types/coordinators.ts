/**
 * Type definitions for Co-ordinators page
 * Strict typing without 'any' types
 */

export interface CoordinatorItem {
  role: string;
  coordinators: string[];
}

export interface SubjectCoordinator {
  subject: string;
  coordinator: string;
}

export interface DispersalItem {
  level: string;
  coordinator: string;
}
