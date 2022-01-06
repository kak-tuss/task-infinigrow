import { BudgetData, FREQUENCY } from "src/app/interfaces";

export const DATA: BudgetData[] = [
    {
        'id': 0,
        'category': 'Display',
        'name': 'Display ads - Google Adwords',
        'icon': 'displayAdsGoogleAdWordsIcon',
        'frequency': FREQUENCY.ANNUALLY,
        'currency': '$',
        'allocation': true,
        'budget': {
            breakdown: [ 
                1000, 1000, 1000, 1000, 
                1000, 1000, 1000, 1000, 
                1000, 1000, 1000, 1000
            ]
        }
    },

    {
        'id': 1,
        'category': 'Events',
        'name': 'Organizing event',
        'icon': 'organisingEventIcon',
        'frequency': FREQUENCY.QUARTERLY,
        'currency': '$',
        'allocation': true,
        'budget': {
            breakdown: [ 
                6000, 6000, 7000, 6000 
            ]
        }
    },

    {
        'id': 2,
        'category': 'Paid Search',
        'name': 'Paid reviews',
        'icon': 'paidReviewsIcon',
        'frequency': FREQUENCY.MONTHLY,
        'currency': '$',
        'allocation': true,
        'budget': {
            breakdown: [ 
                6000
            ]
        }
    },
]; 
