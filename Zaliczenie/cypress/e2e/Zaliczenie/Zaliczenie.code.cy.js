/// <reference types="cypress" />

describe('Test 1', () => {
    it('Otworz pierwszy artykul a nastepnie otworz profil autora', () => {
        cy.visit('https://www.smashingmagazine.com');
        cy.get('h2 > a').first().click();
        cy.get('.author-post__author-title').click();
        });
      
     });
    
    
    /// <reference types="cypress" />
    
    describe('Test2', () => {
        it('Znalezienie frazy Jagiellonia Białystok', () => {
          cy.visit('https://www.wikipedia.org');
          cy.get("input[type='search']").type('Jagiellonia');
          cy.get("button[type='submit']").click();
          cy.contains('Jagiellonia Białystok');
        });
      });
    
    
    /// <reference types="cypress" />
    
    describe('Test3', () => {
        it('Darowizna dla Zuzi', () => {
            cy.visit('https://www.siepomaga.pl/zuzia');
           cy.contains("a", "Wesprzyj").click({ force: true });
            cy.get('[href="/rejestracja-potrzebujacego/nowy"]');
        });
    });
    
    
    /// <reference types="cypress" />
    
    describe('Test 4', () => {
        it('Zamknięcie ciasteczek WP', () => {
            cy.visit('www.wp.pl');
            cy.url().should('contain', 'www.wp.pl');
            cy.get('body > div > div > div > div > div > button:nth-child(2)').click();
        })
    })
    
    
    /// <reference types="cypress" />
    
    describe('Test 5', () => {
        it('Uruchomienie przeglądarki Google', () => {
            cy.visit('https://www.google.com')
            cy.title().should("eq", 'Google')
            cy.wait(4000)
            cy.get('div.gb_md').should('not.be.visible')
        });
    });
    
    
    /// <reference types="cypress" />
    
    describe('Test 6', () => {
        it('Zamknięcie ciasteczek Onet', () => {
            cy.visit('www.onet.pl');
            cy.url().should('contain', 'www.onet.pl');
            cy.get('body > div > div > div > div > div > button:nth-child(2)').click();
        })
    })
    
    
    /// <reference types="cypress" />
    
    describe('Test7', () => {
        it('Wlaczenie pierwszego artykulu z listy', () => {
            cy.viewport(1920, 1080)
            cy.visit('https://www.dlatesterow.pl/')
            cy.wait(200)
            cy.get('.custom-logo').should('be.visible')
            cy.get('.active > .np-single-slide-wrap > .np-slide-thumb > a > .attachment-news-portal-slider-medium').click()
        })
    })
    
    
    /// <reference types="cypress" />
    
    describe('Test8', () => {
        it('Widocznosc klasy css', () => {
            cy.visit('https://www.youtube.com/')
            cy.get('#endpoint').should('not.be.visible')
        })
    })
    

    /// <reference types="cypress" />
    
    describe('Test09', () => {
        it('Otwieranie artykulu z konkretnej frazy', () => {
            cy.viewport(1920, 1080)
            cy.visit('https://www.dlatesterow.pl/')
            cy.wait(200)
            cy.get('.custom-logo').should('be.visible')
            cy.get('.active > .np-single-slide-wrap > .np-slide-thumb > a > .attachment-news-portal-slider-medium').click()
            cy.get('.search-main > a > .fa').click()
            cy.get('.search-field').type('JMeter')
            cy.get('.search-submit').click()
            cy.contains('JMeter nagrywanie ruchu w przeglądarce')
        })
    })
    
    
    /// <reference types="cypress" />
    
    describe('Test10', () => {
        it('Otwarcie strony internetowej by potwierdzić url i tytuł strony', () => {
            cy.visit('https://kanonierzy.com/')
            cy.url().should("include", "kanonierzy");
            cy.title().should("include", "Aktualności ")
            cy.get('.votes').should('be.visible')
        });
    });
    
    
    /// <reference types="cypress" />
    
    describe('Test 11 ', () => {
        it('Wpisanie emaila', () => {
            cy.visit('https://example.cypress.io')
            cy.contains('type').click()
            cy.url().should('include', '/commands/actions')
            cy.get('.action-email')
                .type('fake@email.com')
                .should('have.value', 'fake@email.com')
        });
    });
    
    
    /// <reference types="cypress" />
    
    describe('Test 12', () => {
        it('Wyszukiwanie "Piotr Ladzinski" z niepowodzeniem', () => {
    cy.visit('https://www.smashingmagazine.com');
    cy.get('.headline-content').should('be.visible');
    cy.get('#js-search-input').type('Piotr Ladzinski');
        });
    
    });