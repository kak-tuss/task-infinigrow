export enum MONTHS {
    JANUARY, FEBRUARY, MARCH, APRIL, 
    MAY, JUNE, JULY, AUGUST, 
    SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER
}
export enum QUARTERS {
    Q1, Q2, Q3, Q4
}
export enum FREQUENCY {
    ANNUALLY, QUARTERLY, MONTHLY
}

export interface Budget {
    breakdown: 
        [
            number, number, number, 
            number, number, number, 
            number, number, number, 
            number, number, number
        ] | [
            number, number, number, number
        ] | [
            number
        ]
}

export interface BudgetData {
    id: number;
    category: string;
    name: string;
    icon: string;
    frequency: FREQUENCY;
    currency: string;
    allocation: boolean;
    budget: Budget;
}