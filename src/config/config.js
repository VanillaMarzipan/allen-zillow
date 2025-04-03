export const apiConfig = {
    baseUrl: 'https://zillow-com1.p.rapidapi.com',
    x_rapidapi_key: 'a2acfeeb0fmsh024db1e577002c5p146dbdjsn1fe7b1a8d9ab',
    x_rapidapi_host: 'zillow-com1.p.rapidapi.com',
};

export const appStrings = {
    appTitle: 'Allen\'s Zillow!',
    defaultSearchTerm: 'Santa Monica, CA',
    noResults: 'Too bad bro, we don\'t see any houses here!'
};

export const filterDescriptions = {
    statusTypes: 'Status Types: ',
    homeTypes: 'Home Types: ',
}

export const statusTypes = [
    {
        key: '',
        value: ''
    },
    {
        key: 'ForSale',
        value: 'For Sale',
    }, 
    {
        key: 'ForRent',
        value: 'For Rent',
    },
    {
        key: 'RecentlySold',
        value: 'Recently Sold'
    }
];

export const homeTypes = [
    {
        key: '',
        value: ''
    },
    {
        key: 'Townhomes',
        value: 'Townhomes',
    },
    {
        key: 'Houses',
        value: 'Houses',
    },
    {
        key: 'Apartments_Condos_Co-ops',
        value: 'Apartments, Condos and Co-ops'
    }
];
