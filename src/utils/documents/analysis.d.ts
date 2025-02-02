import type { Finding, Recommendation } from '../../types/documents';
export declare function analyzeTaxForms(forms: any[]): Finding[];
export declare function generateRecommendations(findings: Finding[]): Recommendation[];
export declare function validateDocumentCompleteness(document: any): boolean;
