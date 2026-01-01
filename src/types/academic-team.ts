/**
 * Type definitions for Academic Team page
 * Strict typing without 'any' types
 */

export interface SeniorLeadershipMember {
  role: string;
  name: string;
}

export interface AcademicCoordinator {
  name: string;
  classes: string;
}

export interface DepartmentMember {
  role: string;
  name: string;
}

export interface Department {
  name: string;
  members: DepartmentMember[];
}

export interface CBSEMember {
  role: string;
  name: string;
}
