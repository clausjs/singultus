const config = {
    featured: [{
        name: 'Featured Link',
        background: '/assets/logo.png',
        link: 'http://google.com'
    }, {
        name: 'Another Feaured link',
        link: 'http://google.com'
    }, {
        name: 'One more',
        link: 'http://google.com'
    }, {
        name: 'Oh no!',
        link: 'http://google.com'
    }],
    categories: [{
        title: 'Category 1',
        links: [{
            name: 'Link 1',
            link: 'http://google.com'
        }, {
            name: 'Link 2',
            link: 'http://google.com'
        }]
    }, {
        title: 'Category 2',
        links: [{
            name: 'Link 1',
            link: 'http://google.com'
        }, {
            name: 'Link 2',
            link: 'http://google.com'
        }]
    }, {
        title: 'Category 3',
        links: [{
            name: 'Link 1',
            link: 'http://google.com'
        }]
    }, {
        title: 'Category 4',
        links: [{
            name: 'Link 1',
            link: 'http://google.com'
        }, {
            name: 'Link 2',
            link: 'http://google.com'
        }, {
            name: 'Link 3',
            link: 'http://google.com'
        }, {
            name: 'Link 4',
            link: 'http://google.com'
        }]
    }]
}

export {
    config,
    config as default,
}