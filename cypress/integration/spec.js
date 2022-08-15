describe('OnPoint E2E Test', () => {
  it('Visit soft.angel site', () => {
    cy.visit('/');
    cy.wait(5000);

    //Dashboard page E2E Test
    cy.get('.app-bar-menu-item-home').should('have.length', 1);
    cy.get('.app-bar-menu-item-location').should('have.length', 1);
    cy.get('.app-bar-menu-item-episode').should('have.length', 1);
    cy.get('.ant-table-filter-trigger').should('have.length', 3);
    cy.get('.ant-avatar-image').first().click();
    cy.wait(2000);
    cy.get('.ant-modal-close-x').click();
    cy.wait(2000);
    cy.get('.ant-pagination-item-active').next().click();
    cy.wait(5000);
    cy.get('.ant-avatar-image').first().click();
    cy.wait(2000);
    cy.get('.ant-modal-close-x').click();
    cy.wait(2000);

    //Location page E2E Test
    cy.get('.app-bar-menu-item-location').click();
    cy.wait(5000);
    cy.get('.ant-table-filter-trigger').should('have.length', 3);    
    cy.get('.ant-table-row-level-0').first().click();
    cy.wait(2000);
    cy.get('.ant-modal-close-x').click();
    cy.wait(2000);
    cy.get('.ant-pagination-item-active').next().click();
    cy.wait(5000);
    cy.get('.ant-table-row-level-0').first().click();
    cy.wait(2000);
    cy.get('.ant-modal-close-x').click();
    cy.wait(2000);

    //Location page E2E Test
    cy.get('.app-bar-menu-item-episode').click();
    cy.wait(5000);
    cy.get('.ant-table-filter-trigger').should('have.length', 2);
    cy.get('.ant-table-row-level-0').first().click();
    cy.wait(2000);
    cy.get('.ant-modal-close-x').click();
    cy.wait(2000);
    cy.get('.ant-pagination-item-active').next().click();
    cy.wait(5000);
    cy.get('.ant-table-row-level-0').first().click();
    cy.wait(2000);
    cy.get('.ant-modal-close-x').click();
    cy.wait(2000);
  });
});
