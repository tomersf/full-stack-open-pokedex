describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit(`http://localhost:${Cypress.env("SERVER_PORT")}`);
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
});
