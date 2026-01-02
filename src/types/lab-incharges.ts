/**
 * Type definitions for Lab Incharges page
 * Strict typing without 'any' types
 */

export interface LabIncharge {
  labName: string;
  personName: string;
  rowspan?: number;
}

export interface SectionHeader {
  title: string;
  colspan: number;
  isHeader: true;
}
