describe("Pokedex", function () {
  beforeEach(function () {
    cy.visit(`http://localhost:${Cypress.env("SERVER_PORT")}`);
  });

  it("front page can be opened", function () {
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("Ivaysur pokemon is displayed", function () {
    cy.contains("div", "ivysaur").click();
    cy.contains("chlorophyll");
  });
});
