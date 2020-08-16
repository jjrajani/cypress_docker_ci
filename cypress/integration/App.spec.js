/// <reference types="cypress" />

context("App", () => {
  beforeEach(() => {
    cy.visit("http://172.19.0.2:3000");
  });

  it("Dispalys the logo", () => {
    cy.get(".App-logo").should("exist");
  });

  it("Dispalys the logo", () => {
    cy.get(".logo").should("exist");
  });

  it("Dispalys a link to react docs", () => {
    cy.get("a")
      .should("have.attr", "href")
      .and("include", "https://reactjs.org");
  });
});
