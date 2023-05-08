describe("My First Test", () => {
  it("fills in date and triggers result", () => {
    cy.visit("https://your-age-in-days-from-di.netlify.app/");
    cy.get('[data-test="date-input"]').type("1994-10-10").trigger("change");
  });
});
